import React from "react";
import Logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} alt="Logo"></img>

      <Link className="text-blue-400 text-xl font-bold" to="/">
        Movies
      </Link>

      <Link className="text-blue-400 text-xl font-bold" to="/watchlist">
        Watchlist
      </Link>
    </div>
  );
}

export default Navbar;
