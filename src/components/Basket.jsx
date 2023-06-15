/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import Dropdown from "react-bootstrap/Dropdown";
import "../style/basket.css";

const Basket = () => {
  const { basket, setBasket } = useContext(GlobalContext);
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
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Basket;
