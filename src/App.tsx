import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { CreateAccount } from "./components/CreateAccount";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateAd } from "./components/CreateAd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/createAd" element={<CreateAd />} />
        {/* <CreateAccount /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
