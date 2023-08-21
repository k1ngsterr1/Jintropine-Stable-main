import React from "react";
import { FaHeart } from "react-icons/fa";

import "../styles/cards-styles/cards_styles.css";
import { useTranslation } from "react-i18next";

const Card_Imm = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="imm-card">
      <div className="imm-circle">
        <FaHeart className="heart-icon"></FaHeart>
      </div>
      <h3
        className={
          i18n.resolvedLanguage == "kz" ? "kz-imm-c-heading" : "imm-c-heading"
        }
      >
        {t("imm-c-heading.key")}
      </h3>
      <p className="imm-c-p">{t("imm-c-p.key")}</p>
    </div>
  );
};

export default Card_Imm;
