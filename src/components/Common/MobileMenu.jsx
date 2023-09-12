import "../../assets/styles/components/_mobile-menu.scss";

function MobileMenu({ menuOpen }) {
  //   const menuBtn = document.getElementById("menu-btn");
  //   const mobileMenu = document.getElementById("mobile-menu");

  //   if (menuBtn && mobileMenu) {
  //     menuBtn.addEventListener("click", () => {
  //       mobileMenu.classList.toggle("mobile-menu--open");
  //     });

  //     const openSubMenu = mobileMenu.querySelectorAll(".open-sub-menu");
  //     const subMenu = mobileMenu.querySelectorAll(".sub-menu");
  //     openSubMenu.forEach((element, index) => {
  //       element.addEventListener("click", (e) => {
  //         e.preventDefault();
  //         $(subMenu[index]).slideToggle(200);
  //       });
  //     });
  //   }
  

  return (
    <nav id="mobile-menu" className={menuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}>
      <ul className="menu">
        <li className="menu-item">
          <a href="/services">Services</a>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" className="open-sub-menu">
            Creative
          </a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/ui-design/">
                UI Design
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/video-design/">
                Video Design
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/logo-and-brand-identity/">
                Logo and Brand Identity
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/graphic-design/">
                Graphic Design
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" className="open-sub-menu">
            Development
          </a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/website-development/integrations/">
                Integrations
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/website-development/wordpress-plugin-development/">
                WordPress Plugin Development
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/website-development/restaurant-website-build/">
                Restaurant Website Build
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/website-development/react-website-build/">
                React Website Build
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/website-development/wordpress-build/">
                WordPress Build
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/app-development/react-native-build/">
                React Native Build
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/testing-and-review/">
                Testing and Review
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/app-development/">
                App Development
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/dns-and-hosting/">
                DNS and Hosting
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/e-commerce-development/">
                E-commerce Development
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" className="open-sub-menu">
            Marketing
          </a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/email-marketing-strategy/">
                Email Marketing Strategy
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/email-marketing/">
                Email Marketing
              </a>
            </li>
            <li className="menu-item">
              <a href="http://digital-leaf.local/services/search-engine-optimization-seo/">
                Search Engine Optimization (SEO)
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="/contact" className="btn">
            Let's Talk
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
