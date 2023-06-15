import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import "../style/header.css";

const Header = () => {
  const { money } = useContext(GlobalContext);

  return (
    <div className="header">
      <div className="headerTop">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg" />
        <p>Spend Elon Musk' Money</p>
      </div>
      <div className="headerBottom">
        <h2>{money}</h2>
        <p>$</p>
      </div>
    </div>
  );
};

export default Header;
