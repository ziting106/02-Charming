import React from "react";
import Style from "./EditCard.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface RobotProps {
  id: number;
  name: string;
  email: string;
  price: number;
}
const Card: React.FC<RobotProps> = ({ id, name, email, price }) => {
  return (
    <div className={Style.cardContainer}>
      <div className={Style.cardSize}>
        <img alt="robot" src={`https://robohash.org/${id}`} />
        <FcLikePlaceholder className={Style.like} />
        <h2>{name}</h2>
        <p>{email}</p>
        <div className={Style.price}>
          <h3>${price}</h3>
          <div>
            <a href="">
              <FaTrashAlt className={Style.icons} />
            </a>
            <a href="/EditProduct">
              <FaEdit className={Style.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card; //導出組件
