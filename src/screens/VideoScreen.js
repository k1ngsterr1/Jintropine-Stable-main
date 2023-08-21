import React from "react";

import styles from "../styles/video-styles/video_styles.css";

import { useTranslation, Trans } from "react-i18next";

const VideoScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="video-screen" id="video-screen">
      <div className="video-screen-container">
        <div className="video-screen-heading-container">
          <div
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-v-screen-heading"
                : "v-screen-heading"
            }
          >
            {t("helpful-video.key")}
          </div>
          <span className="separator"></span>
        </div>
        <div className="video-content">
          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/wp8LbVkBx1s"
          ></iframe>
          <div className="video-description">
            <div
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-v-description-h"
                  : "v-description-h"
              }
            >
              {t("helpful-video-box-heading.key")}
            </div>
            <p
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-v-description-p"
                  : "v-description-p"
              }
            >
              {t("v-description-p.key")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen;
