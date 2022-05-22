import React from "react";
import Style from "./PhoneFooter.module.css";
import logo from "../../Assets/charming_logo.png";
function PhoneFooter() {
  return (
    <nav>
      <div className={Style.phoneFooter}>
        <a href="loginHome">
          <img src={logo} alt="logo" />
        </a>
        <a href="Portfolio">
          <p>柴米人</p>
        </a>
        <a href="Blog">
          <li>柴訊</li>
        </a>
        <a href="Communication">
          <li>柴社</li>
        </a>
      </div>
    </nav>
  );
}

export default PhoneFooter;
