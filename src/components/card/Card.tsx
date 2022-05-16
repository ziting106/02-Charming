import React from "react";
import Styles from "./Card.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

//用props來傳遞組件間的數據。FC = functional components表示函數式組件的接口
const Card: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={Styles.cardContainer}>
      <li>
        <img
          alt="users"
          src={`https://jsonplaceholder.typicode.com/photos/${id}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </li>
    </div>
  );
};
export default Card; //導出組件
