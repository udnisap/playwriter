
import { RelayConnection, debugLog } from './relayConnection';
import { create } from 'zustand';

// Relay URL - fixed port for MCP bridge
const RELAY_URL = 'ws://localhost:9988/extension';

type ConnectionState = 'disconnected' | 'reconnecting' | 'connected';

interface ExtensionState {
  connection: RelayConnection | undefined;
  connectedTabs: Map<number, string>;
  connectionState: ConnectionState;
  currentTabId: number | undefined;
}

const useExtensionStore = create<ExtensionState>(() => ({
  connection: undefined,
  connectedTabs: new Map(),
  connectionState: 'disconnected',
  currentTabId: undefined,
}));

async function updateIcon(tabId: number, state: 'connected' | 'disconnected' | 'connecting'): Promise<void> {
  try {
    switch (state) {
      case 'connected':
        await chrome.action.setIcon({
          tabId,
          path: {
            '16': '/icons/icon-green-16.png',
            '32': '/icons/icon-green-32.png',
            '48': '/icons/icon-green-48.png',
            '128': '/icons/icon-green-128.png'
          }
        });
        await chrome.action.setBadgeText({ tabId, text: '' });
        await chrome.action.setTitle({ tabId, title: 'Connected - Click to disconnect' });
        break;

      case 'connecting':
        await chrome.action.setIcon({
          tabId,
          path: {
            '16': '/icons/icon-gray-16.png',
            '32': '/icons/icon-gray-32.png',
            '48': '/icons/icon-gray-48.png',
            '128': '/icons/icon-gray-128.png'
          }
        });
        await chrome.action.setBadgeText({ tabId, text: '...' });
        await chrome.action.setBadgeBackgroundColor({ tabId, color: '#FF9800' });
        await chrome.action.setTitle({ tabId, title: 'Connecting...' });
        break;

      case 'disconnected':
      default:
        await chrome.action.setIcon({
          tabId,
          path: {
            '16': '/icons/icon-gray-16.png',
            '32': '/icons/icon-gray-32.png',
            '48': '/icons/icon-gray-48.png',
            '128': '/icons/icon-gray-128.png'
          }
        });
        await chrome.action.setBadgeText({ tabId, text: '' });
        await chrome.action.setTitle({ tabId, title: 'Click to attach debugger' });
        break;
    }
  } catch (error: any) {
    debugLog(`Error updating icon: ${error.message}`);
  }
}

useExtensionStore.subscribe((state, prevState) => {
  const prevTabs = new Set(prevState.connectedTabs.keys());
  const currentTabs = new Set(state.connectedTabs.keys());
  const prevConnectionState = prevState.connectionState;
  const currentConnectionState = state.connectionState;
  const prevCurrentTabId = prevState.currentTabId;
  const currentTabId = state.currentTabId;

  const connectionStateChanged = prevConnectionState !== currentConnectionState;
  const currentTabChanged = prevCurrentTabId !== currentTabId;

  const tabsToUpdate = new Set<number>();

  if (connectionStateChanged) {
    debugLog('Connection state changed:', prevConnectionState, '->', currentConnectionState);
    for (const tabId of currentTabs) {
      tabsToUpdate.add(tabId);
    }
  }

  const addedTabs = [...currentTabs].filter(id => !prevTabs.has(id));
  const removedTabs = [...prevTabs].filter(id => !currentTabs.has(id));

  for (const tabId of addedTabs) {
    tabsToUpdate.add(tabId);
  }

  for (const tabId of removedTabs) {
    tabsToUpdate.add(tabId);
  }

  if (currentTabChanged && currentTabId !== undefined) {
    tabsToUpdate.add(currentTabId);
  }

  for (const tabId of tabsToUpdate) {
    const isTracked = currentTabs.has(tabId);
    let iconState: 'connected' | 'disconnected' | 'connecting';

    if (currentConnectionState === 'disconnected') {
      iconState = 'disconnected';
    } else    if (!isTracked) {
      iconState = 'disconnected';
    } else if (currentConnectionState === 'connected') {
      iconState = 'connected';
    } else {
      iconState = 'connecting';
    }

    void updateIcon(tabId, iconState);
  }
});

async function ensureConnection(): Promise<void> {
    const { connection } = useExtensionStore.getState();
    if (connection) {
      debugLog('Connection already exists, reusing');
      return;
    }

    useExtensionStore.setState({ connectionState: 'reconnecting' });
    debugLog('No existing connection, creating new relay connection');
    debugLog('Waiting for server at http://localhost:9988...');

    while (useExtensionStore.getState().connectionState !== 'disconnected') {
      try {
        await fetch('http://localhost:9988', { method: 'HEAD' });
        debugLog('Server is available');
        break;
      } catch (error: any) {
        debugLog('Server not available, retrying in 1 second...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    if (useExtensionStore.getState().connectionState === 'disconnected') {
      debugLog('Connection cancelled by user');
      return;
    }

    debugLog('Server is ready, creating WebSocket connection to:', RELAY_URL);
    const socket = new WebSocket(RELAY_URL);
    debugLog('WebSocket created, initial readyState:', socket.readyState, '(0=CONNECTING, 1=OPEN, 2=CLOSING, 3=CLOSED)');

    await new Promise<void>((resolve, reject) => {
      let timeoutFired = false;
      const timeout = setTimeout(() => {
        timeoutFired = true;
        debugLog('=== WebSocket connection TIMEOUT after 5 seconds ===');
        debugLog('Final WebSocket readyState:', socket.readyState);
        debugLog('WebSocket URL:', socket.url);
        debugLog('Socket protocol:', socket.protocol);
        reject(new Error('Connection timeout'));
      }, 5000);

      socket.onopen = () => {
        if (timeoutFired) {
          debugLog('WebSocket opened but timeout already fired!');
          return;
        }
        debugLog('WebSocket onopen fired! readyState:', socket.readyState);
        clearTimeout(timeout);
        resolve();
      };

      socket.onerror = (error) => {
        debugLog('WebSocket onerror during connection:', error);
        debugLog('Error type:', error.type);
        debugLog('Current readyState:', socket.readyState);
        if (!timeoutFired) {
          clearTimeout(timeout);
          reject(new Error('WebSocket connection failed'));
        }
      };

      socket.onclose = (event) => {
        debugLog('WebSocket onclose during connection setup:', {
          code: event.code,
          reason: event.reason,
          wasClean: event.wasClean,
          readyState: socket.readyState
        });
        if (!timeoutFired) {
          clearTimeout(timeout);
          reject(new Error(`WebSocket closed: ${event.reason || event.code}`));
        }
      };

      debugLog('Event handlers set, waiting for connection...');
    });

    debugLog('WebSocket connected successfully, creating RelayConnection instance');
    const newConnection = new RelayConnection({
      ws: socket,
      onClose: () => {
        debugLog('=== Relay connection onClose callback triggered ===');
        const { connectedTabs } = useExtensionStore.getState();
        debugLog('Connected tabs before potential reconnection:', Array.from(connectedTabs.keys()));
        useExtensionStore.setState({ connection: undefined, connectionState: 'disconnected' });

        if (connectedTabs.size > 0) {
          debugLog('Tabs still connected, triggering reconnection');
          void reconnect();
        } else {
          debugLog('No tabs to reconnect');
        }
      },
      onTabDetached: (tabId) => {
        debugLog('=== Manual tab detachment detected for tab:', tabId, '===');
        debugLog('User closed debugger via Chrome automation bar');

        useExtensionStore.setState((state) => {
          const newTabs = new Map(state.connectedTabs);
          newTabs.delete(tabId);
          return { connectionState: 'disconnected', connectedTabs: newTabs };
        });
        debugLog('Removed tab from _connectedTabs map');
      }
    });

    useExtensionStore.setState({ connection: newConnection });
    debugLog('Connection established, WebSocket open (caller should set connectionState)');
  }

async function connectTab(tabId: number): Promise<void> {
    try {
      debugLog(`=== Starting connection to tab ${tabId} ===`);

      useExtensionStore.setState((state) => {
        const newTabs = new Map(state.connectedTabs);
        newTabs.set(tabId, '');
        return { connectedTabs: newTabs };
      });

      await ensureConnection();

      debugLog('Calling attachTab for tab:', tabId);
      const { connection } = useExtensionStore.getState();
      if (!connection) return
      const targetInfo = await connection.attachTab(tabId);
      debugLog('attachTab completed, updating targetId in connectedTabs map');
      useExtensionStore.setState((state) => {
        const newTabs = new Map(state.connectedTabs);

        newTabs.set(tabId, targetInfo?.targetId);
        return { connectedTabs: newTabs, connectionState: 'connected' };
      });

      debugLog(`=== Successfully connected to tab ${tabId} ===`);
    } catch (error: any) {
      debugLog(`=== Failed to connect to tab ${tabId} ===`);
      debugLog('Error details:', error);
      debugLog('Error stack:', error.stack);

      useExtensionStore.setState((state) => {
        const newTabs = new Map(state.connectedTabs);
        newTabs.delete(tabId);
        return { connectedTabs: newTabs };
      });

      chrome.action.setBadgeText({ tabId, text: '!' });
      chrome.action.setBadgeBackgroundColor({ tabId, color: '#f44336' });
      chrome.action.setTitle({ tabId, title: `Error: ${error.message}` });

      setTimeout(() => {
        const { connectedTabs } = useExtensionStore.getState();
        if (!connectedTabs.has(tabId)) {
          chrome.action.setBadgeText({ tabId, text: '' });
          chrome.action.setTitle({ tabId, title: 'Click to attach debugger' });
        }
      }, 3000);
    }
  }

async function disconnectTab(tabId: number): Promise<void> {
    debugLog(`=== Disconnecting tab ${tabId} ===`);

    const { connectedTabs, connection } = useExtensionStore.getState();
    if (!connectedTabs.has(tabId)) {
      debugLog('Tab not in connectedTabs map, ignoring disconnect');
      return;
    }

    debugLog('Calling detachTab on connection');
    connection?.detachTab(tabId);
    useExtensionStore.setState((state) => {
      const newTabs = new Map(state.connectedTabs);
      newTabs.delete(tabId);
      return { connectedTabs: newTabs };
    });
    debugLog('Tab removed from connectedTabs map');

    const { connectedTabs: updatedTabs, connection: updatedConnection } = useExtensionStore.getState();
    debugLog('Connected tabs remaining:', updatedTabs.size);
    if (updatedTabs.size === 0 && updatedConnection) {
      debugLog('No tabs remaining, closing relay connection');
      updatedConnection.close('All tabs disconnected');
      useExtensionStore.setState({ connection: undefined, connectionState: 'disconnected' });
    }
  }

async function reconnect(): Promise<void> {
    debugLog('=== Starting reconnection ===');
    const { connectedTabs } = useExtensionStore.getState();
    debugLog('Tabs to reconnect:', Array.from(connectedTabs.keys()));

    try {
      await ensureConnection();

      const tabsToReconnect = Array.from(connectedTabs.keys());
      debugLog('Re-attaching', tabsToReconnect.length, 'tabs');

      for (const tabId of tabsToReconnect) {
        const { connectedTabs: currentTabs } = useExtensionStore.getState();
        if (!currentTabs.has(tabId)) {
          debugLog('Tab', tabId, 'was manually disconnected during reconnection, skipping');
          continue;
        }

        try {
          debugLog('Checking if tab', tabId, 'still exists');
          await chrome.tabs.get(tabId);

          debugLog('Re-attaching tab:', tabId);
          const { connection } = useExtensionStore.getState();
          if (!connection) return;
          const targetInfo = await connection.attachTab(tabId);
          useExtensionStore.setState((state) => {
            const newTabs = new Map(state.connectedTabs);
            newTabs.set(tabId, targetInfo.targetId);
            return { connectedTabs: newTabs };
          });
          debugLog('Successfully re-attached tab:', tabId);
        } catch (error: any) {
          debugLog('Failed to re-attach tab:', tabId, error.message);
          useExtensionStore.setState((state) => {
            const newTabs = new Map(state.connectedTabs);
            newTabs.delete(tabId);
            return { connectedTabs: newTabs };
          });
        }
      }

      const { connectedTabs: finalTabs } = useExtensionStore.getState();
      debugLog('=== Reconnection complete ===');
      debugLog('Successfully reconnected tabs:', finalTabs.size);

      if (finalTabs.size > 0) {
        useExtensionStore.setState({ connectionState: 'connected' });
        debugLog('Set connectionState to connected');
      } else {
        debugLog('No tabs successfully reconnected, staying in reconnecting state');
        useExtensionStore.setState({ connectionState: 'disconnected' });
      }
    } catch (error: any) {
      debugLog('=== Reconnection failed ===', error);

      const { connectedTabs: failedTabs } = useExtensionStore.getState();
      for (const tabId of failedTabs.keys()) {
        chrome.action.setBadgeText({ tabId, text: '!' });
        chrome.action.setBadgeBackgroundColor({ tabId, color: '#f44336' });
        chrome.action.setTitle({ tabId, title: 'Reconnection failed - Click to retry' });
      }

      useExtensionStore.setState({ connectedTabs: new Map(), connectionState: 'disconnected' });
    }
  }

async function onTabRemoved(tabId: number): Promise<void> {
  const { connectedTabs } = useExtensionStore.getState();
  debugLog('Tab removed event for tab:', tabId, 'is connected:', connectedTabs.has(tabId));
  if (!connectedTabs.has(tabId)) return;

  debugLog(`Connected tab ${tabId} was closed, disconnecting`);
  await disconnectTab(tabId);
}

async function onTabActivated(activeInfo: chrome.tabs.TabActiveInfo): Promise<void> {
  debugLog('Tab activated:', activeInfo.tabId);
  useExtensionStore.setState({ currentTabId: activeInfo.tabId });
}

async function onActionClicked(tab: chrome.tabs.Tab): Promise<void> {
  if (!tab.id) {
    debugLog('No tab ID available');
    return;
  }

  const { connectedTabs, connectionState, connection } = useExtensionStore.getState();

  if (connectionState === 'reconnecting') {
    debugLog('User clicked during reconnection, canceling reconnection and disconnecting all tabs');

    const tabsToDisconnect = Array.from(connectedTabs.keys());

    for (const tabId of tabsToDisconnect) {
      connection?.detachTab(tabId);
    }

    useExtensionStore.setState({ connectionState: 'disconnected', connectedTabs: new Map() });

    if (connection) {
      connection.close('User cancelled reconnection');
    }

    return;
  }

  if (connectedTabs.has(tab.id)) {
    await disconnectTab(tab.id);
  } else {
    await connectTab(tab.id);
  }
}

debugLog(`Using relay URL: ${RELAY_URL}`);
chrome.tabs.onRemoved.addListener(onTabRemoved);
chrome.tabs.onActivated.addListener(onTabActivated);
chrome.action.onClicked.addListener(onActionClicked);
