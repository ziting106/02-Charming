import React from "react";
import style from "./LoginHome.module.css";
import LoginNav from "../components/loginNav/LoginNav";
import { AiTwotoneSound } from 'react-icons/ai'

function LoginHome(){
  return (
    <header>
      <LoginNav />
      <div className={style.pageMargin}>
        <div className={style.carousel}>
          <AiTwotoneSound/>
          <p className={style.middleText}>
            指揮中心快訊：新增75例COVID-19確定病例，分別為2例本土及73例境外移入
          </p>
        </div>
        <div>{/* <Card /> */}</div>
      </div>
    </header>
  );
};

export default LoginHome;
