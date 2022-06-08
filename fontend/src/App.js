import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom'
// import React, { useState } from 'react'

//component
import Footer from "./Home/Components/Footer/Footer";
import PhoneFooter from "./Home/Components/PhoneFooter/PhoneFooter";
import Product from "./Home/Components/Product/Product";

//首頁
import LoginHome from "./Home/Pages/LoginHome/LoginHome";
import UnloginHome from "./Home/Pages/UnloginHome/UnloginHome";
import MyProduct from "./Home/Pages/MyProduct/MyProduct";
import EditProductPage from "./Home/Pages/EditProductPage/EditProductPage";
import AddProduct from "./Home/Pages/AddProduct/AddProduct";
import ProductPage from "./Home/Pages/ProductPage/ProductPage";
import ProductPageEditButton from "./Home/Pages/ProductPageEditButton/ProductPageEditButton";
import MyLikeProduct from "./Home/Components/MyLikeProduct/MyLikeProduct"
// import ProductPage2 from "./Home/Pages/ProductPage/ProductPage4"

//會員
//Pages
import SignInIdentify from './Account/Pages/SignInIdentify/SignInIdentify'
import SignInRecover from './Account/Pages/SignInRecover/SignInRecover'
import SignUp from './Account/Pages/SignUp/SignUp'
import SignIn from './Account/Pages/SignIn/SignIn'

//Pages user
import MyShoppingList from './Account/Pages/User/MyShoppingList'
import MyCollection from './Account/Pages/User/MyCollection'
import MyAccount from './Account/Pages/User/MyAccount'

//購物車頁
import Cart1 from "./Sales/Pages/Cart/Cart1";
import Cart2 from "./Sales/Pages/Cart/Cart2";
import Cart3 from "./Sales/Pages/Cart/Cart3";
import Cart4 from "./Sales/Pages/Cart/Cart4";
import MySale from "./Sales/Pages/Order/MySale";
import Order from "./Sales/Pages/Order/Order";
import OrderList from "./Sales/Pages/Order/OrderList";
import { ImOpt } from "react-icons/im";

//討論區

function App() {
  document.title = `Charming`;
  return (
    <div>
      <Routes>
        {/* --------首頁------- */}
        <Route path="/" element={<UnloginHome />} />
        {/* 商品總覽頁 */}
        {/* http://localhost:3000/Product?id=1&page=1&order=sell_count&sort=desc */}
        <Route path="/Product" element={<LoginHome />} />
        {/* http://localhost:3000/Product/1/13 */}
        <Route path="/Product/:UserId/:ProductID" element={<ProductPage />} />
        {/* http://localhost:3000/Product/13 */}
        <Route path="/Product/:ProductID" element={<ProductPage />} />
        {/* http://localhost:3000/MyProduct?id=1&page=1 */}
        <Route path="/MyProduct" element={<MyProduct />} />
        {/* http://localhost:3000/MyProduct/1/19 */}
        <Route
          path="/MyProduct/:UserId/:ProductID"
          element={<ProductPageEditButton />}
        />
        <Route
          path="/MyProduct/Edit/:UserId/:ProductID"
          element={<EditProductPage />}
        />
        <Route path="/MyProduct/AddProduct" element={<AddProduct />} />
        {/* --------商品頁面-------- */}
        <Route path="Sales/Cart1" element={<Cart1 />} />
        <Route path="Sales/Cart2" element={<Cart2 />} />
        <Route path="Sales/Cart3" element={<Cart3 />} />
        <Route path="Sales/Cart4" element={<Cart4 />} />
        {/* 銷售記錄*/}
        <Route path="BtocPage/MySale" element={<MySale />} />
        {/* 購買清單*/}
        <Route path="BtobPage/Order/:id" element={<Order />} />
        {/* 購買清單細項*/}
        <Route path="BtobPage/Order" element={<OrderList />} />
        {/* 我的蒐藏->商品頁 */}

        {/* --------註冊及登入----- */}
        {/* 忘記密碼 */}
        <Route path="/signin/identify" element={<SignInIdentify />} />
        <Route path="/signin/recover" element={<SignInRecover />} />
        {/* 註冊 */}
        <Route path="/signup" element={<SignUp />} />
        {/* 登入 */}
        <Route path="/signin" element={<SignIn />} />
        {/* -------user 登入後頁面------- */}
        <Route path="/shoppinglist" element={<MyShoppingList />} />
        <Route path="/collection" element={<MyCollection />} />
        <Route path="/collection/MyLikeProduct" element={<MyLikeProduct />} />
        <Route path="/account" element={<MyAccount />} />

        {/* 部落格 */}
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/article/:id" element={<Article />} />
        <Route path="/blog/search/:category" element={<Search />} /> */}
      </Routes>
      <Footer />
      <PhoneFooter />
    </div>
  );
}

export default App;
