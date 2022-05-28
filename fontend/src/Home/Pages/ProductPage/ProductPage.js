// 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
// 功能：加入購物車，Session productList(key) 買那些產品  / productID(key) 產品ID
// 按圖片會放大 且可以切換上(下)一張
// 顯示超過4張，右邊最後一張要加半黑濾鏡(+N)

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailPhoto from "../../Components/DetailPhoto/DetailPhoto";
import LoginNav from "../../Components/LoginNav/LoginNav";
import style from "./ProductPage.module.css";

function ProductPage() {
  const [products, setProducts] = useState({
    pic_path: "",
  });

  // 連線檔
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
    setProducts(data[0]);
  };
  // console.log(products);
  // didMount
  useEffect(() => {
    fetchProducts();
  }, []);

  const a = products.pic_path.split(" ");
  console.log(a);

  return (
    <>
      <LoginNav />
      {/* 商品名稱 */}
      <section className={style.ProductPage}>
        {/* 圖片放置區 */}

        <div className={style.displayFlex}>
          <div className={style.displayFlex}>
            <a className="" href="d">
              <img
                className={style.bigImg}
                alt="robot"
                src={require(`../../Assets/ProductImg/${a[0]}`)}
              />
            </a>
            <div className={style.littlePhoto}>
              {a.map((r) => (
                <img
                  key={r.ID}
                  className={style.smallImg}
                  alt="robot"
                  src={require(`../../Assets/ProductImg/${r}`)}
                />
              ))}
            </div>
          </div>
          {/* <DetailPhoto/> */}
          {/* 價格，數量，加入購物車按鈕，收藏按鈕 */}
          <div className={style.priceDiv}>
            <h3>{products.product_name}</h3>
            <p className={style.price}>${products.price}</p>
            <div className={style.buyNumber}>
              <p className={style.title}>購買數量</p>
              <input
                id="thePrice"
                className={style.inputTextStyle}
                type="text"
                placeholder="請輸入商品數量"
                required
              ></input>
            </div>
            <div className={style.numberCount}>
              <button className={style.shoppingCar}>加入購物車</button>
              {/* 關於設計師 */}
              <div>關於設計師</div>
              <div className={style.displayFlex}>
                <div>img</div>
                <div className={style.displayFlex}>
                  <div></div>
                  <div>icon</div>
                </div>
                <button>關於設計師</button>
              </div>
            </div>
          </div>
        </div>
        {/*  刊登時間，檔案格式 */}

        <div className={style.updateTime}>
          <p>刊登時間：{products.create_time}</p>
          <p>檔案格式：{products.file_type}</p>
        </div>

        {/* 商品簡介 */}
        <article className={style.ProductText}>
          <div>商品介紹</div>
          <pre>{products.product_copy}</pre>
        </article>
      </section>
    </>
  );
}
export default ProductPage;
