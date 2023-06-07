import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const Header = () => {
  const { money, setMoney } = useContext(GlobalContext);

  const add = () => {
    setMoney(money - 1);
  };

  return (
    <div>
      {money} <button onClick={add}>tıkla</button>
    </div>
  );
};

export default Header;
