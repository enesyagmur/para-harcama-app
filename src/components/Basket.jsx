/* eslint-disable jsx-a11y/heading-has-content */
import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import "../style/basket.css";

const Basket = () => {
  const { basket, setBasket } = useContext(GlobalContext);
  return (
    <div className="basket">
      {basket ? (
        basket.map((item) => (
          <div className="basketProduct">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.piece}</p>
          </div>
        ))
      ) : (
        <p>Sepet boş</p>
      )}
    </div>
  );
};

export default Basket;
