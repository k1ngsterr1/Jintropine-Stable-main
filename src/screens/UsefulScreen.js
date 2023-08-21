import React from "react";
import Card_Imm from "../components/Card_Imm";
import Card_Muscle from "../components/Card_Muscle";
import Card_Power from "../components/Card_Power";

import muscle_icon from "../assets/muscle_up.svg";
import lightning from "../assets/lightning.svg";
import delivery_icon from "../assets/delivery-icon.svg";
import anti_pills from "../assets/anti-pills.svg";
import protection from "../assets/protection.svg";

// Styles
import "../styles/useful-styles/useful_styles.css";

import { useTranslation } from "react-i18next";

const UsefulScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="useful-fin">
      <div className="useful-container">
        <div className="useful-heading-container">
          <h2
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-useful-heading"
                : "useful-heading"
            }
          >
            {t("useful-heading.key")}
          </h2>
          {/* <p
            className={
              i18n.resolvedLanguage == "kz" ? "kz-best-hormone" : "best-hormone"
            }
          >
            {t("best-hormone.key")}
          </p> */}
          <p
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-best-hormone-white"
                : "best-hormone-white"
            }
          >
            {t("best-hormone-white.key")}
          </p>
        </div>
        <section className="cards">
          <div className="card-one-li">
            <img className="muscle-up-icon" src={muscle_icon} />
            <p
              className={
                i18n.resolvedLanguage == "kz" ? "kz-paragraph" : "paragraph"
              }
            >
              {t("paragraph-one.key")}
            </p>
          </div>
          <div className="card-one-li">
            <img className="lightning-icon" src={lightning} alt="lightning" />
            <p
              className={
                i18n.resolvedLanguage == "kz" ? "kz-paragraph" : "paragraph"
              }
            >
              {t("paragraph-two.key")}
            </p>
          </div>
          <div className="card-one-li">
            <img
              className="protection-icon"
              src={protection}
              alt="protection"
            />
            <p
              className={
                i18n.resolvedLanguage == "kz" ? "kz-paragraph" : "paragraph"
              }
            >
              {t("paragraph-three.key")}
            </p>
          </div>
          <div className="card-one-li">
            <img className="anti-pills-icon" src={anti_pills} alt="pills" />
            <p
              className={
                i18n.resolvedLanguage == "kz" ? "kz-paragraph" : "paragraph"
              }
            >
              {t("paragraph-four.key")}
            </p>
          </div>
          <div className="card-one-li">
            <img className="delivery-icon" src={delivery_icon} alt="delivery" />
            <p
              className={
                i18n.resolvedLanguage == "kz" ? "kz-paragraph" : "paragraph"
              }
            >
              {t("paragraph-five.key")}
            </p>
          </div>
        </section>
        <div className="button-container">
          <p
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-qualified-product"
                : "qualified-product"
            }
          >
            {t("qualified-product.key")}
          </p>
          <a
            className={
              i18n.resolvedLanguage == "kz" ? "kz-main-button" : "main-button"
            }
            href="https://wa.me/77772886600"
            target="_blank"
          >
            {t("show-drug.key")}
          </a>
        </div>
      </div>
      <div className="useful-container-mob">
        <div className="useful-heading-container">
          <h2 className="useful-heading-mob">{t("useful-heading-card.key")}</h2>
          <span className="separator"></span>
        </div>
        <div className="cards-container">
          <Card_Muscle></Card_Muscle>
          <Card_Imm></Card_Imm>
          <Card_Power></Card_Power>
        </div>
        <a
          className={
            i18n.resolvedLanguage == "kz" ? "kz-main-button" : "main-button"
          }
          href="https://wa.me/77772886600"
          target="_blank"
        >
          {t("show-drug.key")}
        </a>
      </div>
    </div>
  );
};

export default UsefulScreen;
