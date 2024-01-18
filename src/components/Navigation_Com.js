import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { useContext } from "react";

// Styles
import styles from "../styles/navigation-styles/navigation_styles.css";

// Assets
import Logo from "../assets/jintropin-original-logo.svg";
import Pills from "../assets/jintropin-mobile-logo.svg";

// Links
import { Link, animateScroll as scroll } from "react-scroll";

// Icons
import { FaBars, FaCaretDown, FaCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

// Hooks
import { useState } from "react";
import Nav_Links from "./Nav_Links";

// import { Link } from "react-scroll";

import { slide as Menu } from "react-burger-menu";
import Hamburger_Menu from "./Hamburger_Menu";

import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [open, setOpen] = useState(false);

  const hamburgerMenu = (
    <FaBars className="bars" onClick={() => setOpen(!open)}></FaBars>
  );

  const closeMenu = (
    <RxCross2 className="cross-icon" onClick={() => setOpen(!open)}></RxCross2>
  );

  return (
    <div className="nav-container" id="nav-container">
      <nav className="nav">
        <img className="logo" src={Logo} alt="logo"></img>
        <a
          className="whats-app-link"
          href="https://api.whatsapp.com/send/?phone=77772886600&text&type=phone_number&app_absent=0"
        >
          <IoLogoWhatsapp className="whats-app-icon"></IoLogoWhatsapp>
          {t("write-to-wa.key")}
        </a>
        <a className="phone-number" href="tel: +77772886600">
          +7 777 288 6600
        </a>
        <a className="email" href="mailto: sales@jintropine.com">
          sales@jintropine.com
        </a>
        <Link
          className="form-button"
          to="contact-screen"
          smooth={true}
          onClick={() => navigate("/")}
        >
          Отправить заявку
        </Link>
        <Hamburger_Menu outerContainerId={"nav-container"}></Hamburger_Menu>
      </nav>
      <nav className="nav-mob">
        <img className="mobile-logo" src={Pills}></img>
        <div className="for-burger-menu">
          {open ? closeMenu : hamburgerMenu}
          {open && <Nav_Links></Nav_Links>}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
