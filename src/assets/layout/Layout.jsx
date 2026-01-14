import React from "react";
import { Routes, Route } from "react-router-dom";
import NewHead from "../components/NewHead";
import NewFoot from "../components/NewFoot";
import LandingPage from "../pages/LandingPage";
import Auth from "../pages/Auth";
import AboutUs from "../pages/AboutUs";
import NewApplicationWizard from "../pages/NewApplicationWizard";
import NewsNotice from "../pages/NewsNotice";
import FAQ from "../pages/FAQ";

function Layout() {
  return (
    <>
      <NewHead />

        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/newapp" element={<NewApplicationWizard />} />
          <Route path="/news" element={<NewsNotice />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

      <NewFoot />
    </>
  );
}

export default Layout;
