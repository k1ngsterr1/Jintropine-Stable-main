import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import TagManager from "react-gtm-module";

// Screens
import MainScreen from "./screens/MainScreen";

// Fonts
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "rc-dropdown/assets/index.css";

// Styles
import "./styles/navigation-styles/navigation_styles.css";

// React GA
import ReactGA from "react-ga";

// Languages
import "./i18n";
import MoreInfo from "./pages/MoreInfo";
import Thanks from "./pages/Thanks";

const TRACKING_ID = "UA-262477863-1";
ReactGA.initialize(TRACKING_ID);

const tagManagerArgs = {
  gtmId: "GTM-TVQ8R8C",
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/information" element={<MoreInfo />}></Route>
          <Route path="/thanks" element={<Thanks />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
