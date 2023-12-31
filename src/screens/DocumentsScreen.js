import React from "react";
import { useTranslation, Trans } from "react-i18next";
// import Pdf from "../assets/Jintropine.pdf";
import documentScreenshot from "../assets/Document.png";
import documentScreenshotTwo from "../assets/Document2.png";
// import { Document, Page } from "react-pdf";
import { useNavigate } from "react-router-dom";
import styles from "../styles/document-styles/document_styles.css";

import document1 from "../pdf/document1.pdf";
import document2 from "../pdf/document2.pdf";

const DocumentsScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const navigate = useNavigate();

  return (
    <div className="document-screen" id="document-screen">
      <div className="document-container">
        <div className="document-screen-content">
          <div className="document-heading-container">
            <div className="document-heading">
              {t("official-documents.key")}
            </div>
            <span className="separator"></span>
          </div>
          <div className="documents">
            <img
              className="document-photo"
              src={documentScreenshot}
              alt="document"
              onClick={() => window.open(document1, "_blank")}
            ></img>
            <img
              className="document-photo-2"
              src={documentScreenshotTwo}
              alt="document"
              onClick={() => window.open(document2, "_blank")}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsScreen;
