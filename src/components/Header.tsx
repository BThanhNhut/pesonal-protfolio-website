export default function Header() {
  return (
    <header className="header-1" id="header-sticky">
      <div className="container-fluid">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo">
              <a href="index-2.html" className="header-logo">
                <img src="/img/logo/Logo-black.svg" alt="logo-img" />
              </a>
              <div className="logo-2">
                <a href="index-2.html">
                  <img src="/img/logo/Logo-black.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="mean__menu-wrapper">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li className="has-dropdown active">
                      <a href="index-2.html" className="border-none">
                        Home
                        <i className="fa-solid fa-chevron-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="index-2.html">Home 01</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 02</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 03</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">
                        Pages
                        <i className="fa-solid fa-chevron-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="service-details.html">Our Services</a>
                          <ul className="submenu">
                            <li>
                              <a href="service.html">Service</a>
                            </li>
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="portfolio-details.html">Our Portfolio</a>
                          <ul className="submenu">
                            <li>
                              <a href="portfolio.html">Portfolio</a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Portfolio Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="news-details.html">
                        Blog
                        <i className="fa-solid fa-chevron-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="news.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="news-classic.html">Blog Classic</a>
                        </li>
                        <li>
                          <a href="news-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact Me</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <a href="contact.html" className="theme-btn">
                Hire Me
                <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </a>
              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle">
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
