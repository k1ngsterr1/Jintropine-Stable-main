import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/verification-styles/verification-styles.css";
import { useNavigate } from "react-router";

import sticker from "../assets/verification-sticker.svg";
import white from "../assets/verification-white.svg";

const VerificationScreen = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="verification-screen" id="verification-screen">
      <div className="verification-container">
        <div className="verification-heading-container">
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-verification-heading"
                : "verification-heading"
            }
          >
            {t("link-verification.key")}
          </div>
          <span className="separator"></span>
        </div>
        <div className="verification-content">
          <div className="verification-description">
            <div
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-ver-description-heading"
                  : "ver-description-heading"
              }
            >
              {t("ver-description-heading.key")}
            </div>
            <p
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-ver-paragraph-zero"
                  : "ver-paragraph-zero"
              }
            >
              {t("ver-paragraph-zero.key")}
            </p>
            <p
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-ver-paragraph-one"
                  : "ver-paragraph-one"
              }
            >
              {" "}
              {t("ver-paragraph-one.key")}{" "}
            </p>
            <p
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-ver-paragraph-two"
                  : "ver-paragraph-two"
              }
            >
              {" "}
              {t("ver-paragraph-two.key")}{" "}
            </p>
            <img
              className="verification-sticker-mob"
              alt="sticker"
              src={sticker}
            ></img>
            <a
              className="verification-button"
              href="http://ppk365.com/jinsaiyaoye/"
              target="_blank"
            >
              {t("verification-button.key")}
            </a>
          </div>
          <img
            className="verification-sticker"
            alt="sticker"
            src={sticker}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen;
