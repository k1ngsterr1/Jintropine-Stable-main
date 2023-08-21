import React from "react";

import styles from "../styles/realisation-styles/realisation_styles.css";

import health_img from "../assets/health-yellow.svg";
import laptop_img from "../assets/laptop-card.svg";
import delivery_img from "../assets/delivery.svg";

import { useTranslation, Trans } from "react-i18next";

const RealisationScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="realisation-screen" id="realisation-screen">
      <div className="realisation-container">
        <div className="realisation-heading-container">
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-realisation-heading"
                : "realisation-heading"
            }
          >
            {t("realisation-conditions.key")}
          </div>
          <span className="separator"></span>
        </div>
        <div className="realisation-content">
          <div className="realisation-row-1">
            <img
              className="realisation-img-1"
              alt="health"
              src={health_img}
            ></img>
            <div className="realisation-text-1">
              <div
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-realisation-heading-1"
                    : "realisation-heading-1"
                }
              >
                {t("realisation-one.key")}
              </div>
              <p
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-realisation-paragraph-1"
                    : "realisation-paragraph-1"
                }
              >
                {t("realisation-one-text.key")}
              </p>
            </div>
          </div>
          <div className="realisation-row-2">
            <img
              className="realisation-img-2-mob"
              alt="laptop"
              src={laptop_img}
            ></img>
            {/* <div className="realisation-text-2">
              <h6 className="realisation-heading-2">
                {t("realisation-two.key")}
              </h6>
              <p className="realisation-paragraph-2">
                {t("realisation-two-text.key")}
              </p>
            </div> */}
            <img
              className="realisation-img-2"
              alt="laptop"
              src={laptop_img}
            ></img>
            <div className="realisation-text-2">
              <div
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-realisation-heading-2"
                    : "realisation-heading-2"
                }
              >
                {t("realisation-two.key")}
              </div>
              <p
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-realisation-paragraph-2"
                    : "realisation-paragraph-2"
                }
              >
                {t("realisation-two-text.key")}
              </p>
            </div>
          </div>
          <div className="realisation-row-3">
            <img
              className="realisation-img-3"
              alt="delivery"
              src={delivery_img}
            ></img>
            <div className="realisation-text-3">
              <div
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-realisation-heading-3"
                    : "realisation-heading-3"
                }
              >
                {t("realisation-three.key")}
              </div>
              <p
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-realisation-paragraph-3"
                    : "realisation-paragraph-3"
                }
              >
                {t("realisation-three-text.key")}
                <br />

                <br />
                {t("kazakhstan.key")}
                <br />
                <br />
                {t("russia.key")}
                <br />
                <br />
                {t("world.key")}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealisationScreen;
