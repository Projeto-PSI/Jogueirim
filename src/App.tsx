import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { CreateAccount } from "./components/CreateAccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateAd } from "./components/CreateAd";
import { ShowAds } from "./components/ShowAds";
import { AdCard } from "./components/AdCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/createAd" element={<CreateAd />} />
        <Route path="/showAds" element={<ShowAds />} />
        {/* <Route path="/adCard" element={<AdCard />} /> */}
        {/* <CreateAccount /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
