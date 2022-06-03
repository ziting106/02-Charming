import React from "react";
import Style from "./Cart.module.css";
import picture from '././shopingCar.png'

function ComponentsName() {
  return (
    <div className={Style.emptyCart}>
      <div>
        <p>現在購物車空空</p>
        <p>來看看有什麼新興設計吧？</p>
        <a href="/Product/1">GO</a>
        {/* <img src={picture}></img> */}
      </div>
    </div>
  );
}

export default ComponentsName;
