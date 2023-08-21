import React from "react";

import styles from "../styles/instock-styles/instock_styles.css";
import jintropine_card from "../assets/jintropine_card.svg";
import instock from "../assets/instock_arrow.svg";

import { useTranslation, Trans } from "react-i18next";

const InstockScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="in-stock-screen" id="in-stock-screen">
      <div className="in-stock-container">
        <div className="in-stock-heading-container">
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-in-stock-heading"
                : "in-stock-heading"
            }
          >
            {t("in-stock-heading.key")}
          </div>
          <span className="separator"></span>
        </div>
        <div className="in-stock-content">
          <div className="jintropine-card">
            <img
              className="jintropine-image"
              src={jintropine_card}
              alt="jintropine-card"
            ></img>
            <div className="card-content-jin">
              <p
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-growth-hormone"
                    : "growth-hormone"
                }
              >
                {t("growth-hormone-heading.key")}
              </p>
              <h3
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-card-heading"
                    : "card-heading"
                }
              >
                {t("growth-hormone-10mg.key")}
              </h3>
              <p
                className={
                  i18n.resolvedLanguage == "kz"
                    ? "kz-p-description"
                    : "p-description"
                }
              >
                {t("jintropine-card-description.key")}
              </p>
              <p className="in-stock">{t("in-stock-text.key")}</p>
              <p className="price">
                {i18n.resolvedLanguage == "us" ? "145$" : "65.000₸"}
              </p>
              <a
                className="stock-button"
                href="https://wa.me/77772886600"
                target="_blank"
              >
                {t("show-drug.key")}
              </a>
            </div>
          </div>
          <div className="instock-p-container">
            <p
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-jintropine-paragraph"
                  : "jintropine-paragraph"
              }
            >
              {t("jintropine-paragraph.key")}
            </p>
            <a
              className={
                i18n.resolvedLanguage == "kz" ? "kz-main-button" : "main-button"
              }
              href="https://t.me/jintropine"
              target="_blank"
            >
              {t("main-button.key")}{" "}
            </a>
          </div>
        </div>
      </div>
      {/* <img className="deco-picture" src={explosion}></img> */}
      <img className="arrow" src={instock} alt="arrow"></img>
    </div>
  );
};

export default InstockScreen;
