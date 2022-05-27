import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./DetailPhoto.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

interface CardProps {
  ID: number;
  pic_path: string;
}

const DetailPhoto: React.FC<CardProps> = ({ ID, pic_path }) => {
  const catchUserId = useParams();
  const fetchProducts = async () => {
    //向遠端伺服器get資料 http://localhost:3000/Sales/api/product?id=1
    const response = await fetch(
      //取單一商品資料
      `http://localhost:3000/Sales/api/product/${catchUserId.UserId}/${catchUserId.ProductID}`
    );
    const data = await response.json();
    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    // fetchProducts(data[0]);
  };
  const a = pic_path.split(" ");

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {a.map((r) => (
        <img
          className={Styles.smallImg}
          alt="robot"
          src={require(`../../Assets/ProductImg/${r}`)}
        />
      ))}
    </div>
  );
};
export default DetailPhoto; //導出組件
