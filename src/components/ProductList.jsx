/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../context/Context";
import "../style/productList.css";

const ProductList = () => {
  const { products, setMoney, money, basket, setBasket } =
    useContext(GlobalContext);

  const add = (item) => {
    setMoney(money - item.price);
    let newArray = [...basket];
    if (item.piece === 0) {
      item.piece++;
      newArray.push(item);
      setBasket(newArray);
    } else {
      item.piece++;
    }
  };
  const remove = (item) => {
    item.piece--;
    if (item.piece > 0) {
      setMoney(money + item.price);
    } else if (item.piece === 0) {
      setMoney(money + item.price);
      setBasket(basket.filter((i) => i.name !== item.name));
    }
  };

  const sellButtonActive = (name) => {
    let result = basket.find((i) => i.name === name);
    return result;
  };

  return (
    <div className="productList">
      {products.map((item) => (
        <div className="product">
          <img src={item.image} />
          <h3>{item.name}</h3>
          <h5>{item.price}$</h5>
          <div className="buttons">
            <button
              key={item.name}
              className={sellButtonActive(item.name) ? "on" : "false"}
              onClick={() => remove(item)}
            >
              Sell
            </button>
            <p>{item.piece}</p>
            <button className="buyButton" onClick={() => add(item)}>
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
