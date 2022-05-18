import React from "react";
import Style from "./LoginHome.module.css";
import LoginNav from "../../components/loginNav/LoginNav";
import { AiTwotoneSound } from 'react-icons/ai'
import Card from "../../components/card/Card";
import users from "../../mockdata/users.json";

function LoginHome(){
  return (
    <header>
      <LoginNav />
      <div className={Style.pageMargin}>
        <div className={Style.carousel}>
          <AiTwotoneSound/>
          <p className={Style.middleText}>
            指揮中心快訊：新增75例COVID-19確定病例，分別為2例本土及73例境外移入
          </p>
        </div>
        <div>
          <ul className={Style.cardFlex}>
            {users.map((r)=>(
              <Card id={r.id} email={r.email} name={r.name}/>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default LoginHome;
