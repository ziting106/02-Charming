import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductDetailPhoto.module.css";
import DetailPhoto from "../DetailPhoto/DetailPhoto";

function ComponentsName() {
  const [products, setProducts] = useState([]);
  const catchUserId = useParams();
  // console.log(catchUserId.UserId)
  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3000/Sales/api/product?id=1
    const response = await fetch(
      `http://localhost:3000/Sales/api/product/${catchUserId.UserId}/${catchUserId.ProductID}`
    );
    const data = await response.json();
    //測試
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setProducts(data[0]);
    // console.log(products[0])
  };

  // didMount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <img
        className={style.bigImg}
        alt=""
        src={`../../../../public/ProductImg/logo1-1.jpeg`}
      />
      <div>
        {/* {products.map((r) => (
          <DetailPhoto
            key={r.ID}
            className={style.smallImg}
            pic_path={r.pic_path}
          />
        ))} */}
      </div>
    </div>
  );
}
export default ComponentsName;
