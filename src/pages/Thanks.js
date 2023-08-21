import React from "react";

import styles from "../styles/thanks-styles/thanks.css";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Thanks = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  return (
    <div className="thanks-page">
      <div className="thanks-container">
        <div className="thanks-text-container">
          <h1 className="thanks-heading">{t("thanks.key")}</h1>
          <p className="thanks-paragraph">{t("popup-paragraph.key")}</p>
        </div>
        <button className="thanks-button" onClick={() => navigate("/")}>
          {t("thanks-button.key")}
        </button>
      </div>
    </div>
  );
};

export default Thanks;
