import { expect, test } from 'vitest'
import { formatHtmlForPrompt } from './htmlrewrite.js'

test('formatHtmlForPrompt', async () => {
  const res = await fetch('https://framer.com')
  const html = await res.text()
  const newHtml = await formatHtmlForPrompt(html)
  expect(newHtml).toMatchInlineSnapshot(
    `
    "<!doctype html>
    <html>
     <body>
      <div>
       <div>
        <div>
         <div>
          <nav data-framer-name="Desktop Nav">
           <div data-framer-name="Wrapper">
            <div data-framer-name="Logo + CTA">
             <div>
              <a data-framer-name="On" href="./">
               <div data-framer-name="Logo" role="img" aria-label="Framer Logo"></div>
              </a>
             </div>
             <div>
              <div>
               <div>
                <div data-framer-name="LoggedOut">
                 <div data-framer-name="Log in" name="Log in">
                  <div name="Log in" data-framer-name="Login">
                   <div data-framer-name="Start for free" name="Start for free">
                    <a name="Start for free" data-framer-name="Label" href="https://framer.com/r/login">
                     <div data-framer-name="Item">
                      <div>Log in</div>
                     </div>
                    </a>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Sign up" name="Sign up">
                  <div name="Sign up" data-framer-name="Signup">
                   <div data-framer-name="Start for free" name="Start for free">
                    <a name="Start for free" data-framer-name="Button" href="https://www.framer.com/r/signup/">
                     <div data-framer-name="Item">
                      <div>Sign up</div>
                     </div>
                    </a>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Links: Brand Jorn">
               <div data-framer-name="Link: Copy" name="Link: Copy">
                <a name="Link: Copy" data-framer-name="Large">
                 <div>
                  <div></div>
                 </div>
                 <div data-framer-name="Topbar Links Text Jorn">
                  <div>
                   <div>
                    <p>Copy</p>
                   </div>
                  </div>
                  <div>
                   <p>Logo as SVG</p>
                  </div>
                 </div>
                </a>
               </div>
               <div data-framer-name="Link: Brand" name="Link: Brand">
                <a name="Link: Brand" data-framer-name="Large" href="./brand">
                 <div>
                  <div></div>
                 </div>
                 <div data-framer-name="Topbar Links Text Jorn">
                  <div>
                   <div>
                    <p>Brand</p>
                   </div>
                  </div>
                  <div>
                   <p>Guidelines</p>
                  </div>
                 </div>
                </a>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Links">
             <div data-framer-name="Features" name="Features">
              <a name="Features" data-framer-name="Label">
               <div data-framer-name="Item">
                <div>Product</div>
               </div>
              </a>
             </div>
             <div data-framer-name="Teams" name="Teams">
              <a name="Teams" data-framer-name="Label">
               <div data-framer-name="Item">
                <div>Teams</div>
               </div>
              </a>
             </div>
             <div data-framer-name="Resources" name="Resources">
              <a name="Resources" data-framer-name="Label">
               <div data-framer-name="Item">
                <div>Resources</div>
               </div>
              </a>
             </div>
             <div data-framer-name="Community" name="Community">
              <a name="Community" data-framer-name="Label">
               <div data-framer-name="Item">
                <div>Community</div>
               </div>
              </a>
             </div>
             <div data-framer-name="Help" name="Help">
              <a name="Help" data-framer-name="Label">
               <div data-framer-name="Item">
                <div>Support</div>
               </div>
              </a>
             </div>
             <div data-framer-name="Enterprise" name="Enterprise">
              <a name="Enterprise" data-framer-name="Label" href="./enterprise/">
               <div data-framer-name="Item">
                <div>Enterprise</div>
               </div>
              </a>
             </div>
             <div data-framer-name="Pricing" name="Pricing">
              <a name="Pricing" data-framer-name="Label" href="./pricing">
               <div data-framer-name="Item">
                <div>Pricing</div>
               </div>
              </a>
             </div>
            </div>
           </div>
          </nav>
         </div>
         <div>
          <nav data-framer-name="Mobile Nav">
           <div data-framer-name="Wrapper">
            <div data-framer-name="Logo + CTA">
             <div>
              <a data-framer-name="On" href="./">
               <div data-framer-name="Logo" role="img" aria-label="Framer Logo"></div>
              </a>
             </div>
             <div data-framer-name="Mobile Menu" name="Mobile Menu">
              <div name="Mobile Menu" data-framer-name="Menu">
               <div data-framer-name="Bottom"></div>
               <div data-framer-name="Top"></div>
              </div>
             </div>
            </div>
           </div>
          </nav>
         </div>
         <div>
          <nav data-framer-name="Mobile Nav">
           <div data-framer-name="Wrapper">
            <div data-framer-name="Logo + CTA">
             <div>
              <a data-framer-name="On" href="./">
               <div data-framer-name="Logo" role="img" aria-label="Framer Logo"></div>
              </a>
             </div>
             <div data-framer-name="Mobile Menu" name="Mobile Menu">
              <div name="Mobile Menu" data-framer-name="Menu">
               <div data-framer-name="Bottom"></div>
               <div data-framer-name="Top"></div>
              </div>
             </div>
            </div>
           </div>
          </nav>
         </div>
        </div>
        <div data-framer-name="Developers Sidebar" name="Developers Sidebar">
         <nav name="Developers Sidebar" data-framer-name="Sidebar">
          <div>
           <div>
            <div data-framer-name="Developers">
             <div>
              <div>
               <button aria-label="Search Icon"></button>
              </div>
             </div>
             <div></div>
             <div>
              <p>Search...</p>
             </div>
            </div>
           </div>
           <div>
            <div data-framer-name="Fetch">
             <div>
              <p>Get Started</p>
             </div>
             <div>
              <div data-framer-name="Title">
               <p>
                <a href="./developers/">Overview</a>
               </p>
              </div>
              <div data-framer-name="Title">
               <p>
                <a href="./developers/comparison">Compare</a>
               </p>
              </div>
              <div data-framer-name="Title">
               <p>
                <a href="./developers/faq">FAQ</a>
               </p>
              </div>
             </div>
            </div>
            <div>
             <div data-framer-name="Closed">
              <div>
               <div>
                <p>
                 <a href="./">Plugins</a>
                </p>
               </div>
              </div>
              <div>
               <div>
                <div>
                 <div data-framer-name="Nav Item">
                  <div data-framer-name="Title">
                   <p>
                    <a href="./developers/plugins-introduction">Introduction</a>
                   </p>
                  </div>
                 </div>
                 <div data-framer-name="Nav Item">
                  <div data-framer-name="Title">
                   <p>
                    <a href="./developers/plugins-quick-start">Quick Start</a>
                   </p>
                  </div>
                 </div>
                 <div data-framer-name="Nav Item">
                  <div data-framer-name="Title">
                   <p>
                    <a href="./developers/publishing">Publishing</a>
                   </p>
                  </div>
                 </div>
                 <div data-framer-name="Nav Item">
                  <div data-framer-name="Title">
                   <p>
                    <a href="./developers/changelog">Changelog</a>
                   </p>
                  </div>
                 </div>
                 <div data-framer-name="Nav Item">
                  <div data-framer-name="Title">
                   <p>
                    <a href="./developers/reference">Reference</a>
                   </p>
                  </div>
                 </div>
                </div>
                <div>
                 <div>
                  <div>
                   <div>
                    <p>Guides</p>
                   </div>
                   <div>
                    <div data-framer-name="Closed">
                     <div>
                      <div aria-hidden="true"></div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Fetch">
             <div>
              <p>Fetch</p>
             </div>
             <div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/fetch-introduction">Introduction</a>
                </p>
               </div>
              </div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/fetch-examples">Examples</a>
                </p>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Components">
             <div>
              <p>Components</p>
             </div>
             <div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/components-introduction">Introduction</a>
                </p>
               </div>
              </div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/component-examples">Examples</a>
                </p>
               </div>
              </div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/component-sharing">Asset Sharing</a>
                </p>
               </div>
              </div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/auto-sizing">Auto-Sizing</a>
                </p>
               </div>
              </div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/property-controls">Property Controls</a>
                </p>
               </div>
              </div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/components-reference">Reference</a>
                </p>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Overrides">
             <div>
              <p>Overrides</p>
             </div>
             <div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/overrides-introduction">Introduction</a>
                </p>
               </div>
              </div>
              <div>
               <div data-framer-name="Title">
                <p>
                 <a href="./developers/overrides-examples">Examples</a>
                </p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </nav>
        </div>
        <div>
         <div data-framer-name="Developers Mobile Nav" name="Developers Mobile Nav">
          <div name="Developers Mobile Nav" data-framer-name="Phone">
           <div data-framer-name="Parent">
            <div data-framer-name="Backdrop"></div>
            <div data-framer-name="Inner">
             <div>
              <div data-framer-name="On">
               <div>
                <div>
                 <p>
                  <a href="./developers/">Developers</a>
                 </p>
                </div>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Dropdown">
               <div></div>
               <div>
                <div data-framer-name="Variant 1">
                 <div>
                  <div>
                   <button aria-label="Search Icon">
                    <img alt="icon entry point for Site Search">
                   </button>
                  </div>
                 </div>
                 <div data-framer-name="Search Input">
                  <div data-framer-name="Mag Glass" aria-hidden="true">
                   <div></div>
                  </div>
                  <div>
                   <h6>Search</h6>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div data-framer-name="Dropdown">
               <div></div>
              </div>
             </div>
            </div>
            <div data-framer-name="Sidebar Parent">
             <div>
              <nav data-framer-name="Mobile">
               <div>
                <div>
                 <div data-framer-name="Developers">
                  <div>
                   <div>
                    <button aria-label="Search Icon"></button>
                   </div>
                  </div>
                  <div></div>
                  <div>
                   <p>Search...</p>
                  </div>
                 </div>
                </div>
                <div>
                 <div data-framer-name="Fetch">
                  <div>
                   <p>Get Started</p>
                  </div>
                  <div>
                   <div data-framer-name="Title">
                    <p>
                     <a href="./developers/">Overview</a>
                    </p>
                   </div>
                   <div data-framer-name="Title">
                    <p>
                     <a href="./developers/comparison">Compare</a>
                    </p>
                   </div>
                   <div data-framer-name="Title">
                    <p>
                     <a href="./developers/faq">FAQ</a>
                    </p>
                   </div>
                  </div>
                 </div>
                 <div>
                  <div data-framer-name="Closed">
                   <div>
                    <div>
                     <p>
                      <a href="./">Plugins</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div>
                     <div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/plugins-introduction">Introduction</a>
                        </p>
                       </div>
                      </div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/plugins-quick-start">Quick Start</a>
                        </p>
                       </div>
                      </div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/publishing">Publishing</a>
                        </p>
                       </div>
                      </div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/changelog">Changelog</a>
                        </p>
                       </div>
                      </div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/reference">Reference</a>
                        </p>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>
                         <p>Guides</p>
                        </div>
                        <div>
                         <div data-framer-name="Closed">
                          <div>
                           <div aria-hidden="true"></div>
                          </div>
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Fetch">
                  <div>
                   <p>Fetch</p>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/fetch-introduction">Introduction</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/fetch-examples">Examples</a>
                     </p>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Components">
                  <div>
                   <p>Components</p>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/components-introduction">Introduction</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/component-examples">Examples</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/component-sharing">Asset Sharing</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/auto-sizing">Auto-Sizing</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/property-controls">Property Controls</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/components-reference">Reference</a>
                     </p>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Overrides">
                  <div>
                   <p>Overrides</p>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/overrides-introduction">Introduction</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/overrides-examples">Examples</a>
                     </p>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </nav>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div>
         <div data-framer-name="Developers Mobile Nav" name="Developers Mobile Nav">
          <div name="Developers Mobile Nav" data-framer-name="Phone">
           <div data-framer-name="Parent">
            <div data-framer-name="Backdrop"></div>
            <div data-framer-name="Inner">
             <div>
              <div data-framer-name="On">
               <div>
                <div>
                 <p>
                  <a href="./developers/">Developers</a>
                 </p>
                </div>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Dropdown">
               <div></div>
               <div>
                <div data-framer-name="Variant 1">
                 <div>
                  <div>
                   <button aria-label="Search Icon">
                    <img alt="icon entry point for Site Search">
                   </button>
                  </div>
                 </div>
                 <div data-framer-name="Search Input">
                  <div data-framer-name="Mag Glass" aria-hidden="true">
                   <div></div>
                  </div>
                  <div>
                   <h6>Search</h6>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div data-framer-name="Dropdown">
               <div></div>
              </div>
             </div>
            </div>
            <div data-framer-name="Sidebar Parent">
             <div>
              <nav data-framer-name="Mobile">
               <div>
                <div>
                 <div data-framer-name="Developers">
                  <div>
                   <div>
                    <button aria-label="Search Icon"></button>
                   </div>
                  </div>
                  <div></div>
                  <div>
                   <p>Search...</p>
                  </div>
                 </div>
                </div>
                <div>
                 <div data-framer-name="Fetch">
                  <div>
                   <p>Get Started</p>
                  </div>
                  <div>
                   <div data-framer-name="Title">
                    <p>
                     <a href="./developers/">Overview</a>
                    </p>
                   </div>
                   <div data-framer-name="Title">
                    <p>
                     <a href="./developers/comparison">Compare</a>
                    </p>
                   </div>
                   <div data-framer-name="Title">
                    <p>
                     <a href="./developers/faq">FAQ</a>
                    </p>
                   </div>
                  </div>
                 </div>
                 <div>
                  <div data-framer-name="Closed">
                   <div>
                    <div>
                     <p>
                      <a href="./">Plugins</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div>
                     <div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/plugins-introduction">Introduction</a>
                        </p>
                       </div>
                      </div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/plugins-quick-start">Quick Start</a>
                        </p>
                       </div>
                      </div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/publishing">Publishing</a>
                        </p>
                       </div>
                      </div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/changelog">Changelog</a>
                        </p>
                       </div>
                      </div>
                      <div data-framer-name="Nav Item">
                       <div data-framer-name="Title">
                        <p>
                         <a href="./developers/reference">Reference</a>
                        </p>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>
                         <p>Guides</p>
                        </div>
                        <div>
                         <div data-framer-name="Closed">
                          <div>
                           <div aria-hidden="true"></div>
                          </div>
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Fetch">
                  <div>
                   <p>Fetch</p>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/fetch-introduction">Introduction</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/fetch-examples">Examples</a>
                     </p>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Components">
                  <div>
                   <p>Components</p>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/components-introduction">Introduction</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/component-examples">Examples</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/component-sharing">Asset Sharing</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/auto-sizing">Auto-Sizing</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/property-controls">Property Controls</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/components-reference">Reference</a>
                     </p>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Overrides">
                  <div>
                   <p>Overrides</p>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/overrides-introduction">Introduction</a>
                     </p>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Title">
                     <p>
                      <a href="./developers/overrides-examples">Examples</a>
                     </p>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </nav>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div>
         <main data-framer-name="Main">
          <section data-framer-name="Hero">
           <header data-framer-name="Header">
            <div></div>
            <div>
             <div>
              <a data-framer-name="Banner" href="./awards/">
               <div data-framer-name="Cube">
                <div>
                 <video></video>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <p>2025 Framer Awards</p>
                </div>
                <div data-framer-name="CTA">
                 <div>
                  <p>Submissions now open</p>
                 </div>
                </div>
               </div>
              </a>
             </div>
            </div>
            <div>
             <div>
              <a data-framer-name="Banner" href="./awards/">
               <div data-framer-name="Cube">
                <div>
                 <video></video>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <p>2025 Framer Awards</p>
                </div>
                <div data-framer-name="CTA">
                 <div>
                  <p>Submissions now open</p>
                 </div>
                </div>
               </div>
              </a>
             </div>
            </div>
            <div data-framer-name="Text">
             <div>
              <h1>Build better sites, faster</h1>
             </div>
             <div>
              <div>
               <p>
                Framer is the site builder trusted by startups
                <br>
                to Fortune 500. Build fast and scale with an integrated CMS, SEO, Analytics, and more.
               </p>
              </div>
             </div>
             <div>
              <div>
               <p>Framer is the site builder trusted by startups to Fortune 500. Build fast and scale with an integrated CMS, SEO, Analytics, and more.</p>
              </div>
             </div>
            </div>
            <div data-framer-name="Buttons">
             <div>
              <div>
               <a data-framer-name="Regular" href="https://framer.com/r/signup">
                <div data-framer-name="Default">
                 <p>Start for free</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Phone" href="https://framer.com/r/signup">
                <div data-framer-name="Default">
                 <p>Start for free</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="./ai/">
                <div data-framer-name="Default">
                 <p>Start with AI</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Phone" href="./ai/">
                <div data-framer-name="Default">
                 <p>Start with AI</p>
                </div>
               </a>
              </div>
             </div>
            </div>
           </header>
           <div data-framer-name="Sites">
            <div>
             <div>
              <div>
               <div data-framer-name="Desktop">
                <div data-framer-name="Parallax">
                 <div data-framer-name="Scroll">
                  <div data-framer-name="Column">
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Column">
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Scroll">
                  <div data-framer-name="Phone">
                   <div>
                    <div data-framer-name="Phone Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Phone Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Phone Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Column">
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Scroll">
                  <div data-framer-name="Border">
                   <div data-framer-name="Column">
                    <div>
                     <div data-framer-name="Card">
                      <div data-framer-name="Visual">
                       <div>
                        <div data-framer-name="Pause">
                         <div>
                          <img alt="Website made in Framer">
                         </div>
                         <div>
                          <video></video>
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Card">
                      <div data-framer-name="Visual">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Website made in Framer">
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Card">
                      <div data-framer-name="Visual">
                       <div>
                        <div data-framer-name="Pause">
                         <div>
                          <img alt="Website made in Framer">
                         </div>
                         <div>
                          <video></video>
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Phone">
                  <div>
                   <div data-framer-name="Phone Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Phone Card">
                    <div data-framer-name="Visual">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Phone Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Phone Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Scroll">
                  <div data-framer-name="Column">
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Column">
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Scroll">
                  <div data-framer-name="Column">
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
              <div>
               <div data-framer-name="Tablet">
                <div data-framer-name="Parallax">
                 <div data-framer-name="Scroll">
                  <div data-framer-name="Phone">
                   <div>
                    <div data-framer-name="Phone Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Phone Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Phone Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Column">
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Scroll">
                  <div data-framer-name="Border">
                   <div data-framer-name="Column">
                    <div>
                     <div data-framer-name="Card">
                      <div data-framer-name="Visual">
                       <div>
                        <div data-framer-name="Pause">
                         <div>
                          <img alt="Website made in Framer">
                         </div>
                         <div>
                          <video></video>
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Card">
                      <div data-framer-name="Visual">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Website made in Framer">
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Card">
                      <div data-framer-name="Visual">
                       <div>
                        <div data-framer-name="Pause">
                         <div>
                          <img alt="Website made in Framer">
                         </div>
                         <div>
                          <video></video>
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Phone">
                  <div>
                   <div data-framer-name="Phone Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Phone Card">
                    <div data-framer-name="Visual">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Phone Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Phone Card">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Scroll">
                  <div data-framer-name="Column">
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div>
             <div>
              <div data-framer-name="Phone">
               <div data-framer-name="Parallax">
                <div data-framer-name="Scroll">
                 <div data-framer-name="Phone"></div>
                </div>
                <div data-framer-name="Column">
                 <div>
                  <div data-framer-name="Card">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Image">
                     <div>
                      <img alt="Website made in Framer">
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div>
                  <div data-framer-name="Card">
                   <div data-framer-name="Visual">
                    <div>
                     <div data-framer-name="Pause">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                      <div>
                       <video></video>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div>
                  <div data-framer-name="Card">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Image">
                     <div>
                      <img alt="Website made in Framer">
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
                <div data-framer-name="Scroll">
                 <div data-framer-name="Border">
                  <div data-framer-name="Column">
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div>
                       <div data-framer-name="Pause">
                        <div>
                         <img alt="Website made in Framer">
                        </div>
                        <div>
                         <video></video>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Website made in Framer">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Card">
                     <div data-framer-name="Visual">
                      <div>
                       <div data-framer-name="Pause">
                        <div>
                         <img alt="Website made in Framer">
                        </div>
                        <div>
                         <video></video>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
                <div data-framer-name="Phone">
                 <div>
                  <div data-framer-name="Phone Card">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Image">
                     <div>
                      <img alt="Website made in Framer">
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div>
                  <div data-framer-name="Phone Card">
                   <div data-framer-name="Visual">
                    <div>
                     <div data-framer-name="Pause">
                      <div>
                       <img alt="Website made in Framer">
                      </div>
                      <div>
                       <video></video>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div>
                  <div data-framer-name="Phone Card">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Image">
                     <div>
                      <img alt="Website made in Framer">
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div>
                  <div data-framer-name="Phone Card">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Image">
                     <div>
                      <img alt="Website made in Framer">
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
                <div data-framer-name="Scroll">
                 <div data-framer-name="Column"></div>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Companies">
             <div>
              <div>
               <div data-framer-name="Grid">
                <div>
                 <a data-framer-name="Small" href="./stories/">
                  <div>
                   <p>Meet our customers</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
                <div data-framer-name="Bird">
                 <div aria-hidden="true"></div>
                </div>
                <div>
                 <div aria-hidden="true"></div>
                </div>
                <div>
                 <div>
                  <div data-framer-name="elevenlabs" aria-hidden="true"></div>
                 </div>
                </div>
                <div>
                 <div aria-hidden="true"></div>
                </div>
                <div data-framer-name="Miro">
                 <div aria-hidden="true"></div>
                </div>
                <div>
                 <div aria-hidden="true"></div>
                </div>
                <div>
                 <div aria-hidden="true"></div>
                </div>
                <div>
                 <div aria-hidden="true"></div>
                </div>
               </div>
              </div>
             </div>
             <div>
              <div>
               <div data-framer-name="Ticker">
                <div>
                 <a data-framer-name="Small" href="./stories/">
                  <div>
                   <p>Meet our customers</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
                <div data-framer-name="Ticker">
                 <ul role="group">
                  <li aria-hidden="false" aria-posinset="1" aria-setsize="8">
                   <div data-framer-name="Bird">
                    <div aria-hidden="true"></div>
                   </div>
                  </li>
                  <li aria-hidden="false" aria-posinset="2" aria-setsize="8">
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                  </li>
                  <li aria-hidden="false" aria-posinset="3" aria-setsize="8">
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                  </li>
                  <li aria-hidden="false" aria-posinset="4" aria-setsize="8">
                   <div>
                    <div>
                     <div data-framer-name="elevenlabs" aria-hidden="true"></div>
                    </div>
                   </div>
                  </li>
                  <li aria-hidden="false" aria-posinset="5" aria-setsize="8">
                   <div data-framer-name="Miro">
                    <div aria-hidden="true"></div>
                   </div>
                  </li>
                  <li aria-hidden="false" aria-posinset="6" aria-setsize="8">
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                  </li>
                  <li aria-hidden="false" aria-posinset="7" aria-setsize="8">
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                  </li>
                  <li aria-hidden="false" aria-posinset="8" aria-setsize="8">
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                  </li>
                 </ul>
                </div>
               </div>
              </div>
             </div>
             <div data-framer-name="Fade"></div>
            </div>
           </div>
          </section>
          <div data-framer-name="ForcePaintComp (don't remove)" name="ForcePaintComp (don't remove)"></div>
          <section data-framer-name="Design Sidebar">
           <header data-framer-name="Header">
            <div>
             <h2>Create, collaborate, and go live</h2>
            </div>
           </header>
           <div data-framer-name="Desktop">
            <div>
             <div data-framer-name="AI">
              <div>
               <div data-framer-name="Open">
                <div data-framer-name="Text">
                 <div>
                  <h3>
                   <a href="./#feat-ai">AI</a>
                  </h3>
                 </div>
                 <div>
                  <p>Generate site layouts and advanced components in seconds with AI, so you can skip the blank canvas and start designing with confidence.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Default" href="./ai/">
                  <div>
                   <h3>Learn more</h3>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </div>
              <div>
               <div data-framer-name="Closed">
                <div data-framer-name="Text">
                 <div>
                  <h3>
                   <a href="./#feat-design">Design</a>
                  </h3>
                 </div>
                 <div>
                  <p>Craft responsive layouts and bring them to life with smooth effects, interactions, and animations. Build exactly what you imagine, visually.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Default" href="./design/">
                  <div>
                   <h3>Learn more</h3>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </div>
              <div>
               <div data-framer-name="Closed">
                <div data-framer-name="Text">
                 <div>
                  <h3>
                   <a href="./#feat-cms">CMS</a>
                  </h3>
                 </div>
                 <div>
                  <p>Manage and update your content effortlessly with a built-in CMS. Keep your site fresh without touching code.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Default" href="./scale/">
                  <div>
                   <h3>Learn more</h3>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </div>
              <div>
               <div data-framer-name="Closed">
                <div data-framer-name="Text">
                 <div>
                  <h3>
                   <a href="./#feat-collab">Collaborate</a>
                  </h3>
                 </div>
                 <div>
                  <p>Whether you’re collaborating on the canvas or editing copy directly on the page, updates are seamless and handoff-free.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Default" href="./collaborate/">
                  <div>
                   <h3>Learn more</h3>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Features">
             <div data-framer-name="AI">
              <div data-framer-name="Visual">
               <div data-framer-name="New UI">
                <div data-framer-name="Top Bar">
                 <div data-framer-name="Top Bar New">
                  <div>
                   <img alt="Framer UI">
                  </div>
                 </div>
                 <div data-framer-name="Avatars">
                  <div data-framer-name="Team">
                   <div>
                    <div data-framer-name="Avatar">
                     <div>
                      <div>
                       <img alt="A smiling person with short hair, wearing a dark shirt, against a backdrop of blue sky and clouds.">
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="Avatar">
                     <div>
                      <div data-framer-name="Variant 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div data-framer-name="Topbar Right Simple@2x">
                   <div>
                    <img alt="Framer UI">
                   </div>
                  </div>
                 </div>
                </div>
                <div data-framer-name="Content">
                 <div data-framer-name="Left">
                  <div data-framer-name="Layout Row">
                   <div data-framer-name="Graphic" aria-hidden="true"></div>
                   <div data-framer-name="Titile">
                    <p>Wireframer</p>
                   </div>
                   <div aria-hidden="true"></div>
                  </div>
                  <div>
                   <div data-framer-name="Prompt@2x">
                    <div>
                     <img alt="">
                    </div>
                   </div>
                  </div>
                  <div data-framer-name="Response">
                   <div data-framer-name="Framer@2x">
                    <div>
                     <img alt="UI">
                    </div>
                   </div>
                   <div>
                    <p>
                     <span>I</span>
                     <span>created</span>
                     <span>three</span>
                     <span>unique</span>
                     <span>landing</span>
                     <span>pages</span>
                     <span>in</span>
                     <span>dark</span>
                     <span>mode</span>
                     <span>for</span>
                     <span>your</span>
                     <span>modern</span>
                     <span>design</span>
                     <span>startup:</span>
                     <span>a</span>
                     <span>main</span>
                     <span>landing</span>
                     <span>page,</span>
                     <span>a</span>
                     <span>creative-focused</span>
                     <span>page,</span>
                     <span>and</span>
                     <span>a</span>
                     <span>studio</span>
                     <span>showcase</span>
                     <span>page.</span>
                    </p>
                   </div>
                  </div>
                  <div data-framer-name="Spacer"></div>
                  <div data-framer-name="Prompt@2x">
                   <div>
                    <img alt="">
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Canvas">
                  <div data-framer-name="Pages">
                   <div data-framer-name="Col">
                    <div>
                     <p>Landing Page 1</p>
                    </div>
                    <div data-framer-name="Image">
                     <div>
                      <img alt="Example of a page generated by Wireframer">
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Col">
                    <div data-framer-name="Text">
                     <div data-framer-name="Play Icon@2x">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                     <div>
                      <p>Landing Page 2</p>
                     </div>
                    </div>
                    <div data-framer-name="Image">
                     <div>
                      <img alt="Example of a page generated by Wireframer">
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Col">
                    <div>
                     <p>Landing Page 3</p>
                     <p>
                      <br>
                     </p>
                    </div>
                    <div data-framer-name="Image">
                     <div>
                      <img alt="Example of a page generated by Wireframer">
                     </div>
                    </div>
                   </div>
                  </div>
                  <div data-framer-name="Toolbar">
                   <div>
                    <div aria-hidden="true">
                     <div></div>
                    </div>
                   </div>
                   <div>
                    <div aria-hidden="true">
                     <div></div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Graphic" aria-hidden="true">
                     <div></div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Graphic" aria-hidden="true">
                     <div></div>
                    </div>
                   </div>
                   <div>
                    <div aria-hidden="true">
                     <div></div>
                    </div>
                   </div>
                   <div>
                    <div>
                     <p>100%</p>
                    </div>
                    <div data-framer-name="Graphic" aria-hidden="true">
                     <div></div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Right">
                  <div>
                   <img alt="">
                  </div>
                 </div>
                 <div data-framer-name="Fade"></div>
                </div>
               </div>
              </div>
             </div>
             <div data-framer-name="Design">
              <div data-framer-name="Visual">
               <div>
                <div data-framer-name="Start">
                 <div data-framer-name="New UI">
                  <div data-framer-name="Top Bar">
                   <div data-framer-name="Topbar New@2x">
                    <div>
                     <img alt="Framer UI">
                    </div>
                   </div>
                   <div data-framer-name="Avatars">
                    <div data-framer-name="Team">
                     <div>
                      <div data-framer-name="Avatar">
                       <div>
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="Avatar">
                       <div>
                        <div data-framer-name="Variant 1">
                         <div>
                          <img alt="">
                         </div>
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="Topbar Right Simple@2x">
                     <div>
                      <img alt="Framer UI">
                     </div>
                    </div>
                   </div>
                  </div>
                  <div data-framer-name="Content">
                   <div data-framer-name="Cursor">
                    <div data-framer-name="Pointer">
                     <div data-framer-name="Pointer" aria-hidden="true">
                      <div></div>
                     </div>
                    </div>
                    <div data-framer-name="Pill">
                     <div>
                      <p>Benjamin</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Cursor">
                    <div data-framer-name="Pointer">
                     <div data-framer-name="Pointer" aria-hidden="true">
                      <div></div>
                     </div>
                    </div>
                    <div data-framer-name="Pill">
                     <div>
                      <p>Paul</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Left">
                    <div data-framer-name="Left@2x">
                     <div>
                      <img alt="Framer UI">
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Canvas Design">
                    <div data-framer-name="Toolbar">
                     <div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <p>100%</p>
                      </div>
                      <div data-framer-name="Graphic" aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="Headers@2x">
                     <div>
                      <img alt="Framer canvas">
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Right">
                    <div data-framer-name="Right@2x">
                     <div>
                      <img alt="Framer UI">
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
             <div data-framer-name="CMS">
              <div data-framer-name="Visual">
               <div data-framer-name="UI">
                <div data-framer-name="Topbar">
                 <div data-framer-name="CMS Top Bar@2x">
                  <div>
                   <img alt="Framer UI">
                  </div>
                 </div>
                 <div data-framer-name="Topbar Right@2x">
                  <div>
                   <img alt="">
                  </div>
                 </div>
                </div>
                <div data-framer-name="Editor">
                 <div data-framer-name="CMS Sidebar">
                  <div data-framer-name="CMS Sidebar@2x">
                   <div>
                    <img alt="Framer UI">
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Center">
                  <div data-framer-name="CMS / Header">
                   <div>
                    <div>
                     <p>Title</p>
                    </div>
                    <div>
                     <p>Image</p>
                    </div>
                    <div>
                     <p>Date</p>
                    </div>
                    <div>
                     <p>Category</p>
                    </div>
                    <div>
                     <p>Slug</p>
                    </div>
                   </div>
                  </div>
                  <div data-framer-name="Search Row">
                   <div data-framer-name="Search Icon" aria-hidden="true"></div>
                   <div>
                    <p>Search 153 items…</p>
                   </div>
                  </div>
                  <div data-framer-name="Updates List">
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>Free Custom Domains</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Jan 8, 2026</p>
                     </div>
                     <div>
                      <p>Publishing</p>
                     </div>
                     <div>
                      <p>free-custom-domains</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>On-Page Editing 2.0</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Jan 8, 2026</p>
                     </div>
                     <div>
                      <p>CMS</p>
                     </div>
                     <div>
                      <p>on-page-editing-2.0</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>Plugins 3.9: Collections</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Dec 18, 2025</p>
                     </div>
                     <div>
                      <p>Plugins</p>
                     </div>
                     <div>
                      <p>plugins-3-9</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>Custom Code</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="Custom Code">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Dec 15, 2025</p>
                     </div>
                     <div>
                      <p>Publishing</p>
                     </div>
                     <div>
                      <p>custom-code</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>Flow Effect</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="Flow Effect">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Dec 11, 2025</p>
                     </div>
                     <div>
                      <p>Effects</p>
                     </div>
                     <div>
                      <p>flow-effect</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>Localized Page Paths</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Dec 11, 2025</p>
                     </div>
                     <div>
                      <p>Localization</p>
                     </div>
                     <div>
                      <p>localized-page-paths</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>December Update: Squircle</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="Squircle">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Dec 10, 2025</p>
                     </div>
                     <div>
                      <p>Design</p>
                     </div>
                     <div>
                      <p>december-update-2025</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>Masonry Grids</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="Masonry Grids">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Nov 27, 2025</p>
                     </div>
                     <div>
                      <p>Design</p>
                     </div>
                     <div>
                      <p>masonry</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>Font Drop 16</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="Font Drop 16">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Nov 21, 2025</p>
                     </div>
                     <div>
                      <p>Design</p>
                     </div>
                     <div>
                      <p>font-drop-16</p>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="CMS / Row">
                    <div>
                     <div>
                      <div data-framer-name="Graphic" aria-hidden="true"></div>
                      <div>
                       <p>Ticker Effect</p>
                      </div>
                     </div>
                     <div data-framer-name="Color">
                      <div>
                       <div>
                        <img alt="Ticker FX">
                       </div>
                      </div>
                     </div>
                     <div>
                      <p>Nov 13, 2025</p>
                     </div>
                     <div>
                      <p>AI</p>
                     </div>
                     <div>
                      <p>ticker-effect</p>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
                <div data-framer-name="Updates Sidebar">
                 <div data-framer-name="Overlay">
                  <div>
                   <div>
                    <div>
                     <img alt="Framer UI">
                    </div>
                   </div>
                   <div>
                    <div>
                     <div>
                      <p>Title</p>
                     </div>
                     <div>
                      <div>
                       <p>Free Custom Domains</p>
                      </div>
                      <div></div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <p>Image</p>
                     </div>
                     <div>
                      <div>
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div>
                       <p>free-custom-domains.jpg</p>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <p>Categories</p>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>
                         <p>Publishing</p>
                        </div>
                        <div aria-hidden="true"></div>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true">
                        <div></div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <p>Slug</p>
                     </div>
                     <div>
                      <div>
                       <p>free-custom-domains</p>
                      </div>
                      <div></div>
                     </div>
                     <div>
                      <div aria-hidden="true"></div>
                      <div>
                       <p>framer.com/updates/free-custom-domains</p>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <p>Content</p>
                     </div>
                     <div data-framer-name="CMS/Rich Text Toolbar">
                      <div data-framer-name="Style">
                       <div>
                        <span>
                         <span>
                          <span>Paragraph</span>
                          <br>
                         </span>
                        </span>
                       </div>
                       <div data-framer-name="Caret" aria-hidden="true"></div>
                      </div>
                      <div>
                       <div>
                        <div data-framer-name="Link" aria-hidden="true"></div>
                       </div>
                       <div>
                        <div data-framer-name="Blod" aria-hidden="true"></div>
                       </div>
                       <div>
                        <div data-framer-name="Italic" aria-hidden="true"></div>
                       </div>
                       <div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <div data-framer-name="graphic" aria-hidden="true"></div>
                       </div>
                       <div>
                        <div data-framer-name="graphic" aria-hidden="true"></div>
                       </div>
                       <div>
                        <div data-framer-name="graphic" aria-hidden="true"></div>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div data-framer-name="graphic" aria-hidden="true"></div>
                       </div>
                       <div>
                        <div data-framer-name="graphic" aria-hidden="true"></div>
                       </div>
                       <div>
                        <div data-framer-name="graphic" aria-hidden="true"></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <p>
                        Today, we’re shipping an update where we offer a free custom domain for the first year when you upgrade your site to a yearly plan. We’ve partnered with
                        <a href="https://www.hover.com/" target="_blank">Hover</a>
                        to provide a seamless flow where you can select a free or discounted domain that will be automatically connected to your Framer site after purchase. To make use of this offer, upgrade your site to a yearly plan, then head over to the Domains tab in your project settings and select the “Claim a free custom domain” option.
                       </p>
                       <ul>
                        <li>
                         <p>This offer can be redeemed once per subscription</p>
                        </li>
                        <li>
                         <p>This offer is available only for sites on a yearly plan</p>
                        </li>
                        <li>
                         <p>Your domain will automatically renew at the standard rate</p>
                        </li>
                        <li>
                         <p>Redeeming this offer forfeits the option to request a refund</p>
                        </li>
                        <li>
                         <p>This offer is not valid in combination with a 100% discount code</p>
                        </li>
                        <li>
                         <p>
                          Your domain and its subscription will be managed through
                          <a href="https://www.hover.com/" target="_blank">Hover</a>
                         </p>
                        </li>
                       </ul>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
             <div data-framer-name="Collaborate">
              <div data-framer-name="Visual">
               <div data-framer-name="UI">
                <div data-framer-name="Top Bar">
                 <div data-framer-name="Left">
                  <div data-framer-name="Traffic Lights">
                   <div></div>
                  </div>
                 </div>
                 <div data-framer-name="Search Bar">
                  <div>
                   <p>baseform.framer.website</p>
                  </div>
                 </div>
                 <div data-framer-name="Spacer"></div>
                </div>
                <div data-framer-name="Content">
                 <div data-framer-name="Top Bar">
                  <div>
                   <div>
                    <p>Baseform®</p>
                   </div>
                   <div>
                    <div>
                     <div></div>
                     <div></div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div>
                     <p>Art Direction</p>
                    </div>
                    <div>
                     <div>
                      <div></div>
                      <div></div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div>
                     <p>Visual Design</p>
                    </div>
                    <div>
                     <div>
                      <div></div>
                      <div></div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div>
                     <p>Work,</p>
                    </div>
                    <div>
                     <div>
                      <div></div>
                      <div></div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div>
                     <p>Archive,</p>
                    </div>
                    <div>
                     <div>
                      <div></div>
                      <div></div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div>
                     <p>Profile,</p>
                    </div>
                    <div>
                     <div>
                      <div></div>
                      <div></div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div>
                     <p>Journal</p>
                    </div>
                    <div>
                     <div>
                      <div></div>
                      <div></div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <p>Let's Talk</p>
                   </div>
                   <div>
                    <div>
                     <div></div>
                     <div></div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Body">
                  <div>
                   <div data-framer-name="Header">
                    <div>
                     <div data-framer-name="Pause">
                      <div>
                       <span>
                        <span>
                         <span></span>
                        </span>
                       </span>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <div></div>
                      <div></div>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Images">
                    <div>
                     <div>
                      <div>
                       <h3>Latest News</h3>
                      </div>
                      <div>
                       <div>
                        <div></div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <p>View All Posts</p>
                      </div>
                      <div>
                       <p>→</p>
                      </div>
                      <div>
                       <div>
                        <div></div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <div>
                       <img alt="Photo">
                      </div>
                      <div>
                       <div>
                        <div></div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <img alt="Photo">
                      </div>
                      <div>
                       <div>
                        <div></div>
                        <div></div>
                       </div>
                      </div>
                      <div></div>
                     </div>
                     <div>
                      <div>
                       <img alt="Photo">
                      </div>
                      <div>
                       <div>
                        <div></div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <img alt="Photo">
                      </div>
                      <div>
                       <div>
                        <div></div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div data-framer-name="Card">
                <div data-framer-name="Image">
                 <div>
                  <img alt="Framer UI">
                 </div>
                </div>
               </div>
              </div>
              <div data-framer-name="On Page Editing">
               <div data-framer-name="Text">
                <div data-framer-name="Text 1">
                 <div>
                  <p>Click to edit</p>
                 </div>
                 <div>
                  <p>·</p>
                 </div>
                 <div>
                  <p>Changes are auto-saved</p>
                 </div>
                </div>
                <div data-framer-name="Text 2">
                 <div>
                  <p>Site saved</p>
                 </div>
                 <div>
                  <p>·</p>
                 </div>
                 <div>
                  <p>Collaborators are notified. Changes will be visible once the project is published.</p>
                 </div>
                </div>
               </div>
               <div data-framer-name="Open in Framer">
                <div>
                 <div data-framer-name="Framer Logo" aria-hidden="true">
                  <div></div>
                 </div>
                </div>
                <div>
                 <p>Open in Framer</p>
                </div>
               </div>
               <div>
                <div data-framer-name="Finish Editing">
                 <div data-framer-name="Check" aria-hidden="true"></div>
                 <div>
                  <p>Finish Editing</p>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div data-framer-name="Phone">
            <div>
             <div>
              <article data-framer-name="AI">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>AI</h5>
                 </div>
                 <div>
                  <p>Generate page layouts and advanced components in seconds with AI, so you can skip the blank canvas and start designing with confidence.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./ai/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="AI">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>AI</h5>
                 </div>
                 <div>
                  <p>Generate page layouts and advanced components in seconds with AI, so you can skip the blank canvas and start designing with confidence.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./ai/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="AI">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>AI</h5>
                 </div>
                 <div>
                  <p>Generate page layouts and advanced components in seconds with AI, so you can skip the blank canvas and start designing with confidence.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./ai/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="Design">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>Design</h5>
                 </div>
                 <div>
                  <p>Craft responsive layouts and bring them to life with smooth effects, interactions, and animations. Build exactly what you imagine, visually.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./design/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="Design">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>Design</h5>
                 </div>
                 <div>
                  <p>Craft responsive layouts and bring them to life with smooth effects, interactions, and animations. Build exactly what you imagine, visually.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./design/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="Design">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>Design</h5>
                 </div>
                 <div>
                  <p>Craft responsive layouts and bring them to life with smooth effects, interactions, and animations. Build exactly what you imagine, visually.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./design/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="CMS">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>CMS</h5>
                 </div>
                 <div>
                  <p>Manage and update your content effortlessly with a built-in CMS. Keep your site fresh without touching code.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./scale/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="CMS">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>CMS</h5>
                 </div>
                 <div>
                  <p>Manage and update your content effortlessly with a built-in CMS. Keep your site fresh without touching code.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./scale/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="CMS">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>CMS</h5>
                 </div>
                 <div>
                  <p>Manage and update your content effortlessly with a built-in CMS. Keep your site fresh without touching code.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./scale/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="Collaborate">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>Collaborate</h5>
                 </div>
                 <div>
                  <p>Whether you’re collaborating on the canvas or editing copy directly on the page, updates are seamless and handoff-free.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./scale/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="Collaborate">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>Collaborate</h5>
                 </div>
                 <div>
                  <p>Whether you’re collaborating on the canvas or editing copy directly on the page, updates are seamless and handoff-free.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./scale/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
            <div>
             <div>
              <article data-framer-name="Collaborate">
               <div data-framer-name="Visual">
                <div data-framer-name="Image">
                 <div>
                  <img alt="">
                 </div>
                </div>
               </div>
               <div data-framer-name="Text">
                <div>
                 <div>
                  <h5>Collaborate</h5>
                 </div>
                 <div>
                  <p>Whether you’re collaborating on the canvas or editing copy directly on the page, updates are seamless and handoff-free.</p>
                 </div>
                </div>
                <div>
                 <a data-framer-name="Small" href="./scale/">
                  <div>
                   <p>Learn more</p>
                  </div>
                  <div>
                   <div></div>
                  </div>
                 </a>
                </div>
               </div>
              </article>
             </div>
            </div>
           </div>
          </section>
          <section data-framer-name="Scale">
           <header data-framer-name="Header">
            <div>
             <h2>Scale without switching tools</h2>
            </div>
           </header>
           <div data-framer-name="Features">
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>Analytics &amp; insights</h6>
                </div>
                <div>
                 <p>Track traffic, measure performance, and monitor conversions.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Default" href="./analytics">
                 <div>
                  <h3>Learn more</h3>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div data-framer-name="UI">
                 <div data-framer-name="Stats">
                  <div data-framer-name="Content">
                   <div>
                    <p>January 9, 2026</p>
                   </div>
                   <div></div>
                   <div>
                    <div></div>
                    <div>
                     <p>Pageviews</p>
                    </div>
                    <div>
                     <p>258,156</p>
                    </div>
                   </div>
                   <div>
                    <div></div>
                    <div>
                     <p>Visitors</p>
                    </div>
                    <div>
                     <p>85,458</p>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Modal">
                  <div data-framer-name="Card">
                   <div>
                    <div>
                     <div>
                      <p>Overview</p>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div>
                     <div>
                      <div data-framer-name="Pulse">
                       <div data-framer-name="Pulse"></div>
                       <div data-framer-name="Dot"></div>
                      </div>
                      <div data-framer-name="Device Title">
                       <p>Live Visitors</p>
                      </div>
                     </div>
                     <div>
                      <h6>400</h6>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Device Title">
                      <p>Unique Visitors</p>
                     </div>
                     <div>
                      <h6>1.7M</h6>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Device Title">
                      <p>Total Pageviews</p>
                     </div>
                     <div>
                      <h6>3.2M</h6>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <p>330k</p>
                   </div>
                   <div></div>
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                  </div>
                  <div></div>
                  <div>
                   <div data-framer-name="Card">
                    <div>
                     <div>
                      <div>
                       <p>Sources</p>
                      </div>
                      <div data-framer-name="Segment Control">
                       <div data-framer-name="Hide">
                        <p>Referrer</p>
                       </div>
                       <div data-framer-name="Dropdown Icon" aria-hidden="true">
                        <div></div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="Analytics Group 2">
                     <div data-framer-name="Percentage Click"></div>
                     <div>
                      <div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <div data-framer-name="Graphic" aria-hidden="true">
                         <div></div>
                        </div>
                       </div>
                       <div>
                        <p>google.com</p>
                       </div>
                       <div>
                        <p>436K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>chatgpt.com</p>
                       </div>
                       <div>
                        <p>189K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>linkedin.com</p>
                       </div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <p>96K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div data-framer-name="Youtube-svgrepo-com" aria-hidden="true"></div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>youtube.com</p>
                       </div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <p>82K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>bing.com</p>
                       </div>
                       <div>
                        <p>71K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                      <div>
                       <div data-framer-name="graphic" aria-hidden="true"></div>
                       <div>
                        <p>x.com</p>
                       </div>
                       <div>
                        <p>49K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Card">
                    <div>
                     <div>
                      <p>Pages</p>
                     </div>
                     <div data-framer-name="Segment Control">
                      <div data-framer-name="Hide">
                       <p>All</p>
                      </div>
                      <div data-framer-name="Dropdown Icon" aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="pages-group">
                     <div data-framer-name="Page">
                      <div data-framer-name="icon-layer-home" aria-hidden="true"></div>
                      <div>
                       <p>Home</p>
                      </div>
                      <div>
                       <p>1.8M</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/pricing</p>
                      </div>
                      <div data-framer-name="bar"></div>
                      <div>
                       <p>156K</p>
                      </div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/gallery</p>
                      </div>
                      <div>
                       <p>91K</p>
                      </div>
                      <div data-framer-name="bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/updates</p>
                      </div>
                      <div>
                       <p>44K</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/features/design</p>
                      </div>
                      <div>
                       <p>39K</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="Bar"></div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/features/cms</p>
                      </div>
                      <div>
                       <p>27K</p>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div></div>
                 </div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="">
                </div>
               </div>
              </div>
              <div data-framer-name="Fade"></div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>Analytics &amp; insights</h6>
                </div>
                <div>
                 <p>Track traffic, measure performance, and monitor conversions.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Small" href="./analytics">
                 <div>
                  <p>Learn more</p>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div data-framer-name="UI">
                 <div data-framer-name="Stats">
                  <div data-framer-name="Content">
                   <div>
                    <p>January 9, 2026</p>
                   </div>
                   <div></div>
                   <div>
                    <div></div>
                    <div>
                     <p>Pageviews</p>
                    </div>
                    <div>
                     <p>258,156</p>
                    </div>
                   </div>
                   <div>
                    <div></div>
                    <div>
                     <p>Visitors</p>
                    </div>
                    <div>
                     <p>85,458</p>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Modal">
                  <div data-framer-name="Card">
                   <div>
                    <div>
                     <div>
                      <p>Overview</p>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div>
                     <div>
                      <div data-framer-name="Pulse">
                       <div data-framer-name="Pulse"></div>
                       <div data-framer-name="Dot"></div>
                      </div>
                      <div data-framer-name="Device Title">
                       <p>Live Visitors</p>
                      </div>
                     </div>
                     <div>
                      <h6>400</h6>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Device Title">
                      <p>Unique Visitors</p>
                     </div>
                     <div>
                      <h6>1.7M</h6>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Device Title">
                      <p>Total Pageviews</p>
                     </div>
                     <div>
                      <h6>3.2M</h6>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <p>330k</p>
                   </div>
                   <div></div>
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                  </div>
                  <div></div>
                  <div>
                   <div data-framer-name="Card">
                    <div>
                     <div>
                      <div>
                       <p>Sources</p>
                      </div>
                      <div data-framer-name="Segment Control">
                       <div data-framer-name="Hide">
                        <p>Referrer</p>
                       </div>
                       <div data-framer-name="Dropdown Icon" aria-hidden="true">
                        <div></div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="Analytics Group 2">
                     <div data-framer-name="Percentage Click"></div>
                     <div>
                      <div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <div data-framer-name="Graphic" aria-hidden="true">
                         <div></div>
                        </div>
                       </div>
                       <div>
                        <p>google.com</p>
                       </div>
                       <div>
                        <p>436K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>chatgpt.com</p>
                       </div>
                       <div>
                        <p>189K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>linkedin.com</p>
                       </div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <p>96K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div data-framer-name="Youtube-svgrepo-com" aria-hidden="true"></div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>youtube.com</p>
                       </div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <p>82K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>bing.com</p>
                       </div>
                       <div>
                        <p>71K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                      <div>
                       <div data-framer-name="graphic" aria-hidden="true"></div>
                       <div>
                        <p>x.com</p>
                       </div>
                       <div>
                        <p>49K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Card">
                    <div>
                     <div>
                      <p>Pages</p>
                     </div>
                     <div data-framer-name="Segment Control">
                      <div data-framer-name="Hide">
                       <p>All</p>
                      </div>
                      <div data-framer-name="Dropdown Icon" aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="pages-group">
                     <div data-framer-name="Page">
                      <div data-framer-name="icon-layer-home" aria-hidden="true"></div>
                      <div>
                       <p>Home</p>
                      </div>
                      <div>
                       <p>1.8M</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/pricing</p>
                      </div>
                      <div data-framer-name="bar"></div>
                      <div>
                       <p>156K</p>
                      </div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/gallery</p>
                      </div>
                      <div>
                       <p>91K</p>
                      </div>
                      <div data-framer-name="bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/updates</p>
                      </div>
                      <div>
                       <p>44K</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/features/design</p>
                      </div>
                      <div>
                       <p>39K</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="Bar"></div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/features/cms</p>
                      </div>
                      <div>
                       <p>27K</p>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div></div>
                 </div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="">
                </div>
               </div>
              </div>
              <div data-framer-name="Fade"></div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>Analytics &amp; insights</h6>
                </div>
                <div>
                 <p>Track traffic, measure performance, and monitor conversions.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Default" href="./analytics">
                 <div>
                  <h3>Learn more</h3>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div data-framer-name="UI">
                 <div data-framer-name="Stats">
                  <div data-framer-name="Content">
                   <div>
                    <p>January 9, 2026</p>
                   </div>
                   <div></div>
                   <div>
                    <div></div>
                    <div>
                     <p>Pageviews</p>
                    </div>
                    <div>
                     <p>258,156</p>
                    </div>
                   </div>
                   <div>
                    <div></div>
                    <div>
                     <p>Visitors</p>
                    </div>
                    <div>
                     <p>85,458</p>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div data-framer-name="Modal">
                  <div data-framer-name="Card">
                   <div>
                    <div>
                     <div>
                      <p>Overview</p>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div>
                     <div>
                      <div data-framer-name="Pulse">
                       <div data-framer-name="Pulse"></div>
                       <div data-framer-name="Dot"></div>
                      </div>
                      <div data-framer-name="Device Title">
                       <p>Live Visitors</p>
                      </div>
                     </div>
                     <div>
                      <h6>400</h6>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Device Title">
                      <p>Unique Visitors</p>
                     </div>
                     <div>
                      <h6>1.7M</h6>
                     </div>
                    </div>
                    <div>
                     <div data-framer-name="Device Title">
                      <p>Total Pageviews</p>
                     </div>
                     <div>
                      <h6>3.2M</h6>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <p>330k</p>
                   </div>
                   <div></div>
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                   <div>
                    <div aria-hidden="true"></div>
                   </div>
                  </div>
                  <div></div>
                  <div>
                   <div data-framer-name="Card">
                    <div>
                     <div>
                      <div>
                       <p>Sources</p>
                      </div>
                      <div data-framer-name="Segment Control">
                       <div data-framer-name="Hide">
                        <p>Referrer</p>
                       </div>
                       <div data-framer-name="Dropdown Icon" aria-hidden="true">
                        <div></div>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="Analytics Group 2">
                     <div data-framer-name="Percentage Click"></div>
                     <div>
                      <div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <div data-framer-name="Graphic" aria-hidden="true">
                         <div></div>
                        </div>
                       </div>
                       <div>
                        <p>google.com</p>
                       </div>
                       <div>
                        <p>436K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>chatgpt.com</p>
                       </div>
                       <div>
                        <p>189K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>linkedin.com</p>
                       </div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <p>96K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div data-framer-name="Youtube-svgrepo-com" aria-hidden="true"></div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>youtube.com</p>
                       </div>
                       <div data-framer-name="bar"></div>
                       <div>
                        <p>82K</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div aria-hidden="true"></div>
                       </div>
                       <div>
                        <p>bing.com</p>
                       </div>
                       <div>
                        <p>71K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                      <div>
                       <div data-framer-name="graphic" aria-hidden="true"></div>
                       <div>
                        <p>x.com</p>
                       </div>
                       <div>
                        <p>49K</p>
                       </div>
                       <div data-framer-name="bar"></div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div data-framer-name="Card">
                    <div>
                     <div>
                      <p>Pages</p>
                     </div>
                     <div data-framer-name="Segment Control">
                      <div data-framer-name="Hide">
                       <p>All</p>
                      </div>
                      <div data-framer-name="Dropdown Icon" aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                    </div>
                    <div data-framer-name="pages-group">
                     <div data-framer-name="Page">
                      <div data-framer-name="icon-layer-home" aria-hidden="true"></div>
                      <div>
                       <p>Home</p>
                      </div>
                      <div>
                       <p>1.8M</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/pricing</p>
                      </div>
                      <div data-framer-name="bar"></div>
                      <div>
                       <p>156K</p>
                      </div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/gallery</p>
                      </div>
                      <div>
                       <p>91K</p>
                      </div>
                      <div data-framer-name="bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/updates</p>
                      </div>
                      <div>
                       <p>44K</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/features/design</p>
                      </div>
                      <div>
                       <p>39K</p>
                      </div>
                      <div data-framer-name="Bar"></div>
                     </div>
                     <div>
                      <div data-framer-name="Bar"></div>
                      <div data-framer-name="graphic" aria-hidden="true"></div>
                      <div>
                       <p>/features/cms</p>
                      </div>
                      <div>
                       <p>27K</p>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  <div></div>
                 </div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="Framer UI">
                </div>
               </div>
              </div>
              <div data-framer-name="Fade"></div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>A/B Testing &amp; optimization</h6>
                </div>
                <div>
                 <p>A/B testing, funnels, and built-in growth insights.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Default" href="./analytics">
                 <div>
                  <h3>Learn more</h3>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div>
                 <div>
                  <div data-framer-name="Topbar">
                   <div data-framer-name="Topbar New@2x">
                    <div>
                     <img alt="">
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div>
                     <div>
                      <div>
                       <div>
                        <p>Pages</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <p>Layers</p>
                       </div>
                      </div>
                      <div></div>
                      <div>
                       <div>
                        <p>Assets</p>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <div>
                       <p>Design</p>
                      </div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <p>Pages</p>
                      </div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div aria-hidden="true"></div>
                      </div>
                      <div aria-hidden="true"></div>
                      <div>
                       <p>Home</p>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>
                         <p>A</p>
                        </div>
                       </div>
                       <div>
                        <p>Control</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div>
                         <p>B</p>
                        </div>
                       </div>
                       <div>
                        <p>Version B</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div>
                         <p>C</p>
                        </div>
                       </div>
                       <div>
                        <p>Version C</p>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/pricing</p>
                       </div>
                       <div>
                        <div>
                         <div>
                          <p>A</p>
                         </div>
                        </div>
                        <div>
                         <div>
                          <p>B</p>
                         </div>
                        </div>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/features</p>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/blog</p>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/about</p>
                       </div>
                       <div></div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/404</p>
                       </div>
                       <div></div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Desktop">
                     <div data-framer-name="Bar">
                      <div data-framer-name="Play Button">
                       <div data-framer-name="Play Icon" aria-hidden="true">
                        <div></div>
                       </div>
                      </div>
                      <div>
                       <div data-framer-name="iPhone 12">
                        <p>Desktop</p>
                       </div>
                       <div data-framer-name="iPhone 12">
                        <p>·</p>
                       </div>
                       <div data-framer-name="iPhone 12">
                        <p>1200</p>
                       </div>
                      </div>
                      <div></div>
                     </div>
                     <div>
                      <div data-framer-name="Page">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer website">
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div></div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="">
                </div>
               </div>
              </div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>A/B Testing &amp; optimization</h6>
                </div>
                <div>
                 <p>A/B testing, funnels, and built-in growth insights.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Small" href="./analytics">
                 <div>
                  <p>Learn more</p>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div>
                 <div>
                  <div data-framer-name="Topbar">
                   <div data-framer-name="Topbar New@2x">
                    <div>
                     <img alt="">
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div>
                     <div>
                      <div>
                       <div>
                        <p>Pages</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <p>Layers</p>
                       </div>
                      </div>
                      <div></div>
                      <div>
                       <div>
                        <p>Assets</p>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <div>
                       <p>Design</p>
                      </div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <p>Pages</p>
                      </div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div aria-hidden="true"></div>
                      </div>
                      <div aria-hidden="true"></div>
                      <div>
                       <p>Home</p>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>
                         <p>A</p>
                        </div>
                       </div>
                       <div>
                        <p>Control</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div>
                         <p>B</p>
                        </div>
                       </div>
                       <div>
                        <p>Version B</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div>
                         <p>C</p>
                        </div>
                       </div>
                       <div>
                        <p>Version C</p>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/pricing</p>
                       </div>
                       <div>
                        <div>
                         <div>
                          <p>A</p>
                         </div>
                        </div>
                        <div>
                         <div>
                          <p>B</p>
                         </div>
                        </div>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/features</p>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/blog</p>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/about</p>
                       </div>
                       <div></div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/404</p>
                       </div>
                       <div></div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Desktop">
                     <div data-framer-name="Bar">
                      <div data-framer-name="Play Button">
                       <div data-framer-name="Play Icon" aria-hidden="true">
                        <div></div>
                       </div>
                      </div>
                      <div>
                       <div data-framer-name="iPhone 12">
                        <p>Desktop</p>
                       </div>
                       <div data-framer-name="iPhone 12">
                        <p>·</p>
                       </div>
                       <div data-framer-name="iPhone 12">
                        <p>1200</p>
                       </div>
                      </div>
                      <div></div>
                     </div>
                     <div>
                      <div data-framer-name="Page">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer website">
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div></div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="">
                </div>
               </div>
              </div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>A/B Testing &amp; optimization</h6>
                </div>
                <div>
                 <p>A/B testing, funnels, and built-in growth insights.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Default" href="./analytics">
                 <div>
                  <h3>Learn more</h3>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div>
                 <div>
                  <div data-framer-name="Topbar">
                   <div data-framer-name="Topbar New@2x">
                    <div>
                     <img alt="">
                    </div>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div>
                     <div>
                      <div>
                       <div>
                        <p>Pages</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <p>Layers</p>
                       </div>
                      </div>
                      <div></div>
                      <div>
                       <div>
                        <p>Assets</p>
                       </div>
                      </div>
                     </div>
                    </div>
                    <div>
                     <div>
                      <div>
                       <p>Design</p>
                      </div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <p>Pages</p>
                      </div>
                      <div aria-hidden="true">
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div aria-hidden="true"></div>
                      </div>
                      <div aria-hidden="true"></div>
                      <div>
                       <p>Home</p>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>
                         <p>A</p>
                        </div>
                       </div>
                       <div>
                        <p>Control</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div>
                         <p>B</p>
                        </div>
                       </div>
                       <div>
                        <p>Version B</p>
                       </div>
                      </div>
                      <div>
                       <div>
                        <div>
                         <p>C</p>
                        </div>
                       </div>
                       <div>
                        <p>Version C</p>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/pricing</p>
                       </div>
                       <div>
                        <div>
                         <div>
                          <p>A</p>
                         </div>
                        </div>
                        <div>
                         <div>
                          <p>B</p>
                         </div>
                        </div>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/features</p>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/blog</p>
                       </div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/about</p>
                       </div>
                       <div></div>
                      </div>
                      <div>
                       <div aria-hidden="true"></div>
                       <div aria-hidden="true"></div>
                       <div>
                        <p>/404</p>
                       </div>
                       <div></div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <div data-framer-name="Desktop">
                     <div data-framer-name="Bar">
                      <div data-framer-name="Play Button">
                       <div data-framer-name="Play Icon" aria-hidden="true">
                        <div></div>
                       </div>
                      </div>
                      <div>
                       <div data-framer-name="iPhone 12">
                        <p>Desktop</p>
                       </div>
                       <div data-framer-name="iPhone 12">
                        <p>·</p>
                       </div>
                       <div data-framer-name="iPhone 12">
                        <p>1200</p>
                       </div>
                      </div>
                      <div></div>
                     </div>
                     <div>
                      <div data-framer-name="Page">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer website">
                        </div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div></div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="Framer UI">
                </div>
               </div>
              </div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>SEO &amp; performance</h6>
                </div>
                <div>
                 <p>Optimize every page with built-in SEO settings, metadata, and blazing-fast hosting.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Default" href="./scale/">
                 <div>
                  <h3>Learn more</h3>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div></div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div data-framer-name="Publish">
                 <div>
                  <div data-framer-name="logo_google_svgrepo_com" aria-hidden="true">
                   <div></div>
                  </div>
                  <div>
                   <p>Google Lighthouse</p>
                  </div>
                 </div>
                 <div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>SEO</p>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>Performance</p>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>Accessibility</p>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="">
                </div>
               </div>
              </div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>SEO &amp; performance</h6>
                </div>
                <div>
                 <p>Optimize every page with built-in SEO settings, metadata, and blazing-fast hosting.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Small" href="./scale/">
                 <div>
                  <p>Learn more</p>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div></div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div data-framer-name="Publish">
                 <div>
                  <div data-framer-name="logo_google_svgrepo_com" aria-hidden="true">
                   <div></div>
                  </div>
                  <div>
                   <p>Google Lighthouse</p>
                  </div>
                 </div>
                 <div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>SEO</p>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>Performance</p>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>Accessibility</p>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="">
                </div>
               </div>
              </div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
            <div>
             <div data-framer-name="Card">
              <div>
               <img alt="3D render">
              </div>
              <div data-framer-name="Header">
               <div data-framer-name="Text">
                <div>
                 <h6>SEO &amp; performance</h6>
                </div>
                <div>
                 <p>Optimize every page with built-in SEO settings, metadata, and blazing-fast hosting.</p>
                </div>
               </div>
               <div>
                <a data-framer-name="Default" href="./scale/">
                 <div>
                  <h3>Learn more</h3>
                 </div>
                 <div>
                  <div></div>
                 </div>
                </a>
               </div>
              </div>
              <div></div>
              <div data-framer-name="Visual">
               <div data-framer-name="Desktop">
                <div data-framer-name="Publish">
                 <div>
                  <div data-framer-name="logo_google_svgrepo_com" aria-hidden="true">
                   <div></div>
                  </div>
                  <div>
                   <p>Google Lighthouse</p>
                  </div>
                 </div>
                 <div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>SEO</p>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>Performance</p>
                   </div>
                  </div>
                  <div>
                   <div>
                    <div data-framer-name="Default">
                     <div data-framer-name="Progress Glow">
                      <div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div></div>
                      </div>
                     </div>
                     <div>
                      <div>
                       <div>
                        <div>0</div>
                       </div>
                      </div>
                     </div>
                    </div>
                   </div>
                   <div>
                    <p>Accessibility</p>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div data-framer-name="Phone">
                <div>
                 <img alt="Lighthouse score">
                </div>
               </div>
              </div>
              <div data-framer-name="Border"></div>
             </div>
            </div>
           </div>
          </section>
          <div data-framer-name="Stories">
           <header data-framer-name="Header">
            <div>
             <h2>Powering ambitious teams worldwide</h2>
            </div>
           </header>
           <div aria-label="Customer Stories" data-framer-name="Sites">
            <div data-framer-name="Slideshow Desktop" name="Slideshow Desktop">
             <section>
              <div>
               <ul>
                <li aria-hidden="false">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Perplexity website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Visual Electric website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Biograph website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Cradle website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Miro website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Perplexity website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Visual Electric website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Biograph website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Cradle website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Miro website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Perplexity website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Visual Electric website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Biograph website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Cradle website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Miro website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Perplexity website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Visual Electric website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Biograph website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Cradle website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Desktop" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Miro website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
               </ul>
              </div>
              <fieldset aria-label="Slideshow pagination controls">
               <div>
                <button type="button" aria-label="Previous">
                 <img alt="Back Arrow">
                </button>
                <button type="button" aria-label="Next">
                 <img alt="Next Arrow">
                </button>
               </div>
               <div>
                <button aria-label="Scroll to page 1" type="button">
                 <div>Perplexity</div>
                </button>
                <button aria-label="Scroll to page 2" type="button">
                 <div>Visual Electric</div>
                </button>
                <button aria-label="Scroll to page 3" type="button">
                 <div>Biograph</div>
                </button>
                <button aria-label="Scroll to page 4" type="button">
                 <div>Cradle</div>
                </button>
                <button aria-label="Scroll to page 5" type="button">
                 <div>Miro</div>
                </button>
               </div>
              </fieldset>
             </section>
            </div>
            <div data-framer-name="Slideshow Tablet" name="Slideshow Tablet">
             <section>
              <div>
               <ul>
                <li aria-hidden="false">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Perplexity website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Visual Electric website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Biograph website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Cradle website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Miro website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Perplexity website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Visual Electric website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Biograph website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Cradle website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Miro website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Perplexity website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Visual Electric website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Biograph website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Cradle website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Miro website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Perplexity website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Visual Electric website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Biograph website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Cradle website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Tablet" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                    <div data-framer-name="Right">
                     <div>
                      <div data-framer-name="Pause">
                       <div>
                        <img alt="Miro website">
                       </div>
                       <div>
                        <video></video>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Image">
                      <div>
                       <img alt="Background">
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
               </ul>
              </div>
              <fieldset aria-label="Slideshow pagination controls">
               <div>
                <button type="button" aria-label="Previous">
                 <img alt="Back Arrow">
                </button>
                <button type="button" aria-label="Next">
                 <img alt="Next Arrow">
                </button>
               </div>
               <div>
                <button aria-label="Scroll to page 1" type="button">
                 <div>Perplexity</div>
                </button>
                <button aria-label="Scroll to page 2" type="button">
                 <div>Visual Electric</div>
                </button>
                <button aria-label="Scroll to page 3" type="button">
                 <div>Biograph</div>
                </button>
                <button aria-label="Scroll to page 4" type="button">
                 <div>Cradle</div>
                </button>
                <button aria-label="Scroll to page 5" type="button">
                 <div>Miro</div>
                </button>
               </div>
              </fieldset>
             </section>
            </div>
            <div data-framer-name="Slideshow Phone" name="Slideshow Phone">
             <section>
              <div>
               <ul>
                <li aria-hidden="false">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Phone" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Phone" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Phone" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Phone" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Phone" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Phone" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Phone" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Phone" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Phone" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Phone" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Phone" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Phone" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Phone" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Phone" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Phone" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Perplexity">
                  <div>
                   <a data-framer-name="Phone" href="./stories/perplexity/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Perplexity logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gives us everything we need to move fast. We don’t wait on dev. We don’t compromise on design.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Henry Modisett</p>
                        </div>
                        <div>
                         <p>Head of Design at Perplexity</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Visual Electric">
                  <div>
                   <a data-framer-name="Phone" href="./stories/visual-electric/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Launching on Framer was seamless. Live in no time, no friction.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Colin Dunn</p>
                        </div>
                        <div>
                         <p>Co-Founder at Visual Electric</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Biograph">
                  <div>
                   <a data-framer-name="Phone" href="./stories/biograph/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Biograph logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer gave us full creative freedom. No code limits, no handoffs. We shipped an immersive brand site in days.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Adam Jiwa</p>
                        </div>
                        <div>
                         <p>Partnerships at Metalab</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Cradle">
                  <div>
                   <a data-framer-name="Phone" href="./stories/cradle/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Cradle logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“With Framer, our designers can ship updates daily. No dev handoff. No staging hassle.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Jelle Prins</p>
                        </div>
                        <div>
                         <p>Co-Founder at Cradle</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Miro">
                  <div>
                   <a data-framer-name="Phone" href="./stories/miro/">
                    <div data-framer-name="Left">
                     <div data-framer-name="Top">
                      <div data-framer-name="Logo">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Miro logo">
                        </div>
                       </div>
                      </div>
                      <div data-framer-name="CTA 2025">
                       <div>
                        <p>Read more</p>
                       </div>
                       <div>
                        <div></div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Pad Quote">
                      <div data-framer-name="Quote">
                       <p>“Framer allowed us to ship high-performing, beautifully designed pages at record speed, all while keeping design control in-house.”</p>
                      </div>
                     </div>
                     <div data-framer-name="Bottom">
                      <div data-framer-name="User">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Avatar">
                        </div>
                       </div>
                       <div data-framer-name="Name">
                        <div>
                         <p>Radoslav Bali</p>
                        </div>
                        <div>
                         <p>Design Lead at Miro</p>
                        </div>
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="BG Gradient"></div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
               </ul>
              </div>
              <fieldset aria-label="Slideshow pagination controls">
               <div>
                <button type="button" aria-label="Previous">
                 <img alt="Back Arrow">
                </button>
                <button type="button" aria-label="Next">
                 <img alt="Next Arrow">
                </button>
               </div>
               <div>
                <button aria-label="Scroll to page 1" type="button">
                 <div></div>
                </button>
                <button aria-label="Scroll to page 2" type="button">
                 <div></div>
                </button>
                <button aria-label="Scroll to page 3" type="button">
                 <div></div>
                </button>
                <button aria-label="Scroll to page 4" type="button">
                 <div></div>
                </button>
                <button aria-label="Scroll to page 5" type="button">
                 <div></div>
                </button>
               </div>
              </fieldset>
             </section>
            </div>
           </div>
          </div>
          <section data-framer-name="Experts">
           <header data-framer-name="Header">
            <div>
             <h2>Get pro help from handpicked experts</h2>
            </div>
            <div data-framer-name="Buttons">
             <div>
              <div>
               <a data-framer-name="Regular" href="./match/">
                <div data-framer-name="Default">
                 <p>Get matched</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Phone" href="./match/">
                <div data-framer-name="Default">
                 <p>Get matched</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="./match/">
                <div data-framer-name="Default">
                 <p>Get matched</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="https://www.framer.com/experts/">
                <div data-framer-name="Default">
                 <p>Find an Expert</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Phone" href="https://www.framer.com/experts/">
                <div data-framer-name="Default">
                 <p>Find an Expert</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="https://www.framer.com/experts/">
                <div data-framer-name="Default">
                 <p>Find an Expert</p>
                </div>
               </a>
              </div>
             </div>
            </div>
           </header>
           <div data-framer-name="Visual">
            <div data-framer-name="Desktop Slideshow" name="Desktop Slideshow">
             <section>
              <div>
               <ul>
                <li aria-hidden="false">
                 <div data-framer-name="Experts Desktop 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Trueform</p>
                      </div>
                      <div>
                       <p>Switzerland</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Alex Aperios</p>
                      </div>
                      <div>
                       <p>United Kingdom</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Analogue Agency</p>
                      </div>
                      <div>
                       <p>Netherlands</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Fabian Albert</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Experts Desktop 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Allsite Studio</p>
                      </div>
                      <div>
                       <p>Germany</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Aerolab</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Adriano Reis</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Deserve Studio</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Desktop 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Trueform</p>
                      </div>
                      <div>
                       <p>Switzerland</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Alex Aperios</p>
                      </div>
                      <div>
                       <p>United Kingdom</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Analogue Agency</p>
                      </div>
                      <div>
                       <p>Netherlands</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Fabian Albert</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Desktop 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Allsite Studio</p>
                      </div>
                      <div>
                       <p>Germany</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Aerolab</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Adriano Reis</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Deserve Studio</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Desktop 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Trueform</p>
                      </div>
                      <div>
                       <p>Switzerland</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Alex Aperios</p>
                      </div>
                      <div>
                       <p>United Kingdom</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Analogue Agency</p>
                      </div>
                      <div>
                       <p>Netherlands</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Fabian Albert</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Desktop 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Allsite Studio</p>
                      </div>
                      <div>
                       <p>Germany</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Aerolab</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Adriano Reis</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Deserve Studio</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Desktop 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Trueform</p>
                      </div>
                      <div>
                       <p>Switzerland</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Alex Aperios</p>
                      </div>
                      <div>
                       <p>United Kingdom</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Analogue Agency</p>
                      </div>
                      <div>
                       <p>Netherlands</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Fabian Albert</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Desktop 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Allsite Studio</p>
                      </div>
                      <div>
                       <p>Germany</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Aerolab</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Adriano Reis</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Deserve Studio</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
               </ul>
              </div>
              <fieldset aria-label="Slideshow pagination controls">
               <div>
                <button type="button" aria-label="Previous">
                 <img alt="Back Arrow">
                </button>
                <button type="button" aria-label="Next">
                 <img alt="Next Arrow">
                </button>
               </div>
               <div>
                <button aria-label="Scroll to page 1" type="button">
                 <div></div>
                </button>
                <button aria-label="Scroll to page 2" type="button">
                 <div></div>
                </button>
               </div>
              </fieldset>
             </section>
            </div>
            <div data-framer-name="Tablet Slideshow" name="Tablet Slideshow">
             <section>
              <div>
               <ul>
                <li aria-hidden="false">
                 <div data-framer-name="Experts Tablet 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Trueform</p>
                      </div>
                      <div>
                       <p>Switzerland</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Alex Aperios</p>
                      </div>
                      <div>
                       <p>United Kingdom</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Analogue Agency</p>
                      </div>
                      <div>
                       <p>Netherlands</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Fabian Albert</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Experts Tablet 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Allsite Studio</p>
                      </div>
                      <div>
                       <p>Germany</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Aerolab</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Adriano Reis</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Deserve Studio</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Tablet 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Trueform</p>
                      </div>
                      <div>
                       <p>Switzerland</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Alex Aperios</p>
                      </div>
                      <div>
                       <p>United Kingdom</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Analogue Agency</p>
                      </div>
                      <div>
                       <p>Netherlands</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Fabian Albert</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Tablet 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Allsite Studio</p>
                      </div>
                      <div>
                       <p>Germany</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Aerolab</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Adriano Reis</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Deserve Studio</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Tablet 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Trueform</p>
                      </div>
                      <div>
                       <p>Switzerland</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Alex Aperios</p>
                      </div>
                      <div>
                       <p>United Kingdom</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Analogue Agency</p>
                      </div>
                      <div>
                       <p>Netherlands</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Fabian Albert</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Tablet 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Allsite Studio</p>
                      </div>
                      <div>
                       <p>Germany</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Aerolab</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Adriano Reis</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Deserve Studio</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Tablet 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Trueform</p>
                      </div>
                      <div>
                       <p>Switzerland</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Alex Aperios</p>
                      </div>
                      <div>
                       <p>United Kingdom</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Analogue Agency</p>
                      </div>
                      <div>
                       <p>Netherlands</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Fabian Albert</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Tablet 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Allsite Studio</p>
                      </div>
                      <div>
                       <p>Germany</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Aerolab</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Adriano Reis</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="User">
                     <div data-framer-name="Avatar">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Avatar">
                       </div>
                      </div>
                     </div>
                     <div data-framer-name="Name">
                      <div>
                       <p>Deserve Studio</p>
                      </div>
                      <div>
                       <p>United States</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
               </ul>
              </div>
              <fieldset aria-label="Slideshow pagination controls">
               <div>
                <button type="button" aria-label="Previous">
                 <img alt="Back Arrow">
                </button>
                <button type="button" aria-label="Next">
                 <img alt="Next Arrow">
                </button>
               </div>
               <div>
                <button aria-label="Scroll to page 1" type="button">
                 <div></div>
                </button>
                <button aria-label="Scroll to page 2" type="button">
                 <div></div>
                </button>
               </div>
              </fieldset>
             </section>
            </div>
            <div data-framer-name="Phone Slideshow" name="Phone Slideshow">
             <section>
              <div>
               <ul>
                <li aria-hidden="false">
                 <div data-framer-name="Experts Phone 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="false">
                 <div data-framer-name="Experts Phone 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Phone 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Phone 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Phone 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Phone 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Phone 1">
                  <div data-framer-name="Trueform" name="Trueform">
                   <a name="Trueform" data-framer-name="Expert" href="https://www.framer.com/@trueform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Alex Aperios" name="Alex Aperios">
                   <a name="Alex Aperios" data-framer-name="Expert" href="https://www.framer.com/@alex-aperios/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Analogue Agency" name="Analogue Agency">
                   <a name="Analogue Agency" data-framer-name="Expert" href="https://www.framer.com/@analogueagency/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Fabian Albert" name="Fabian Albert">
                   <a name="Fabian Albert" data-framer-name="Expert" href="https://www.framer.com/@fabian-albert/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
                <li aria-hidden="true">
                 <div data-framer-name="Experts Phone 2">
                  <div data-framer-name="Allsite Studio" name="Allsite Studio">
                   <a name="Allsite Studio" data-framer-name="Expert" href="https://www.framer.com/@ben-libor/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Aerolab" name="Aerolab">
                   <a name="Aerolab" data-framer-name="Expert" href="https://www.framer.com/@aerolab/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Adriano Reis" name="Adriano Reis">
                   <a name="Adriano Reis" data-framer-name="Expert" href="https://www.framer.com/@adrianoreis/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Deserve Studio" name="Deserve Studio">
                   <a name="Deserve Studio" data-framer-name="Expert" href="https://www.framer.com/@deservestudio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image 1">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                      <div data-framer-name="Image 2">
                       <div>
                        <img alt="">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div>
                       <p>View Expert</p>
                      </div>
                     </button>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
               </ul>
              </div>
              <fieldset aria-label="Slideshow pagination controls">
               <div>
                <button type="button" aria-label="Previous">
                 <img alt="Back Arrow">
                </button>
                <button type="button" aria-label="Next">
                 <img alt="Next Arrow">
                </button>
               </div>
               <div>
                <button aria-label="Scroll to page 1" type="button">
                 <div></div>
                </button>
                <button aria-label="Scroll to page 2" type="button">
                 <div></div>
                </button>
               </div>
              </fieldset>
             </section>
            </div>
           </div>
          </section>
          <section data-framer-name="Community">
           <header data-framer-name="Header">
            <div>
             <h2>Launch faster with community resources</h2>
            </div>
            <div data-framer-name="Buttons">
             <div>
              <div>
               <a data-framer-name="Regular" href="https://www.framer.com/marketplace/templates/">
                <div data-framer-name="Default">
                 <p>Templates</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Phone" href="https://www.framer.com/marketplace/templates/">
                <div data-framer-name="Default">
                 <p>Templates</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="https://www.framer.com/marketplace/templates/">
                <div data-framer-name="Default">
                 <p>Templates</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="https://www.framer.com/marketplace/plugins/">
                <div data-framer-name="Default">
                 <p>Plugins</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Phone" href="https://www.framer.com/marketplace/plugins/">
                <div data-framer-name="Default">
                 <p>Plugins</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="https://www.framer.com/marketplace/plugins/">
                <div data-framer-name="Default">
                 <p>Plugins</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="https://www.framer.com/marketplace/components/">
                <div data-framer-name="Default">
                 <p>Components</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Phone" href="https://www.framer.com/marketplace/components/">
                <div data-framer-name="Default">
                 <p>Components</p>
                </div>
               </a>
              </div>
             </div>
             <div>
              <div>
               <a data-framer-name="Regular" href="https://www.framer.com/marketplace/components/">
                <div data-framer-name="Default">
                 <p>Components</p>
                </div>
               </a>
              </div>
             </div>
            </div>
           </header>
           <div data-framer-name="Visual">
            <div data-framer-name="Desktop">
             <div data-framer-name="Market Desktop 1">
              <ul role="group">
               <li aria-hidden="false" aria-posinset="1" aria-setsize="1">
                <div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/components/image-slider/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div>
                      <video></video>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Component</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Image Slider</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Component</p>
                     </div>
                     <div>
                      <p>Before and after images</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/milo/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Template</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Milo</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Template</p>
                     </div>
                     <div>
                      <p>Furniture shop website</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/notion/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Plugin</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Notion</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Plugin</p>
                     </div>
                     <div>
                      <p>Sync with Notion</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/components/hover-image-zoom/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div>
                      <video></video>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Component</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Hover Zoom</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Component</p>
                     </div>
                     <div>
                      <p>Zoom and pan on hover</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/archer/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Template</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Archer</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Template</p>
                     </div>
                     <div>
                      <p>Creative portfolio</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/workshop/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Plugin</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Workshop</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Plugin</p>
                     </div>
                     <div>
                      <p>Turn ideas into components</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                </div>
               </li>
              </ul>
             </div>
             <div data-framer-name="Market Desktop 2">
              <ul role="group">
               <li aria-hidden="false" aria-posinset="1" aria-setsize="1">
                <div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/components/digital-rotary-radio/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div>
                      <video></video>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Component</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Digital Rotary Radio</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Component</p>
                     </div>
                     <div>
                      <p>Fully functional radio</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/apex-films/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Template</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Apex Films</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Template</p>
                     </div>
                     <div>
                      <p>Multimedia portfolio</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/components/flipcard-component/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div>
                      <video></video>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Component</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Flip Card</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Component</p>
                     </div>
                     <div>
                      <p>Drag to flip cards</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/components/animated-gradient/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div>
                      <video></video>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Component</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Animated Gradients</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Component</p>
                     </div>
                     <div>
                      <p>Image reveal effect</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/json-sync/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Plugin</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>JSON Sync</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Plugin</p>
                     </div>
                     <div>
                      <p>Import &amp; export CMS with JSON</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                 <div>
                  <a data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/baseform/">
                   <div data-framer-name="Visual">
                    <div data-framer-name="Wrapper">
                     <div data-framer-name="Image">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                     <div data-framer-name="Hover">
                      <div>
                       <img alt="Framer marketplace item">
                      </div>
                     </div>
                    </div>
                    <button data-framer-name="Button 2025">
                     <div data-framer-name="Default">
                      <p>View Template</p>
                     </div>
                    </button>
                   </div>
                   <div data-framer-name="Text">
                    <div>
                     <p>Baseform</p>
                    </div>
                    <div data-framer-name="Bottom">
                     <div>
                      <p>Template</p>
                     </div>
                     <div>
                      <p>Modern design portfolio</p>
                     </div>
                    </div>
                   </div>
                  </a>
                 </div>
                </div>
               </li>
              </ul>
             </div>
            </div>
            <div data-framer-name="Phone">
             <div data-framer-name="Market Phone 1">
              <ul role="group">
               <div>
                <li aria-hidden="false" aria-posinset="1" aria-setsize="1">
                 <div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/image-slider/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Image Slider</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Before and after images</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/image-slider/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Image Slider</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Before and after images</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/milo/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Template</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Milo</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Template</p>
                       </div>
                       <div>
                        <p>Furniture shop website</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/milo/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Template</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Milo</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Template</p>
                       </div>
                       <div>
                        <p>Furniture shop website</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/notion/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Plugin</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Notion</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Plugin</p>
                       </div>
                       <div>
                        <p>Sync with Notion</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/notion/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Plugin</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Notion</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Plugin</p>
                       </div>
                       <div>
                        <p>Sync with Notion</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/hover-image-zoom/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Hover Zoom</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Zoom and pan on hover</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/hover-image-zoom/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Hover Zoom</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Zoom and pan on hover</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/archer/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Template</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Archer</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Template</p>
                       </div>
                       <div>
                        <p>Creative portfolio</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/archer/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Template</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Archer</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Template</p>
                       </div>
                       <div>
                        <p>Creative portfolio</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/workshop/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Plugin</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Workshop</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Plugin</p>
                       </div>
                       <div>
                        <p>Turn ideas into components</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/workshop/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Plugin</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Workshop</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Plugin</p>
                       </div>
                       <div>
                        <p>Turn ideas into components</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/digital-rotary-radio/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Digital Rotary Radio</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Fully functional radio</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/digital-rotary-radio/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Digital Rotary Radio</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Fully functional radio</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                 </div>
                </li>
               </div>
               <div>
                <li aria-hidden="false" aria-posinset="1" aria-setsize="1">
                 <div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/image-slider/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div>
                       <video></video>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Component</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Image Slider</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Component</p>
                      </div>
                      <div>
                       <p>Before and after images</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/milo/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Template</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Milo</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Template</p>
                      </div>
                      <div>
                       <p>Furniture shop website</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/notion/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Plugin</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Notion</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Plugin</p>
                      </div>
                      <div>
                       <p>Sync with Notion</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/hover-image-zoom/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div>
                       <video></video>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Component</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Hover Zoom</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Component</p>
                      </div>
                      <div>
                       <p>Zoom and pan on hover</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/archer/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Template</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Archer</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Template</p>
                      </div>
                      <div>
                       <p>Creative portfolio</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/workshop/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Plugin</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Workshop</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Plugin</p>
                      </div>
                      <div>
                       <p>Turn ideas into components</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/digital-rotary-radio/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div>
                       <video></video>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Component</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Digital Rotary Radio</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Component</p>
                      </div>
                      <div>
                       <p>Fully functional radio</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
               </div>
              </ul>
             </div>
             <div data-framer-name="Market Phone 2">
              <ul role="group">
               <div>
                <li aria-hidden="false" aria-posinset="1" aria-setsize="1">
                 <div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/apex-films/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Template</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Apex Films</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Template</p>
                       </div>
                       <div>
                        <p>Multimedia portfolio</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/apex-films/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Template</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Apex Films</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Template</p>
                       </div>
                       <div>
                        <p>Multimedia portfolio</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/flipcard-component/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Flip Card</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Drag to flip cards</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/flipcard-component/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Flip Card</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Drag to flip cards</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/animated-gradient/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Animated Gradients</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Image reveal effect</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/animated-gradient/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Animated Gradients</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Image reveal effect</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/json-sync/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Plugin</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>JSON Sync</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Plugin</p>
                       </div>
                       <div>
                        <p>Import &amp; export CMS with JSON</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/json-sync/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Plugin</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>JSON Sync</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Plugin</p>
                       </div>
                       <div>
                        <p>Import &amp; export CMS with JSON</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/baseform/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Template</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Baseform</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Template</p>
                       </div>
                       <div>
                        <p>Modern design portfolio</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/baseform/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Template</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Baseform</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Template</p>
                       </div>
                       <div>
                        <p>Modern design portfolio</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/asset-manager/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Plugin</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Asset Manager</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Plugin</p>
                       </div>
                       <div>
                        <p>Manage your site's assets</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/asset-manager/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div data-framer-name="Image">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Plugin</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Asset Manager</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Plugin</p>
                       </div>
                       <div>
                        <p>Manage your site's assets</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/videoplayer/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Video Player</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Beautiful video player</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                  <div>
                   <div data-framer-name="Milo" name="Milo">
                    <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/videoplayer/">
                     <div data-framer-name="Visual">
                      <div data-framer-name="Wrapper">
                       <div>
                        <video></video>
                       </div>
                       <div data-framer-name="Hover">
                        <div>
                         <img alt="Framer marketplace item">
                        </div>
                       </div>
                      </div>
                      <button data-framer-name="Button 2025">
                       <div data-framer-name="Default">
                        <p>View Component</p>
                       </div>
                      </button>
                     </div>
                     <div data-framer-name="Text">
                      <div>
                       <p>Video Player</p>
                      </div>
                      <div data-framer-name="Bottom">
                       <div>
                        <p>Component</p>
                       </div>
                       <div>
                        <p>Beautiful video player</p>
                       </div>
                      </div>
                     </div>
                    </a>
                   </div>
                  </div>
                 </div>
                </li>
               </div>
               <div>
                <li aria-hidden="false" aria-posinset="1" aria-setsize="1">
                 <div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/apex-films/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Template</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Apex Films</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Template</p>
                      </div>
                      <div>
                       <p>Multimedia portfolio</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/flipcard-component/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div>
                       <video></video>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Component</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Flip Card</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Component</p>
                      </div>
                      <div>
                       <p>Drag to flip cards</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/animated-gradient/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div>
                       <video></video>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Component</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Animated Gradients</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Component</p>
                      </div>
                      <div>
                       <p>Image reveal effect</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/json-sync/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Plugin</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>JSON Sync</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Plugin</p>
                      </div>
                      <div>
                       <p>Import &amp; export CMS with JSON</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/templates/baseform/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Template</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Baseform</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Template</p>
                      </div>
                      <div>
                       <p>Modern design portfolio</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/plugins/asset-manager/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div data-framer-name="Image">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Plugin</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Asset Manager</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Plugin</p>
                      </div>
                      <div>
                       <p>Manage your site's assets</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                  <div data-framer-name="Milo" name="Milo">
                   <a name="Milo" data-framer-name="Pause" href="https://www.framer.com/marketplace/components/videoplayer/">
                    <div data-framer-name="Visual">
                     <div data-framer-name="Wrapper">
                      <div>
                       <video></video>
                      </div>
                      <div data-framer-name="Hover">
                       <div>
                        <img alt="Framer marketplace item">
                       </div>
                      </div>
                     </div>
                     <button data-framer-name="Button 2025">
                      <div data-framer-name="Default">
                       <p>View Component</p>
                      </div>
                     </button>
                    </div>
                    <div data-framer-name="Text">
                     <div>
                      <p>Video Player</p>
                     </div>
                     <div data-framer-name="Bottom">
                      <div>
                       <p>Component</p>
                      </div>
                      <div>
                       <p>Beautiful video player</p>
                      </div>
                     </div>
                    </div>
                   </a>
                  </div>
                 </div>
                </li>
               </div>
              </ul>
             </div>
            </div>
           </div>
          </section>
         </main>
        </div>
        <div></div>
        <div></div>
        <div data-framer-name="New Pivot">
         <header data-framer-name="Header">
          <div data-framer-name="Text">
           <div>
            <h5>Design bold. Launch fast.</h5>
           </div>
           <div>
            <p></p>
           </div>
          </div>
          <div data-framer-name="Buttons">
           <div>
            <a data-framer-name="Regular" href="https://framer.com/r/signup">
             <div data-framer-name="Default">
              <p>Start for free</p>
             </div>
            </a>
           </div>
           <div>
            <a data-framer-name="Regular" href="./wireframer/">
             <div data-framer-name="Default">
              <p>Start with AI</p>
             </div>
            </a>
           </div>
          </div>
         </header>
         <div data-framer-name="Visual">
          <div>
           <div>
            <div data-framer-name="Pause">
             <div>
              <video></video>
             </div>
            </div>
           </div>
          </div>
          <div>
           <div>
            <div data-framer-name="Pause">
             <div>
              <video></video>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div>
         <div>
          <footer data-framer-name="Desktop">
           <div>
            <div data-framer-name="Logo">
             <div>
              <div>
               <a data-framer-name="On" href="./">
                <div data-framer-name="Logo" role="img" aria-label="Framer Logo"></div>
               </a>
              </div>
              <div>
               <a aria-label="Twitter / X" data-framer-name="X" href="https://x.com/framer" target="_blank">
                <div></div>
               </a>
               <a aria-label="Threads" data-framer-name="Threads" href="https://www.threads.com/@framer" target="_blank">
                <div></div>
               </a>
               <a aria-label="TikTok" data-framer-name="TikTok" href="https://www.tiktok.com/@framer" target="_blank">
                <div></div>
               </a>
               <a aria-label="Instagram" data-framer-name="Instagram" href="https://www.instagram.com/framer/" target="_blank">
                <div></div>
               </a>
               <a aria-label="LinkedIn" data-framer-name="LinkedIn" href="https://www.linkedin.com/company/framer/" target="_blank">
                <div></div>
               </a>
               <a aria-label="YouTube" data-framer-name="YouTube" href="https://www.youtube.com/@Framer" target="_blank">
                <div></div>
               </a>
              </div>
              <div>
               <div data-framer-name="Variant 1">
                <div>
                 <a data-framer-name="Loading" href="https://www.framerstatus.com/" target="_blank">
                  <div>
                   <div></div>
                   <div></div>
                  </div>
                  <div>
                   <div data-framer-name="Item">
                    <div>Loading status</div>
                   </div>
                  </div>
                  <div data-framer-name="Item">
                   <div>loading</div>
                  </div>
                 </a>
                </div>
               </div>
              </div>
              <div></div>
              <div>
               <div>
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
                <div>
                 <div aria-hidden="true"></div>
                 <div data-framer-name="Layer Title">
                  <p>CCPA</p>
                 </div>
                </div>
                <div aria-hidden="true"></div>
               </div>
               <div>
                <div data-framer-name="Variant 1">
                 <div>
                  <p>© Framer B.V.</p>
                 </div>
                 <div>
                  <p>2026</p>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Lists">
             <div>
              <div data-framer-name="Product">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Product</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./ai/">
                 <div data-framer-name="Item">
                  <div>AI</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./design/">
                 <div data-framer-name="Item">
                  <div>Design</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./publish/">
                 <div data-framer-name="Item">
                  <div>Publish</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./cms/">
                 <div data-framer-name="Item">
                  <div>CMS</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./scale/">
                 <div data-framer-name="Item">
                  <div>Scale</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./seo/">
                 <div data-framer-name="Item">
                  <div>SEO</div>
                 </div>
                 <div>
                  <div data-framer-name="Label">
                   <div>
                    <p>New</p>
                   </div>
                  </div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./collaborate/">
                 <div data-framer-name="Item">
                  <div>Collaborate</div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Business</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./pricing">
                 <div data-framer-name="Item">
                  <div>Pricing</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./switch/">
                 <div data-framer-name="Item">
                  <div>Switch</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./startups/">
                 <div data-framer-name="Item">
                  <div>Startups</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./agencies/">
                 <div data-framer-name="Item">
                  <div>Agencies</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./enterprise/">
                 <div data-framer-name="Item">
                  <div>Enterprise</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Compare">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Compare</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-figma">
                 <div data-framer-name="Item">
                  <div>Figma</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-webflow">
                 <div data-framer-name="Item">
                  <div>Webflow</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-wordpress">
                 <div data-framer-name="Item">
                  <div>Wordpress</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-squarespace">
                 <div data-framer-name="Item">
                  <div>Squarespace</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-unbounce">
                 <div data-framer-name="Item">
                  <div>Unbounce</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-wix">
                 <div data-framer-name="Item">
                  <div>Wix</div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Solutions">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Solutions</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/figma-to-html/">
                 <div data-framer-name="Item">
                  <div>Figma to HTML</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/website-builder/">
                 <div data-framer-name="Item">
                  <div>Website builder</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/portfolio-website/">
                 <div data-framer-name="Item">
                  <div>Portfolio maker</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/landing-pages/">
                 <div data-framer-name="Item">
                  <div>Landing pages</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/ui-ux-design/">
                 <div data-framer-name="Item">
                  <div>UI/UX design</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/no-code-website-builder/">
                 <div data-framer-name="Item">
                  <div>No-code</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Resources">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Resources</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/templates/">
                 <div data-framer-name="Item">
                  <div>Templates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/components/">
                 <div data-framer-name="Item">
                  <div>Components</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/plugins/">
                 <div data-framer-name="Item">
                  <div>Plugins</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/vectors/">
                 <div data-framer-name="Item">
                  <div>Vectors</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/">
                 <div data-framer-name="Item">
                  <div>Marketplace</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./downloads/">
                 <div data-framer-name="Item">
                  <div>Downloads</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./developers/">
                 <div data-framer-name="Item">
                  <div>Developers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./wallpapers/">
                 <div data-framer-name="Item">
                  <div>Wallpapers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./newsletter">
                 <div data-framer-name="Item">
                  <div>Newsletter</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./updates">
                 <div data-framer-name="Item">
                  <div>Updates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./help/">
                 <div data-framer-name="Item">
                  <div>Support</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./contact/">
                 <div data-framer-name="Item">
                  <div>Contact</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./brand">
                 <div data-framer-name="Item">
                  <div>Brand</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./blog/">
                 <div data-framer-name="Item">
                  <div>Blog</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Company</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./meetups/">
                 <div data-framer-name="Item">
                  <div>Meetups</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./careers/">
                 <div data-framer-name="Item">
                  <div>Careers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./legal/security/">
                 <div data-framer-name="Item">
                  <div>Security</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="mailto:abuse@framer.com">
                 <div data-framer-name="Item">
                  <div>Abuse</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./brand">
                 <div data-framer-name="Item">
                  <div>Media</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./legal/terms-of-service/">
                 <div data-framer-name="Item">
                  <div>Legal</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./store">
                 <div data-framer-name="Item">
                  <div>Store</div>
                 </div>
                 <div>
                  <div data-framer-name="Label">
                   <div>
                    <p>New</p>
                   </div>
                  </div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Programs</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./creators">
                 <div data-framer-name="Item">
                  <div>Affiliates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./expert/apply/">
                 <div data-framer-name="Item">
                  <div>Experts</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./creators">
                 <div data-framer-name="Item">
                  <div>Creators</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./education/students/">
                 <div data-framer-name="Item">
                  <div>Students</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./education/ambassadors/">
                 <div data-framer-name="Item">
                  <div>Ambassadors</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div data-framer-name="COOKIE BANNER — DO NOT REMOVE" name="COOKIE BANNER — DO NOT REMOVE"></div>
          </footer>
         </div>
         <div>
          <footer data-framer-name="Tablet">
           <div>
            <div data-framer-name="Logo">
             <div>
              <div>
               <a data-framer-name="On" href="./">
                <div data-framer-name="Logo" role="img" aria-label="Framer Logo"></div>
               </a>
              </div>
              <div>
               <a aria-label="Twitter / X" data-framer-name="X" href="https://x.com/framer" target="_blank">
                <div></div>
               </a>
               <a aria-label="Threads" data-framer-name="Threads" href="https://www.threads.com/@framer" target="_blank">
                <div></div>
               </a>
               <a aria-label="TikTok" data-framer-name="TikTok" href="https://www.tiktok.com/@framer" target="_blank">
                <div></div>
               </a>
               <a aria-label="Instagram" data-framer-name="Instagram" href="https://www.instagram.com/framer/" target="_blank">
                <div></div>
               </a>
               <a aria-label="LinkedIn" data-framer-name="LinkedIn" href="https://www.linkedin.com/company/framer/" target="_blank">
                <div></div>
               </a>
               <a aria-label="YouTube" data-framer-name="YouTube" href="https://www.youtube.com/@Framer" target="_blank">
                <div></div>
               </a>
              </div>
              <div>
               <div data-framer-name="Variant 1">
                <div>
                 <a data-framer-name="Loading" href="https://www.framerstatus.com/" target="_blank">
                  <div>
                   <div></div>
                   <div></div>
                  </div>
                  <div>
                   <div data-framer-name="Item">
                    <div>Loading status</div>
                   </div>
                  </div>
                  <div data-framer-name="Item">
                   <div>loading</div>
                  </div>
                 </a>
                </div>
               </div>
              </div>
              <div></div>
              <div>
               <div>
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
                <div>
                 <div aria-hidden="true"></div>
                 <div data-framer-name="Layer Title">
                  <p>CCPA</p>
                 </div>
                </div>
                <div aria-hidden="true"></div>
               </div>
               <div>
                <div data-framer-name="Variant 1">
                 <div>
                  <p>© Framer B.V.</p>
                 </div>
                 <div>
                  <p>2026</p>
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Lists">
             <div>
              <div data-framer-name="Product">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Product</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./ai/">
                 <div data-framer-name="Item">
                  <div>AI</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./design/">
                 <div data-framer-name="Item">
                  <div>Design</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./publish/">
                 <div data-framer-name="Item">
                  <div>Publish</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./cms/">
                 <div data-framer-name="Item">
                  <div>CMS</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./scale/">
                 <div data-framer-name="Item">
                  <div>Scale</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./seo/">
                 <div data-framer-name="Item">
                  <div>SEO</div>
                 </div>
                 <div>
                  <div data-framer-name="Label">
                   <div>
                    <p>New</p>
                   </div>
                  </div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./collaborate/">
                 <div data-framer-name="Item">
                  <div>Collaborate</div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Business</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./pricing">
                 <div data-framer-name="Item">
                  <div>Pricing</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./switch/">
                 <div data-framer-name="Item">
                  <div>Switch</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./startups/">
                 <div data-framer-name="Item">
                  <div>Startups</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./agencies/">
                 <div data-framer-name="Item">
                  <div>Agencies</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./enterprise/">
                 <div data-framer-name="Item">
                  <div>Enterprise</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Compare">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Compare</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-figma">
                 <div data-framer-name="Item">
                  <div>Figma</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-webflow">
                 <div data-framer-name="Item">
                  <div>Webflow</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-wordpress">
                 <div data-framer-name="Item">
                  <div>Wordpress</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-squarespace">
                 <div data-framer-name="Item">
                  <div>Squarespace</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-unbounce">
                 <div data-framer-name="Item">
                  <div>Unbounce</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-wix">
                 <div data-framer-name="Item">
                  <div>Wix</div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Solutions">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Solutions</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/figma-to-html/">
                 <div data-framer-name="Item">
                  <div>Figma to HTML</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/website-builder/">
                 <div data-framer-name="Item">
                  <div>Website builder</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/portfolio-website/">
                 <div data-framer-name="Item">
                  <div>Portfolio maker</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/landing-pages/">
                 <div data-framer-name="Item">
                  <div>Landing pages</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/ui-ux-design/">
                 <div data-framer-name="Item">
                  <div>UI/UX design</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/no-code-website-builder/">
                 <div data-framer-name="Item">
                  <div>No-code</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Resources">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Resources</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/templates/">
                 <div data-framer-name="Item">
                  <div>Templates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/components/">
                 <div data-framer-name="Item">
                  <div>Components</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/plugins/">
                 <div data-framer-name="Item">
                  <div>Plugins</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/vectors/">
                 <div data-framer-name="Item">
                  <div>Vectors</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/">
                 <div data-framer-name="Item">
                  <div>Marketplace</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./downloads/">
                 <div data-framer-name="Item">
                  <div>Downloads</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./developers/">
                 <div data-framer-name="Item">
                  <div>Developers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./wallpapers/">
                 <div data-framer-name="Item">
                  <div>Wallpapers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./newsletter">
                 <div data-framer-name="Item">
                  <div>Newsletter</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./updates">
                 <div data-framer-name="Item">
                  <div>Updates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./help/">
                 <div data-framer-name="Item">
                  <div>Support</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./contact/">
                 <div data-framer-name="Item">
                  <div>Contact</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./brand">
                 <div data-framer-name="Item">
                  <div>Brand</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./blog/">
                 <div data-framer-name="Item">
                  <div>Blog</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Company</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./meetups/">
                 <div data-framer-name="Item">
                  <div>Meetups</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./careers/">
                 <div data-framer-name="Item">
                  <div>Careers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./legal/security/">
                 <div data-framer-name="Item">
                  <div>Security</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="mailto:abuse@framer.com">
                 <div data-framer-name="Item">
                  <div>Abuse</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./brand">
                 <div data-framer-name="Item">
                  <div>Media</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./legal/terms-of-service/">
                 <div data-framer-name="Item">
                  <div>Legal</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./store">
                 <div data-framer-name="Item">
                  <div>Store</div>
                 </div>
                 <div>
                  <div data-framer-name="Label">
                   <div>
                    <p>New</p>
                   </div>
                  </div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Programs</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./creators">
                 <div data-framer-name="Item">
                  <div>Affiliates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./expert/apply/">
                 <div data-framer-name="Item">
                  <div>Experts</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./creators">
                 <div data-framer-name="Item">
                  <div>Creators</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./education/students/">
                 <div data-framer-name="Item">
                  <div>Students</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./education/ambassadors/">
                 <div data-framer-name="Item">
                  <div>Ambassadors</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div data-framer-name="COOKIE BANNER — DO NOT REMOVE" name="COOKIE BANNER — DO NOT REMOVE"></div>
          </footer>
         </div>
         <div>
          <footer data-framer-name="Mobile">
           <div>
            <div data-framer-name="Logo">
             <div>
              <div>
               <a data-framer-name="On" href="./">
                <div data-framer-name="Logo" role="img" aria-label="Framer Logo"></div>
               </a>
              </div>
              <div>
               <div data-framer-name="Variant 1">
                <div>
                 <a data-framer-name="Loading" href="https://www.framerstatus.com/" target="_blank">
                  <div>
                   <div></div>
                   <div></div>
                  </div>
                  <div>
                   <div data-framer-name="Item">
                    <div>Loading status</div>
                   </div>
                  </div>
                  <div data-framer-name="Item">
                   <div>loading</div>
                  </div>
                 </a>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div data-framer-name="Lists">
             <div>
              <div data-framer-name="Product">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Product</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./ai/">
                 <div data-framer-name="Item">
                  <div>AI</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./design/">
                 <div data-framer-name="Item">
                  <div>Design</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./publish/">
                 <div data-framer-name="Item">
                  <div>Publish</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./cms/">
                 <div data-framer-name="Item">
                  <div>CMS</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./scale/">
                 <div data-framer-name="Item">
                  <div>Scale</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./seo/">
                 <div data-framer-name="Item">
                  <div>SEO</div>
                 </div>
                 <div>
                  <div data-framer-name="Label">
                   <div>
                    <p>New</p>
                   </div>
                  </div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./collaborate/">
                 <div data-framer-name="Item">
                  <div>Collaborate</div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Business</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./pricing">
                 <div data-framer-name="Item">
                  <div>Pricing</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./switch/">
                 <div data-framer-name="Item">
                  <div>Switch</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./startups/">
                 <div data-framer-name="Item">
                  <div>Startups</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./agencies/">
                 <div data-framer-name="Item">
                  <div>Agencies</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./enterprise/">
                 <div data-framer-name="Item">
                  <div>Enterprise</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Compare">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Compare</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-figma">
                 <div data-framer-name="Item">
                  <div>Figma</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-webflow">
                 <div data-framer-name="Item">
                  <div>Webflow</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-wordpress">
                 <div data-framer-name="Item">
                  <div>Wordpress</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-squarespace">
                 <div data-framer-name="Item">
                  <div>Squarespace</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-unbounce">
                 <div data-framer-name="Item">
                  <div>Unbounce</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./compare/framer-vs-wix">
                 <div data-framer-name="Item">
                  <div>Wix</div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Solutions">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Solutions</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/figma-to-html/">
                 <div data-framer-name="Item">
                  <div>Figma to HTML</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/website-builder/">
                 <div data-framer-name="Item">
                  <div>Website builder</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/portfolio-website/">
                 <div data-framer-name="Item">
                  <div>Portfolio maker</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/landing-pages/">
                 <div data-framer-name="Item">
                  <div>Landing pages</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/ui-ux-design/">
                 <div data-framer-name="Item">
                  <div>UI/UX design</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./solutions/no-code-website-builder/">
                 <div data-framer-name="Item">
                  <div>No-code</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Resources">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Resources</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/templates/">
                 <div data-framer-name="Item">
                  <div>Templates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/components/">
                 <div data-framer-name="Item">
                  <div>Components</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/plugins/">
                 <div data-framer-name="Item">
                  <div>Plugins</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/vectors/">
                 <div data-framer-name="Item">
                  <div>Vectors</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="https://www.framer.com/marketplace/">
                 <div data-framer-name="Item">
                  <div>Marketplace</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./downloads/">
                 <div data-framer-name="Item">
                  <div>Downloads</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./developers/">
                 <div data-framer-name="Item">
                  <div>Developers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./wallpapers/">
                 <div data-framer-name="Item">
                  <div>Wallpapers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./newsletter">
                 <div data-framer-name="Item">
                  <div>Newsletter</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./updates">
                 <div data-framer-name="Item">
                  <div>Updates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./help/">
                 <div data-framer-name="Item">
                  <div>Support</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./contact/">
                 <div data-framer-name="Item">
                  <div>Contact</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./brand">
                 <div data-framer-name="Item">
                  <div>Brand</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./blog/">
                 <div data-framer-name="Item">
                  <div>Blog</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
             <div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Company</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./meetups/">
                 <div data-framer-name="Item">
                  <div>Meetups</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./careers/">
                 <div data-framer-name="Item">
                  <div>Careers</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./legal/security/">
                 <div data-framer-name="Item">
                  <div>Security</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="mailto:abuse@framer.com">
                 <div data-framer-name="Item">
                  <div>Abuse</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./brand">
                 <div data-framer-name="Item">
                  <div>Media</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./legal/terms-of-service/">
                 <div data-framer-name="Item">
                  <div>Legal</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./store">
                 <div data-framer-name="Item">
                  <div>Store</div>
                 </div>
                 <div>
                  <div data-framer-name="Label">
                   <div>
                    <p>New</p>
                   </div>
                  </div>
                 </div>
                </a>
               </div>
              </div>
              <div data-framer-name="Company">
               <div data-framer-name="Nav/Topbar Link">
                <div data-framer-name="Item">
                 <div>Programs</div>
                </div>
               </div>
               <div>
                <a data-framer-name="Label" href="./creators">
                 <div data-framer-name="Item">
                  <div>Affiliates</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./expert/apply/">
                 <div data-framer-name="Item">
                  <div>Experts</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./creators">
                 <div data-framer-name="Item">
                  <div>Creators</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./education/students/">
                 <div data-framer-name="Item">
                  <div>Students</div>
                 </div>
                </a>
               </div>
               <div>
                <a data-framer-name="Label" href="./education/ambassadors/">
                 <div data-framer-name="Item">
                  <div>Ambassadors</div>
                 </div>
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
           <div data-framer-name="COOKIE BANNER — DO NOT REMOVE" name="COOKIE BANNER — DO NOT REMOVE"></div>
           <div>
            <div aria-hidden="true"></div>
            <div aria-hidden="true"></div>
            <div aria-hidden="true"></div>
            <div>
             <div aria-hidden="true"></div>
             <div data-framer-name="Layer Title">
              <p>CCPA</p>
             </div>
            </div>
           </div>
           <div>
            <a href="https://x.com/framer" target="_blank">
             <div></div>
            </a>
            <a href="https://www.threads.com/@framer" target="_blank">
             <div></div>
            </a>
            <a href="https://www.tiktok.com/@framer" target="_blank">
             <div></div>
            </a>
            <a href="https://www.instagram.com/framer/" target="_blank">
             <div></div>
            </a>
            <a href="https://www.linkedin.com/company/framer/" target="_blank">
             <div></div>
            </a>
            <a href="https://www.youtube.com/@Framer" target="_blank">
             <div></div>
            </a>
           </div>
           <div>
            <div data-framer-name="Variant 1">
             <div>
              <p>© Framer B.V.</p>
             </div>
             <div>
              <p>2026</p>
             </div>
            </div>
           </div>
          </footer>
         </div>
        </div>
       </div>
       <div></div>
      </div>
      <div aria-hidden="true"></div>
     </body>
    </html>
    "
  `,
  )
})

test('collapses 3+ consecutive empty elements of same type', async () => {
  const html = `
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <p>content</p>
      <div></div>
      <div></div>
    </div>
  `
  const result = await formatHtmlForPrompt(html)

  // Should collapse 4 spans into 1, but keep 2 divs (not >= 3)
  expect(result).toMatchInlineSnapshot(`
    "<div>
     <span></span>
     <p>content</p>
     <div></div>
     <div></div>
    </div>
    "
  `)
})

test('does not collapse empty elements with attributes', async () => {
  const html = `
    <div>
      <span data-framer-name="a"></span>
      <span data-framer-name="b"></span>
      <span data-framer-name="c"></span>
    </div>
  `
  const result = await formatHtmlForPrompt(html)

  // All 3 should remain because they have attributes
  expect(result).toMatchInlineSnapshot(`
    "<div>
     <span data-framer-name="a"></span>
     <span data-framer-name="b"></span>
     <span data-framer-name="c"></span>
    </div>
    "
  `)
})
