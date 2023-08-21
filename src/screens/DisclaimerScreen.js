import React from "react";

import disclaimer from "../assets/disclaimer_icon.svg";

import styles from "../styles/disclaimer-styles/disclaimer_styles.css";

import { useTranslation, Trans } from "react-i18next";

const DisclaimerScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="disclaimer-screen" id="disclaimer-screen">
      <div className="disclaimer-container">
        <div className="disclaimer-heading-container">
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-disclaimer-heading"
                : "disclaimer-heading"
            }
          >
            {t("disclaimer-heading.key")}
          </div>
          <span className="separator"></span>
        </div>
        <div className="disclaimer-content">
          <p
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-disclaimer-paragraph"
                : "disclaimer-paragraph"
            }
          >
            {t("disclaimer-text.key")}
          </p>
          <p
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-disclaimer-bold-paragraph"
                : "disclaimer-bold-paragraph"
            }
          >
            {t("disclaimer-text-bold.key")}
          </p>
          <img
            className="disclaimer-icon"
            src={disclaimer}
            alt="disclaimer"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerScreen;
