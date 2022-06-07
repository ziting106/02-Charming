import React from "react";
import Style from "./MySale.module.css";

function NoSale() {
  return (
    <div className={Style.nosale}>
      <p>沒有任何銷售紀錄</p>
    </div>
  );
}
export default NoSale;
