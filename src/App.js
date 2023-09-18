import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Layout from "./component/Layout/Layout";
import Calculator from "./component/Calculator/Calculator";
import GradientButton from "./component/GradiantButton/GradientButton";

function App() {
  return (
    <div className="app">
      <div className="title">
        <h1>Calculator</h1>
      </div>
      <div className="app-body">
        {/* <GradientButton name={"Start"} /> */}
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="body-bg"></div>
    </div>
  );
}

export default App;
