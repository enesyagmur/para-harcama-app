import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const Basket = () => {
  const { basket, setBasket } = useContext(GlobalContext);
  return <div></div>;
};

export default Basket;
