//dependencies

import React, { useState } from "react";
// import Logo from "..src/assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={"..src/assets/pizzaLogo.png"} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <MenuTwoToneIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
