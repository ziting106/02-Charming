import React from "react";
import style from "./UnloginNav.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/charming_logo.png";
library.add(fas);

function UnloginNav(props){
  return (
    <header className={style.sticky}>
      <nav className={`${style["mainPage-header"]} ${style.pageMargin}`}>
        <div className={style.displayFlex}>
          <a href="UnloginHome" className={`${style.heading4} ${style.displayFlex}`}>
            <img className={style["mainPage-logo"]} src={logo} alt="logo" />
            <p className={style.padding5px}>柴米Charming</p>
          </a>
        </div>
        <div className={style.searchbar}>
          <input
            className={style.searchInput}
            type="search"
            placeholder="Search.."
            onChange={(e) => {
              console.log(e);
            }}
          />
          <button
            onClick={alert["visualViewpo1"]}
            className={style.searchButton}
          >
            <p>
              <FontAwesomeIcon
                className={style.padding5px}
                icon="fa-solid fa-magnifying-glass"
              />
              搜尋
            </p>
          </button>
        </div>
        <div>
          <ul className={style["mainPage-nav"]}>
            <li>
                <FontAwesomeIcon
                  className={style.padding5px}
                  icon="fa-solid fa-earth-asia"
                />
                <select>
                  <option value="australia">繁體中文</option>
                  <option value="English">English</option>
                </select>
                <FontAwesomeIcon
                  className={style.padding5px}
                  icon="fa-solid fa-angle-down"
                />
              </li>
            <a href="Portfolio">
              <li>柴米人</li>
            </a>
            <a href="Blog">
              <li>柴訊</li>
            </a>
            <a href="Communication">
              <li>柴社</li>
            </a>
            <a href="Login">
              <button>登入</button>
            </a>
            <a href="">
              <button>註冊</button>
            </a>
          </ul>
        </div>
      </nav>
     <hr className={style.itemline}/>
      <ul className={`${style.itemList} ${style.heading5}`}>
        <a href=""><li>項目類別</li></a>
        <a href=""><li>項目類別</li></a>
        <a href=""><li>項目類別</li></a>
        <a href=""><li>項目類別</li></a>
        <a href=""><li>項目類別</li></a>
        <a href=""><li>項目類別</li></a>
      </ul>
        <hr className={style.itemline}/>
    </header>
  );
};
export default UnloginNav;
