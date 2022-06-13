import { Link } from 'react-router-dom'
import style from './User.module.css'
import LoginNav from '../../../Home/Components/LoginNav/LoginNav'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Footer from '../../Components/Footer/Footer'
import OrderList from '../../../Sales/Pages/Order/OrderList'

function MyShoppingList() {
  return (
    <>
      <LoginNav />
      {/* 上方選單 */}
      <nav className={style.navLeft}>
        <Link to="/account" className={`${style.unactive} ${style.link}`}>
          會員中心 <hr />
        </Link>
        <Link
          to="/shoppinglist?page=1"
          className={`${style.active} ${style.link}`}
        >
          購買清單 <hr />
        </Link>
        <Link
          to="/collection?page=1"
          className={`${style.unactive} ${style.link}`}
        >
          我的收藏 <hr />
          {/* user 追蹤的文章 */}
        </Link>
      </nav>

      {/* 右側內文 */}
      <main className={style.main}>
        <OrderList />
      </main>
    </>
  )
}

export default MyShoppingList
