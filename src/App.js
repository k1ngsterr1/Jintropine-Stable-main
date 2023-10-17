import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Screens
import MainScreen from "./screens/MainScreen";

// Styles
import styles from "./styles/main-screen-styles/main_screen.css";
import AboutJinScreen from "./screens/AboutJinScreen";
import UsefulScreen from "./screens/UsefulScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer_Com from "./components/Footer_Com";
import "./styles/navigation-styles/navigation_styles.css";

// Language
import i18n from "./i18n";
import VerificationScreen from "./screens/VerificationScreen";
import DisclaimerScreen from "./screens/DisclaimerScreen";
import IndicationsScreen from "./screens/IndicationsScreen";
import CompositionScreen from "./screens/CompositionScreen";
import InstockScreen from "./screens/InstockScreen";
import VideoScreen from "./screens/VideoScreen";
import RealisationScreen from "./screens/RealisationScreen";
import DocumentsScreen from "./screens/DocumentsScreen";
import ContactScreen2 from "./screens/ContactScreen2";
import ReviewsScreen from "./screens/ReviewsScreen";

const App = () => {
  const [locale, setLocale] = useState(i18n.language);
  return (
    <div className="app">
      <MainScreen />
      <AboutJinScreen />
      <UsefulScreen />
      <ReviewsScreen />
      <ContactScreen2 />
      <DisclaimerScreen />
      <IndicationsScreen />
      <CompositionScreen />
      <InstockScreen />
      <VideoScreen />
      <RealisationScreen />
      <VerificationScreen />
      <ContactScreen />
      <DocumentsScreen />
      <Footer_Com />
    </div>
  );
};

export default App;
