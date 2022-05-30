import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./DetailPhoto.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

interface CardProps {
  ID: number;
  pic_path: string;
}

const DetailPhoto: React.FC<CardProps> = ({ ID, pic_path }) => {
  const a = pic_path.split(" ");

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
