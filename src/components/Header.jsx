import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import "../style/header.css";

const Header = () => {
  const { money } = useContext(GlobalContext);

  return (
    <div className="header">
      <h2>{money}</h2> $
    </div>
  );
};

export default Header;
