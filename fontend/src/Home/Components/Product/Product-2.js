// 功能：取得全部商品資料。Method: GET。URL: /api/product
// Where -> 產品名稱 & 使用者
// 計算筆數 => Json轉陣列
// 功能：刪除商品。Method: DELETE。URL: /api/product/:id
import React from "react";
import Style from "./Product.module.css";
import Card from "../Card/Card-2";
import users from "../../Mockdata/users.json";

function MyProduct() {
  return (
    <>
      <div className={Style.arrangement}>
        <ul className={Style.cardFlex}>
            {users.map((r,i) => (
              <div>
              <Card key={r.id} id={r.id} email={r.email} name={r.name} price={r.price}/>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}
export default MyProduct;
