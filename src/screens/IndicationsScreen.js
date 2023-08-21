import React from "react";

import { useState } from "react";

import styles from "../styles/indications-styles/indications_styles.css";

import { FiCheckCircle } from "react-icons/fi";

import { useTranslation, Trans } from "react-i18next";

const IndicationsScreen = () => {
  const [indicationOn, setIndicatiOn] = useState(true);
  const [protivIndicationOn, setProtivIndicationOn] = useState(false);

  const { t, i18n } = useTranslation();

  function Card(props) {
    return (
      <div className="card-content">
        <div className="card-heading-container">
          <FiCheckCircle className="icon-check" />
          <div
            className={
              i18n.resolvedLanguage == "kz" ? "kz-card-header" : "card-header"
            }
          >
            {props.heading}
          </div>
        </div>
        <p
          className={
            i18n.resolvedLanguage == "kz"
              ? "kz-card-paragraph"
              : "card-paragraph"
          }
        >
          {props.description}
        </p>
      </div>
    );
  }

  return (
    <div className="indication-screen" id="indication-screen">
      <div className="indication-container">
        <div className="indication-heading-container">
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-indication-heading"
                : "indication-heading"
            }
          >
            {t("indications.key")}
          </div>
          <span className="separator"></span>
        </div>
        <div className="button-indication">
          <button
            className={
              indicationOn
                ? "protiv-indication-not"
                : "protiv-indication-choosen"
            }
            onClick={() => setIndicatiOn(!indicationOn)}
          >
            {t("protiv-indication-button.key")}
          </button>
          <button
            className={
              indicationOn
                ? "indication-button-choosen"
                : "indication-button-not"
            }
            onClick={() => setIndicatiOn(true)}
          >
            {t("indication-button.key")}
          </button>
        </div>
        <div className="cards-indication">
          <Card
            view={"icon"}
            heading={
              indicationOn
                ? t("first-card-heading.key")
                : t("p-first-card-heading.key")
            }
            description={
              indicationOn
                ? t("first-card-paragraph.key")
                : t("p-first-card-paragraph.key")
            }
          ></Card>
          <Card
            view={"icon"}
            heading={
              indicationOn
                ? t("second-card-heading.key")
                : t("p-second-card-heading.key")
            }
            description={
              indicationOn
                ? t("second-card-paragraph.key")
                : t("p-second-card-paragraph.key")
            }
          ></Card>
          <Card
            view={"icon"}
            heading={
              indicationOn
                ? t("third-card-heading.key")
                : t("p-third-card-heading.key")
            }
            description={
              indicationOn
                ? t("third-card-paragraph.key")
                : t("p-third-card-paragraph.key")
            }
          ></Card>
        </div>
        <div className="medical-indication">
          <p
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-medical-ind-text"
                : "medical-ind-text"
            }
          >
            {t("instruction-text.key")}
          </p>
          <a
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-medical-ind-link"
                : "medical-ind-link"
            }
            blank_
            target="_blank"
            href="https://instruction.tiiny.site/"
          >
            {t("instruction.key")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndicationsScreen;
