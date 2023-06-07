import { createContext, useState } from "react";
import data from "../data/db.json";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [money, setMoney] = useState(226000000000);
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ money, setMoney, products, setProducts, basket, setBasket }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
