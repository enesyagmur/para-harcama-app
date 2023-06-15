/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Context";
import Dropdown from "react-bootstrap/Dropdown";
import "../style/basket.css";

const Basket = () => {
  const { basket, setBasket } = useContext(GlobalContext);

  useEffect(() => {
    totalCalculate(basket);
  }, [basket]);

  const totalCalculate = (arr) => {
    let total = 0;
    arr.forEach((element) => {
      if (element.piece === 1) {
        total += element.price;
      } else if (element.piece > 1) {
        total += element.piece * element.price;
      }
    });
    return total;
  };

  return (
    <div className="basket">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="basketBaslik"
        >
          Basket
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="basketList">
            {basket
              ? basket.map((item) => (
                  <Dropdown.Item>
                    <div className="basketProduct">
                      <img src={item.image} />
                      <p>{item.piece}x</p>
                      <p>{item.name}</p>
                      <p>{item.price}$</p>
                    </div>
                  </Dropdown.Item>
                ))
              : null}
            <div className="totalBasket">{totalCalculate(basket)}$</div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Basket;
