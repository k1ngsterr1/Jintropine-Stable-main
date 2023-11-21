import React from "react";
import axios from "axios";

import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";

// Styles
import "../styles/contact-styles/contact_styles.css";

import arrow from "../assets/contacts_arrow.svg";

// Popup
import Popup from "reactjs-popup";

// Assets

import emailjs from "@emailjs/browser";
import Card_Power from "../components/Card_Power";

import { useTranslation } from "react-i18next";

const ContactScreen2 = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const form = useRef();

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [mail, setMail] = useState("");

  // function handleClick() {
  //   setOpen((o) => !o);
  // }

  function sendEmail(e) {
    e.preventDefault();
    // setSent("sended");
    setFullName("");
    setPhoneNumber("");
    setCity("");
    setMail("");
    navigate("/thanks");
    setOpen((o) => !o);

    emailjs
      .sendForm(
        "service_y27icff",
        "template_evuaxxj",
        e.target,
        "bdkcSbsbst0EBRZfJ"
      )
      .then((res) => {
        console.log("Email sent successfully", res);
      })
      .catch((err) => console.log(err));
    sendFormDataAjax(e.target);
  }

  function sendFormDataAjax(formElement) {
    var formData = new FormData(formElement);
    var jsonObject = {};
    formData.forEach(function (value, key) {
      jsonObject[key] = value;
    });

    // Add the special 'AmoCRM' key to the JSON object
    jsonObject["Type:"] = "contact_with_us"; // Set your special value here

    console.log(formData, jsonObject, formElement);

    // Using Axios for the POST request
    axios
      .post(
        "https://amo-widgets.com/amo_projects_api_v4/jintropine/forms/jintropine.php",
        jsonObject,
        {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        }
      )
      .then(function (response) {
        console.log(
          "Form data sent successfully",
          response,
          formData,
          jsonObject
        );
      })
      .catch(function (error) {
        console.error("Error sending form data", error);
      });
  }

  return (
    <div className="contacts">
      <div className="contacts-container">
        <main className="contacts-main-content">
          <section className="contacts-content">
            <div
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-section-heading"
                  : "section-heading"
              }
            >
              {t("section-heading.key")}
            </div>
            <p
              className={
                i18n.resolvedLanguage == "kz"
                  ? "kz-section-paragraph"
                  : "section-paragraph"
              }
            >
              {t("section-paragraph.key")} {""}
              <a
                className="section-link"
                href="https://api.whatsapp.com/send/?phone=77772886600&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                WhatsApp
              </a>
            </p>
          </section>
          <form
            ref={form}
            className="form"
            id="contacts_form"
            onSubmit={sendEmail}
          >
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
              placeholder="Телефон | Phone"
              required={true}
            ></input>
            <input
              className="city-input"
              type="text"
              name="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Город | City | Қала"
              required={true}
            ></input>
            <input
              className="email-input"
              name="email"
              value={mail}
              type="email"
              onChange={(event) => setMail(event.target.value)}
              placeholder="E-mail"
              required={true}
            ></input>
            <button className="submit-button" value="Send">
              {t("form-button-two.key")}
            </button>
            <Popup
              open={open}
              closeOnDocumentClick
              onClose={closeModal}
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
              <div className="overlay"></div>
            </Popup>
          </form>
        </main>
        <img className="contact-arrow" src={arrow} alt="arrow"></img>
      </div>
    </div>
  );
};

export default ContactScreen2;
