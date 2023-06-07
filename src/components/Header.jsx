import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const Header = () => {
  const { money } = useContext(GlobalContext);

  return (
    <div>
      <h1>{money}</h1>
    </div>
  );
};

export default Header;
