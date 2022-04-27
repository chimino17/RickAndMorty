import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav>
        {/* <img src="rick-and-morty-rick.gif" alt="logo" class="logo "></img>{" "} */}
        <h1>
          <Link className="a" to="/">
            Characters
          </Link>
          <Link className="a" to="/Favorites">
            {" "}
            Favorites
          </Link>{" "}
          <Link className="a" to="/NotFount">
            NotFount
          </Link>
        </h1>

        <h1>
          <span className="a contact">By Manuel Alejandro</span>
        </h1>
      </nav>
    </>
  );
};

export default Header;
