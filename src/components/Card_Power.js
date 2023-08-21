import React from "react";
import { FaDumbbell } from "react-icons/fa";

import "../styles/cards-styles/cards_styles.css";

import { useTranslation } from "react-i18next";

const Card_Power = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="power-card">
      <div className="power-circle">
        <FaDumbbell className="dumbbell-icon" />
      </div>
      <h3 className="power-c-heading">{t("power-c-heading.key")}</h3>
      <p className="power-c-p">{t("power-c-p.key")}</p>
    </div>
  );
};

export default Card_Power;
