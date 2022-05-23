import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//component
import Footer from "./Home/Components/Footer/Footer";
import PhoneFooter from "./Home/Components/PhoneFooter/PhoneFooter";
//page
import LoginHome from "./Home/Pages/LoginHome/LoginHome";
import UnloginHome from "./Home/Pages/UnloginHome/UnloginHome";
import MyProduct from "./Home/Pages/MyProduct/MyProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/UnloginHome" element={<UnloginHome />} />
        <Route path="/Login" element={<LoginHome />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/MyProduct" element={<MyProduct />} />
        <Route path="/" element={<UnloginHome />} />
      </Routes>
      <Footer />
      <PhoneFooter />
    </div>
  );
}

export default App;
