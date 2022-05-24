import React from "react";
import Style from "./LoginHome.module.css";
// component
import LoginNav from "../../Components/LoginNav/LoginNav";
import Card from "../../Components/Card/Card";
import AsideProductLIst from "../../Components/AsideProductLIst/AsideProductLIst";
import MyProduct from "../../Components/Product/Product";
// react icon
import { AiTwotoneSound } from "react-icons/ai";

// data
import users from "../../Mockdata/users.json";
import { ImOpt } from "react-icons/im";

function LoginHome() {
  return (
    <header>
      <LoginNav />
      <hgroup>
        <p className={Style.carousel}>
          <AiTwotoneSound className={Style.icon} />
          <p className={Style.middleText}>
            指揮中心快訊：新增75例COVID-19確定病例，分別為2例本土及73例境外移入
          </p>
        </p>
      </hgroup>

      <section className={Style.productType}>
        <AsideProductLIst />
        <MyProduct />
      </section>
    </header>
  );
}

export default LoginHome;
