import React from "react";

// Components
import Navigation from "../components/Navigation_Com";
import Navigation_Com_Two from "../components/Navigation_Com_Two";

// Styles
import styles from "../styles/main-screen-styles/main_screen.css";

// Assets
import photo from "../assets/main-man.png";
import arrow from "../assets/main_arrow.svg";
import phoneMan from "../assets/main-man-phone.png";

import muscle_icon from "../assets/muscle_up.svg";
import lightning from "../assets/lightning.svg";
import delivery_icon from "../assets/delivery-icon.svg";
import anti_pills from "../assets/anti-pills.svg";
import protection from "../assets/protection.svg";

// Icons
import { FaTelegramPlane } from "react-icons/fa";

// Fonts
import { Link } from "react-scroll";

// Icons
import { FaPhone } from "react-icons/fa";

// Translation
import { useTranslation, Trans } from "react-i18next";

// Popup
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

// Hooks
import { useState } from "react";
import { useRef } from "react";

// Email JS
import emailjs from "@emailjs/browser";
import { Bounce } from "react-reveal";

const MainScreen = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [windowOpen, setWindowOpen] = useState(false);
  const closeWindow = () => setWindowOpen(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const form = useRef();

  function handleClick() {
    setOpen((o) => !o);
  }

  function sendEmail(e) {
    e.preventDefault();
    setPhoneNumber("");
    setOpen((o) => !o);
    navigate("/thanks");
    // setWindowOpen((o) => !o);

    emailjs
      .sendForm(
        "service_y27icff",
        "template_3q3j8fn",
        e.target,
        "bdkcSbsbst0EBRZfJ"
      )
      .then((res) => {})
      .catch((err) => console.log(err));
    sendFormDataAjax(e.target);
  }

  function sendFormDataAjax(formElement) {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://amo-widgets.com/amo_projects_api_v4/jintropine/forms/jintropine.php",
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json"); // Set the content type to JSON

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Form data sent successfully", xhr.responseText);
      } else {
        console.error("Error sending form data", xhr.status, xhr.statusText);
      }
    };

    xhr.onerror = function () {
      console.error("Network error occurred during the form data send.");
    };

    // Convert form data to a JSON object
    var formData = new FormData(formElement);
    var jsonObject = {};
    formData.forEach(function (value, key) {
      jsonObject[key] = value;
    });

    // Add the special 'AmoCRM' key to the JSON object
    jsonObject["Type:"] = "Обратный звонок"; // Set your special value here

    var json = JSON.stringify(jsonObject);

    xhr.send(json); // Send JSON data
  }

  return (
    <main className="main-screen" id="main-screen">
      <Navigation></Navigation>
      <div className="container">
        <div className="main-content">
          <h1
            className={
              i18n.resolvedLanguage == "kz" ? "kz-main-heading" : "main-heading"
            }
          >
            {t("main-heading.key")}{" "}
            <span className="hormone">{t("hormone.key")}</span>
          </h1>
          <p
            className={
              i18n.resolvedLanguage == "kz" ? "kz-description" : "description"
            }
          >
            {t("description.key")}
          </p>
          <p
            className={
              i18n.resolvedLanguage == "kz" ? "kz-description" : "description"
            }
          >
            {t("description-2.key")}
          </p>
          <div className="buttons">
            <a
              className={
                i18n.resolvedLanguage == "kz" ? "kz-main-button" : "main-button"
              }
              href="https://api.whatsapp.com/send?phone=77772886600&text=Здравствуйте! Хочу узнать подробнее про Джинтропин"
              target="_blank"
            >
              {t("form-button-two.key")}{" "}
            </a>
          </div>
        </div>
        <img
          className="proto-photo"
          src={photo}
          alt="mains_screen_photo"
          width={"clamp(533.5px,55.572916666666664vw,2134px)"}
          height={"clamp(385px,40.104166666666664vw,1540px)"}
        ></img>
        <img
          className="proto-photo-phone"
          src={phoneMan}
          alt="mains_screen_photo_phone"
        ></img>
      </div>
      <div className="container-mobile">
        <div className="useful-container">
          <div className="useful-heading-container">
            <h2 className="useful-heading">{t("main-heading.key")}</h2>
            <p
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-best-hormone"
                  : "best-hormone"
              }
            >
              {t("best-hormone.key")}
            </p>
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
              <img className="lightning-icon" src={lightning} />
              <p
                className={
                  i18n.resolvedLanguage == "kz" ? "kz-paragraph" : "paragraph"
                }
              >
                {t("paragraph-two.key")}
              </p>
            </div>
            <div className="card-one-li">
              <img className="protection-icon" src={protection} />
              <p
                className={
                  i18n.resolvedLanguage == "kz" ? "kz-paragraph" : "paragraph"
                }
              >
                {t("paragraph-three.key")}
              </p>
            </div>
            <div className="card-one-li">
              <img className="anti-pills-icon" src={anti_pills} />
              <p
                className={
                  i18n.resolvedLanguage == "kz" ? "kz-paragraph" : "paragraph"
                }
              >
                {t("paragraph-four.key")}
              </p>
            </div>
            <div className="card-one-li">
              <img className="delivery-icon" src={delivery_icon} />
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
              className="main-button"
              href="https://wa.me/message/R6FI7B4Q4BZSJ1"
              target="_blank"
            >
              {t("show-drug.key")}
            </a>
          </div>
        </div>
      </div>
      <img src={arrow} className="arrow-blue" alt="arrow"></img>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} modal nested>
        <div className="number-modal">
          <h4
            className={
              i18n.resolvedLanguage == "kz"
                ? "kz-modal-heading"
                : "modal-heading"
            }
          >
            {t("order-call.key")}
          </h4>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <input
              className="name-input"
              type="text"
              name="name"
              placeholder="Имя | Name | Аты"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required={true}
            ></input>
            <input
              className="phone-input"
              type="tel"
              name="phone"
              minLength="10"
              maxLength="12"
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
              placeholder="+7 777 77 77"
              required={true}
            ></input>
            <button className="send-number-button">
              {t("order-call.key")}
            </button>
            <p
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-number-paragraph"
                  : "number-paragraph"
              }
            >
              {t("number-paragraph.key")}
            </p>
            <a className="phone-number" href="tel:+77772886600">
              +7 777 288 6600
            </a>
          </form>
        </div>
      </Popup>
      <Bounce delay={5000}>
        <a className="phone-circle" onClick={handleClick}>
          <FaPhone className="phone"></FaPhone>
        </a>
      </Bounce>
      <Popup
        open={windowOpen}
        closeOnDocumentClick
        onClose={closeWindow}
        modal
        nested
      >
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <h2 className="popup-heading">{t("popup-heading.key")}</h2>
          <p className="popup-paragraph">{t("popup-paragraph.key")}</p>
        </div>
      </Popup>
    </main>
  );
};

export default MainScreen;
