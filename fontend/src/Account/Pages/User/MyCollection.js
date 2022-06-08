import { Link } from "react-router-dom";
import style from "./User.module.css";
import LoginNav from "../../../Home/Components/LoginNav/LoginNav";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import MyLoveProduct from "../../../Home/Components/MyLikeProduct/MyLikeProduct";
import MyCollectionButton from "../../Components/MyCollectionButton/MyCollectionButton"


function MyCollection() {
  return (
    <>
      <LoginNav />
      <BreadCrumb />
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/account" className={style.unactive}>
          會員中心 <hr />
        </Link>
        <Link to="/shoppinglist" className={style.unactive}>
          購買清單 <hr />
        </Link>
        <Link to="/collection" className={style.active}>
          我的收藏 <hr />
        </Link>
      </nav>
      {/* 右側內文 */}
      <section className={style.dispalyFlex}>
      <MyCollectionButton/>
      <main className={style.main}>
        <MyLoveProduct />
      </main>

      </section>
    </>
  );
}

export default MyCollection;
