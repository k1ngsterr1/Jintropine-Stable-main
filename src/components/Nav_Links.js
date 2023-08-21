import React from "react";
import { useTranslation, Trans } from "react-i18next";
// Link
import { Link } from "react-scroll";

const Nav_Links = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="nav-links-mobile">
      <span className="mobile-separator"></span>
      <a className="main-link-mobile" href="/">
        {t("link-main.key")}
      </a>
      <Link
        className="verification-mobile-link"
        to="verification-screen"
        smooth={true}
      >
        {t("verification-link.key")}
      </Link>
      <Link to="contact-screen" smooth={true} className="indication-mob">
        {t("indications.key")}
      </Link>
      <Link to="contact-screen" smooth={true} className="available-mob">
        {t("available.key")}
      </Link>
      <Link to="contact-screen" smooth={true} className="document-mob">
        {t("document.key")}
      </Link>
      <Link
        to="contact-screen"
        smooth={true}
        className="realisation-conditions-mob"
      >
        {t("realisation-conditions.key")}
      </Link>
      <Link to="contact-screen" smooth={true} className="contact-with-us-mob">
        {t("contact-button.key")}
      </Link>
      <div className="language-buttons">
        {" "}
        <span
          onClick={() => changeLanguage("ru")}
          className="fi fi-ru fi"
        ></span>
        <span
          onClick={() => changeLanguage("us")}
          className="fi fi-us fi"
        ></span>
        <span
          onClick={() => changeLanguage("kz")}
          className="fi fi-kz fi"
        ></span>
      </div>
    </div>
  );
};

export default Nav_Links;
