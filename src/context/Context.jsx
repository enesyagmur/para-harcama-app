import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [money, setMoney] = useState(1000000);
  const [products, setProducts] = useState(["araba", "uçak", "monalisa"]);

  return (
    <GlobalContext.Provider value={{ money, setMoney, products, setProducts }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
