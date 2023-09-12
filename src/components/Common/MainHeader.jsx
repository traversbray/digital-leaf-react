import "../../assets/styles/layouts/_header.scss";
import { useLoaderData } from "react-router-dom";
import GreenButton from "./GreenButton";
import NavLinks from "./NavLinks";
import Hamburger from "hamburger-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

function MainHeader() {
  const navLinks = useLoaderData();
  const [mobileHamburgerOpen, setMobileHamburgerOpen] = useState(false);

  return (
    <>
      <header id="site-header" className="site-header">
        <div className="header-wrapper container flex no-wrap cols-auto justify-content-space-between align-items-center">
          <Logo />
          {/* @if (has_nav_menu('primary_navigation')) */}
          <div className="site-header__menu">
            <nav id="nav-primary" className="nav-primary">
              {navLinks.length > 0 && <NavLinks data={navLinks} />}
              <GreenButton btnLink="/contact">Let's Talk</GreenButton>
            </nav>
            <Hamburger
              toggled={mobileHamburgerOpen}
              toggle={setMobileHamburgerOpen}
              className={mobileHamburgerOpen ?? "is-active"}
            />
          </div>
          {/* @endif */}
        </div>
      </header>
      <MobileMenu menuOpen={mobileHamburgerOpen} />
    </>
  );
}

export default MainHeader;
