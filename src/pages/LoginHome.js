import React from "react";
import style from "./LoginHome.module.css";
import LoginNav from "../components/loginNav/LoginNav";
// import Card from "../components";
import users from "../../mockdata/users.json";

function LoginHome(){
  return (
    <div>
      <LoginNav />
      <div className={style.pageMargin}>
        <div className={style.carousel}>
          {/* <FontAwesomeIcon
            className={style.padding5px}
            icon="fa-solid fa-volume-high"
          /> */}
          <p className={style.middleText}>
            指揮中心快訊：新增75例COVID-19確定病例，分別為2例本土及73例境外移入
          </p>
        </div>
        <div>{/* <Card /> */}</div>
      </div>
    </div>
  );
};

export default LoginHome;
