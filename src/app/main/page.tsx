import AdminEditButton from "@/components/AdminEditButton";
import { supabase } from "@/lib/supabaseClient";
import PublishedMain from "@/components/PublishedMain";
import Link from "next/link";
export default function MainPage() {
  return (
    <div id="ib7x" className="gjs-t-body">
        {/* Navbar */}
        <section id="inav" className="gjs-section">
          <div id="ic9y" className="gjs-container">
            <div id="i9devj" className="navbar">
              <div data-gjs="navbar" id="ixfu6" className="navbar-cnt">
                <a href="/" className="navbar-brand">
                  <h1 id="ih1">test Paolo</h1>
                </a>
                <div id="iahka3" className="navbar-menu-toggle">
                  <div data-type-icon="" id="ip0vpf" className="gjs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div data-gjs="navbar-items" className="navbar-items-c">
                  <nav id="iccwch" className="navbar-menu-nav">
                    <a id="ilink1" href="#ihero" className="nav-links">
                      Home
                    </a>
                    <a id="ilink2" href="/login" className="nav-links">
                      login
                    </a>
                  <AdminEditButton />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section id="ihero" className="gjs-section">
          <div id="iherocnt" className="gjs-container">
            <div
              data-type-role="flex-row"
              id="iherorow"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="iherocol1"
                className="gjs-plg-flex-column"
              >
                <h4 id="ih4">Team Collaboration</h4>
                <h2 id="ih2">Collaborate Seamlessly Across Teams</h2>
                <span id="iherotext">
                  ABCD
                </span>
                <div
                  data-type-role="flex-row"
                  id="iherobtn-row"
                  className="gjs-plg-flex-row"
                >
                  <a href="#ifeatures" id="iherobtn1" className="gjs-link-box">
                    <span id="iherobtn1txt">Start Free Trial</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What’s inside / About */}
        <section id="iabout" className="gjs-section">
          <div id="iabtcnt" className="gjs-container">
            <div
              data-type-role="flex-row"
              id="iabtrow"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="iabtcol1"
                className="gjs-plg-flex-column"
              >
                <h4 id="iabtlabel">What's inside</h4>
                <h2 id="iabttitle">Powerful tools at your fingertips</h2>
                <span id="iabttext">
                  EFG
                </span>
              </div>
            </div>
            <div
              data-type-role="flex-row"
              id="iabtcards"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="iabt1"
                className="gjs-plg-flex-column"
              >
                <div data-type-icon="" id="iabt1icon" className="gjs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="iyd0r"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2v20m10-10H2"
                      id="ipw72"
                    ></path>
                  </svg>
                </div>
                <h3 id="iabt1title">Real-Time Sync</h3>
                <span id="iabt1text">
                  HGI
                </span>
              </div>
              <div
                data-type-role="flex-column"
                id="iabt2"
                className="gjs-plg-flex-column"
              >
                <div data-type-icon="" id="iabt1icon-2" className="gjs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="ihew1"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      id="ih0xs"
                    ></path>
                  </svg>
                </div>
                <h3 id="iabt2title">Secure Storage</h3>
                <span id="iabt2text">
                  Enterprise-grade encryption ensures your data remains protected
                  with bank-level security standards.
                </span>
              </div>
              <div
                data-type-role="flex-column"
                id="iabt3"
                className="gjs-plg-flex-column"
              >
                <div data-type-icon="" id="iabt1icon-2-2" className="gjs-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="imohs"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3v18h18M7 16l4-4 4 4 6-6"
                      id="ihlyk"
                    ></path>
                  </svg>
                </div>
                <h3 id="iabt3title">Team Analytics</h3>
                <span id="iabt3text">
                  Track productivity and project progress with comprehensive
                  dashboards and detailed reports.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Built for modern teams */}
        <section id="idetails" className="gjs-section">
          <div id="idtcnt" className="gjs-container">
            <div
              data-type-role="flex-row"
              id="idt1row"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="idt1col1"
                className="gjs-plg-flex-column"
              >
                <img
                  id="idt1img"
                  src="https://cdn.grapesjs.com/workspaces/cmf55fvd721dbd80a2yd22yfh/assets/bb930b85-889b-474b-9379-1277ca392d4f__lp-cloudsync-1.webp"
                  alt="Feature Image"
                />
              </div>
              <div
                data-type-role="flex-column"
                id="idt1col2"
                className="gjs-plg-flex-column"
              >
                <h2 id="idt1title">Built for Modern Teams</h2>
                <span id="idt1text">
                  CloudSync streamlines your workflow by bringing all your
                  collaboration tools into one unified platform. From small
                  startups to large enterprises, our solution scales with your
                  needs.
                </span>
                <div
                  data-type-role="flex-column"
                  id="idt1list"
                  className="gjs-plg-flex-column"
                >
                  <span id="idt1item1" className="feature-item">
                    Unlimited file storage and sharing
                  </span>
                  <span id="idt1item2" className="feature-item">
                    Advanced permission controls
                  </span>
                  <span id="idt1item3" className="feature-item">
                    Integration with popular tools
                  </span>
                  <span id="idt1item4" className="feature-item">
                    24/7 customer support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="ifeatures" className="gjs-section">
          <div id="iftcnt" className="gjs-container">
            <div
              data-type-role="flex-row"
              id="ift0row"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="ift0col"
                className="gjs-plg-flex-column"
              >
                <h2 id="ift0title">Powerful Features</h2>
                <span id="ift0text">Everything you need to collaborate effectively</span>
              </div>
            </div>
            <div
              data-type-role="flex-row"
              id="iftcards"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="ift1"
                className="gjs-plg-flex-column"
              >
                <h3 id="ift1title">File Management</h3>
                <span id="ift1text">
                  Organize, share, and collaborate on files with intuitive
                  drag-and-drop functionality.
                </span>
              </div>
              <div
                data-type-role="flex-column"
                id="ift2"
                className="gjs-plg-flex-column"
              >
                <h3 id="ift2title">Task Tracking</h3>
                <span id="ift2text">
                  Create tasks, set deadlines, and monitor progress with our
                  built-in project management tools.
                </span>
              </div>
              <div
                data-type-role="flex-column"
                id="ift3"
                className="gjs-plg-flex-column"
              >
                <h3 id="ift3title">Video Conferencing</h3>
                <span id="ift3text">
                  Host unlimited video meetings with screen sharing and
                  recording capabilities.
                </span>
              </div>
              <div
                data-type-role="flex-column"
                id="ift4"
                className="gjs-plg-flex-column"
              >
                <h3 id="ift4title">Team Chat</h3>
                <span id="ift4text">
                  Communicate instantly with direct messages, group channels,
                  and threaded conversations.
                </span>
              </div>
              <div
                data-type-role="flex-column"
                id="ift5"
                className="gjs-plg-flex-column"
              >
                <h3 id="ift5title">Mobile Apps</h3>
                <span id="ift5text">
                  Access your workspace anywhere with native iOS and Android
                  applications.
                </span>
              </div>
              <div
                data-type-role="flex-column"
                id="ift6"
                className="gjs-plg-flex-column"
              >
                <h3 id="ift6title">API Access</h3>
                <span id="ift6text">
                  Build custom integrations and automate workflows with our
                  developer-friendly API.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section id="istats" className="gjs-section">
          <div id="istcnt" className="gjs-container">
            <div
              data-type-role="flex-row"
              id="istintro"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="istcol"
                className="gjs-plg-flex-column"
              >
                <h4 id="istlabel">OUR IMPACT</h4>
                <h2 id="isttitle">Trusted by teams worldwide</h2>
              </div>
            </div>
            <div
              data-type-role="flex-row"
              id="istcards"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="ist1"
                className="gjs-plg-flex-column"
              >
                <h3 id="ist1num">50,000+</h3>
                <span id="ist1text">Active Users</span>
              </div>
              <div
                data-type-role="flex-column"
                id="ist2"
                className="gjs-plg-flex-column"
              >
                <h3 id="ist2num">99.9%</h3>
                <span id="ist2text">Uptime Guarantee</span>
              </div>
              <div
                data-type-role="flex-column"
                id="ist3"
                className="gjs-plg-flex-column"
              >
                <h3 id="ist3num">150+</h3>
                <span id="ist3text">Countries Worldwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / Reviews */}
        <section id="ireviews" className="gjs-section">
          <div id="irevcnt" className="gjs-container">
            <div
              data-type-role="flex-row"
              id="irevrow"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="irevcol1"
                className="gjs-plg-flex-column"
              >
                <h2 id="irevtitle">What Our Customers Say</h2>
                <span id="irevtext">
                  See how CloudSync has transformed collaboration for businesses
                  around the world.
                </span>
              </div>
            </div>
            <div
              data-type-role="flex-row"
              id="irevcards"
              className="gjs-plg-flex-row"
            >
              <div
                data-type-role="flex-column"
                id="irev1"
                className="gjs-plg-flex-column"
              >
                <img
                  src="https://cdn.grapesjs.com/workspaces/cmf55fvd721dbd80a2yd22yfh/assets/f3e3f821-47fb-4c79-b684-b32b4668690d__lp-cloudsync-2.webp"
                  alt="Client"
                  id="irev1img"
                />
                <span id="irev1text">
                  "CloudSync transformed how our team collaborates. The
                  seamless integration and intuitive interface made adoption
                  effortless across our entire organization."
                </span>
                <strong id="irev1name">Sarah Chen</strong>
                <span id="irev1company">Tech Director</span>
              </div>
              <div
                data-type-role="flex-column"
                id="irev2"
                className="gjs-plg-flex-column"
              >
                <img
                  src="https://cdn.grapesjs.com/workspaces/cmf55fvd721dbd80a2yd22yfh/assets/7467e848-c655-4ab5-93f8-1d17c40942a8__lp-cloudsync-3.webp"
                  alt="Client"
                  id="irev2img"
                />
                <span id="irev2text">
                  "We've tried many collaboration tools, but CloudSync stands
                  out with its reliability and comprehensive feature set. It's
                  become essential to our daily operations."
                </span>
                <strong id="irev2name">Michael Torres</strong>
                <span id="irev2company">Product Manager</span>
              </div>
              <div
                data-type-role="flex-column"
                id="irev3"
                className="gjs-plg-flex-column"
              >
                <img
                  src="https://cdn.grapesjs.com/workspaces/cmf55fvd721dbd80a2yd22yfh/assets/aca87963-69aa-4a91-844d-df0ee9f96cac__lp-cloudsync-4.webp"
                  alt="Client"
                  id="irev3img"
                />
                <span id="irev3text">
                  "The customer support is outstanding. Any questions we have
                  are answered quickly, and the platform updates continuously
                  improve our workflow efficiency."
                </span>
                <strong id="irev3name">Emily Rodriguez</strong>
                <span id="irev3company">Operations Lead</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="ipricing" className="gjs-section">
          <div id="iprcnt" className="gjs-container"></div>
          </section>
    </div>
  );
}