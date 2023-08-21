import React from "react";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Styles
import "../styles/about-jin-styles/about_jin_styles.css";

// About
import prototype from "../assets/girl-about.png";
import arrow from "../assets/about_arrow.svg";

import girlAbout from "../assets/girl-about-phone.png";

const AboutJinScreen = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  return (
    <div className="about-jin" id="about-jintropin">
      <div className="about-jin-container">
        <div className="about-heading-container">
          <h2
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-about-heading"
                : "about-heading"
            }
          >
            {t("about-heading.key")}
          </h2>
          <div className="separator"></div>
        </div>
        <div className="about-content">
          {/* For Icon */}
          <img
            src={prototype}
            className="about-proto"
            alt="about_screen_photo"
          ></img>
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-about-paragraph"
                : "about-paragraph"
            }
          >
            <p className="about-text">{t("about-text.key")}</p>
            <button
              className={
                i18n.resolvedLanguage == "kz" ? "kz-more-info" : "more-info"
              }
              onClick={() => navigate("/information")}
            >
              {t("more-info.key")}
            </button>
          </div>
        </div>
      </div>
      <img src={girlAbout} className="girl-about-phone"></img>
      <img src={arrow} className="about-arrow" alt="arrow"></img>
    </div>
  );
};
export default AboutJinScreen;
