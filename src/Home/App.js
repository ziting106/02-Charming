import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//component
import Footer from "./Home/Components/Footer/Footer";
//page
import LoginHome from "./Home/Pages/LoginHome/LoginHome";
import UnloginHome from "./Home/Pages/UnloginHome/UnloginHome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/UnloginHome" element={<UnloginHome />} />
        <Route path="/Login" element={<LoginHome />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/" element={<UnloginHome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
