/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import "../style/productList.css";

const ProductList = () => {
  const { products, setMoney, money, basket, setBasket } =
    useContext(GlobalContext);

  const add = (item) => {
    setMoney(money - item.price);
    const newArray = [...basket];
    newArray.push(item);
    setBasket(newArray);
  };
  const remove = (item) => {
    setMoney(money + item.price);
    setBasket(basket.filter((i) => i.name !== item.name));
  };
  console.log(basket);
  return (
    <div className="productList">
      {products.map((item) => (
        <div className="product">
          <img src={item.image} />
          <h3>{item.name}</h3>
          <h5>{item.price}</h5>
          <div className="buttons">
            <button onClick={() => remove(item)}>-</button>
            <p>0</p>
            <button onClick={() => add(item)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
