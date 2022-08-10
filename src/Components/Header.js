import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [sticky, setSticky] = useState("non-sticky");
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 160) {
      setSticky("sticky-header");
    } else {
      setSticky("non-sticky");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="header">
      <div className="background-header" />
      <div
        className={`d-flex justify-content-evenly px-3 py-2 header-menu ${sticky}`}
      >
        <Link className="header-link" to="/">
          Начало
        </Link>

        <Link className="header-link" to="/history">
          История
        </Link>

        <Link className="header-link" to="/gallery">
          Галерия
        </Link>

        <Link className="header-link" to="/contacts">
          Контакти
        </Link>
      </div>
    </div>
  );
}

export default Header;
