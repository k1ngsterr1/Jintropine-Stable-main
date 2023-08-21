import React from "react";

import styles from "../styles/composition-styles/composition_styles.css";
import line_icon from "../assets/line_icon.svg";
import line_icon_white from "../assets/line_icon_white.svg";

import { useTranslation, Trans } from "react-i18next";

const CompositionScreen = () => {
  const { t, i18n } = useTranslation();

  function Composition_Card(props) {
    return (
      <div className="composition-card-content">
        <div className="card-heading-container">
          <img className="card-icon" src={line_icon} alt="line"></img>
          <h3
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-card-composition-header"
                : "card-composition-header"
            }
          >
            {props.heading}
          </h3>
        </div>
        <p
          className={
            i18n.resolvedLanguage == "kz"
              ? "kz-card-composition-paragraph"
              : "card-composition-paragraph"
          }
        >
          {props.description}
        </p>
      </div>
    );
  }

  function Composition_Card_Long(props) {
    return (
      <div className="composition-card-content-l">
        <div className="card-heading-container-l">
          <img className="card-icon" src={line_icon}></img>
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-card-composition-header-l"
                : "card-composition-header-l"
            }
          >
            {props.heading}
          </div>
        </div>
        <p
          className={
            i18n.resolvedLanguage == "kz"
              ? "kz-card-composition-paragraph-l"
              : "card-composition-paragraph-l"
          }
        >
          {props.description}
        </p>
        <p
          className={
            i18n.resolvedLanguage == "kz" ? "kz-bold-text" : "bold-text"
          }
        >
          {props.bold}
        </p>
      </div>
    );
  }

  function Composition_Card_Long_Blue(props) {
    return (
      <div className="composition-card-content-l-bl">
        <div className="card-heading-container-l-bl">
          <img className="card-icon" src={line_icon_white}></img>
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-card-composition-header-l-bl"
                : "card-composition-header-l-bl"
            }
          >
            {props.heading}
          </div>
        </div>
        <p className="card-composition-paragraph-l-bl">{props.description}</p>
      </div>
    );
  }

  return (
    <div className="composition-screen" id="composition-screen">
      <div className="composition-container">
        <div className="heading-container">
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-composition-heading"
                : "composition-heading"
            }
          >
            {t("composition-heading.key")}
          </div>
          <span className="separator"></span>
        </div>
        <div className="composition-card-container">
          <div className="column-one">
            <Composition_Card
              heading={t("active-substance.key")}
              description={t("active-substance-text.key")}
            />
            <Composition_Card
              heading={t("helpful-substances.key")}
              description={t("helpful-substances-text.key")}
            />
          </div>
          <div className="column-two">
            <Composition_Card
              heading={t("card-description-heading.key")}
              description={t("card-description-text.key")}
            />
            <Composition_Card
              heading={t("drug-properties.key")}
              description={t("drug-properties-text.key")}
            />
          </div>
          <div className="row-one">
            <Composition_Card_Long
              heading={t("storage-conditions.key")}
              description={t("storage-conditions-text.key")}
              bold={t("storage-bold-text.key")}
            ></Composition_Card_Long>
          </div>
          <div className="row-two">
            <Composition_Card_Long_Blue
              heading={t("recommendations-heading.key")}
              description={t("recommendations-description.key")}
            ></Composition_Card_Long_Blue>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositionScreen;
