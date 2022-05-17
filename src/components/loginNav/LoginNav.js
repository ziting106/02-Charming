import React from "react";
import style from "./LoginNav.module.css";
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsCloudy, BsFillBellFill } from 'react-icons/bs';
import { FaShoppingCart, FaAngleDown } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im'
import logo from "../../assets/charming_logo.png";


function LoginNav(props){
    return (
      //固定住nav在下移的時候不動
      <header className={style.sticky}>
        <nav className={style["mainPage-header"]}>
          {/* logo 與charming文字 */}
            <a href="loginHome" className={`${style.heading4} ${style.displayFlex}`}>
              <img className={style["mainPage-logo"]} src={logo} alt="logo" />
              <p className={style.padding5px}>柴米Charming</p>
            </a>

          <form className={style.searchBar}>
            <input
              className={style.searchInput}
              type="search"
              placeholder="Search.."
              onChange={(e) => {
                console.log(e);
              }}
            />
            <input className={style.searchButton} type="submit" value="搜尋"/>
            <a href="Product">
              <button className={style.searchButton}>
                <p>
                  <ImSearch className={style.padding5px}/>
                  搜尋
                </p>
              </button>
            </a>
          </form>
          <div>
            <ul className={style["mainPage-nav"]}>
              <li>
                <AiOutlineGlobal/>
                <select>

                  <option value="australia">繁體中文</option>
                  <option value="English">English</option>
                </select>
                <FaAngleDown/>
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
              <a href="ShoppingCar">
                <li>
                  <FaShoppingCart/>
                </li>
              </a>
              <a href="">
                <li>
                  <BsFillBellFill/>
                </li>
              </a>
              <li>
                <button className={style.userButton}>
                  <img
                    className={style["mainPage-logo"]}
                    src={logo}
                    alt="logo"
                  />
                </button>
              </li>
            </ul>
            <div
              className={style.navList}>
              <button>會員資料修改</button>
              <button>會員資料修改</button>
              <button>會員資料修改</button>
              <button>會員資料修改</button>
            </div>
          </div>
        </nav>
        <hr className={style.itemLine} />
        <ul className={`${style.itemList} ${style.heading5}`}>
          <a href="">
            <li>項目類別</li>
          </a>
          <a href="">
            <li>項目類別</li>
          </a>
          <a href="">
            <li>項目類別</li>
          </a>
          <a href="">
            <li>項目類別</li>
          </a>
          <a href="">
            <li>項目類別</li>
          </a>
          <a href="">
            <li>項目類別</li>
          </a>
        </ul>
        <hr className={style.itemLine} />
      </header>
    );
  }
export default LoginNav;
