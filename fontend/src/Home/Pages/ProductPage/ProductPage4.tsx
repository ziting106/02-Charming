// 功能：取得單筆商品資料。Method: GET。URL: /api/product/:id
// 功能：加入購物車，Session productList(key) 買那些產品  / productID(key) 產品ID
// 按圖片會放大 且可以切換上(下)一張
// 顯示超過4張，右邊最後一張要加半黑濾鏡(+N)
// { useState, useEffect, useParams }
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoginNav from "../../Components/LoginNav/LoginNav";
import style from "./ProductPage.module.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

interface ProductPageProps {
  ID: number;
  product_name: string;
  author_name: string;
  product_copy: string;
  price: number;
  pic_path: string;
  sell_count: number;
  file_type: string;
  create_time: number;
}

const ProductPage: React.FC<ProductPageProps> = ({
  ID,
  product_name,
  author_name,
  product_copy,
  price,
  pic_path,
  sell_count,
  file_type,
  create_time,
}) => {
  const [productsDetail, setProducts] = useState<any>([]);
  const catchUserId = useParams();

  useEffect(() => {
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
    fetchProducts();
  }, []);

  console.log(productsDetail.pic_path[0]);
  const a = pic_path.split(" ");
  console.log(a);

  // didMount;

  return (
    <>
      <LoginNav />
      {/* 商品名稱 */}
      <section className={style.ProductPage}>
        <h3>{product_name}</h3>
        {/* 圖片放置區 */}

        <div className={style.displayFlex}>
          <div>
            <a href="">
              <img
                className={style.bigImg}
                src={require(`../../../../public/ProductImg/${a[0]}`)}
              />
            </a>
          </div>
          {/* <DetailPhoto/> */}
          <div className={style.littlePhoto}>
            {/* {a.map((r) => (
              <img
                key={r.a}
                className={style.smallImg}
                alt="robot"
                src={require(`../../Assets/ProductImg/${r}`)}
              />
            ))} */}
          </div>
        </div>
        {/*  刊登時間，檔案格式 */}

        <div className={style.updateTime}>
          <p>刊登時間：{create_time}</p>
          <p>檔案格式：{file_type}</p>
        </div>

        {/* 價格，數量，加入購物車按鈕，收藏按鈕 */}
        <div className={style.priceDiv}>
          <p className={style.price}>${price}</p>
          <div className={style.numberCount}>
            <p>購買數量</p>
            <button className={style.shoppingCar}>加入購物車</button>
            <button className={style.productAdd}>收藏商品</button>
          </div>
        </div>
        {/* 商品簡介 */}
        <article className={style.ProductText}>
          <div>商品介紹</div>
          <pre>{product_copy}</pre>
          <div>
            {/* 關於設計師 */}
            <div>關於設計師</div>
            <div className={style.displayFlex}>
              <div>img</div>
              <div className={style.displayFlex}>
                <div></div>
                <div>icon</div>
              </div>
              <button>聯絡設計師</button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
export default ProductPage;
