import React from "react";
import { FaWeight, FaWeightHanging } from "react-icons/fa";

import "../styles/cards-styles/cards_styles.css";
import { useTranslation } from "react-i18next";

const Card_Muscle = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="muscle-card">
      <div className="muscle-circle">
        <FaWeightHanging className="weight-icon"></FaWeightHanging>
      </div>
      <h3 className="muscle-c-heading">{t("muscle-growth.key")}</h3>
      <p className="muscle-c-p">{t("muscle-c-p.key")}</p>
    </div>
  );
};

export default Card_Muscle;
