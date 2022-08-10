import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function MobileMenu() {
  const [sticky, setSticky] = useState("non-sticky");
  const [openMobile, setOpenMobile] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 160) {
      setSticky("sticky-header");
    } else {
      setSticky("non-sticky");
    }
  };
  const checOpenMobile = () => {
    setOpenMobile(!openMobile);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={` ${sticky} d-flex flex-column header-menu`}>
      <div className={`text-center  px-3 py-2`}>
        <a className="header-link my-2" onClick={checOpenMobile}>
          <div
            id="nav-icon3"
            className={`float-end ${openMobile ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <div
        className={`d-flex flex-column text-center justify-content-evenly px-3 py-2 header-menu ${
          openMobile ? "" : "d-none"
        }`}
      >
        <Link className="header-link my-2" to="/" onClick={checOpenMobile}>
          Начало
        </Link>
        <Link
          className="header-link my-2"
          to="/history"
          onClick={checOpenMobile}
        >
          История
        </Link>

        <Link
          className="header-link my-2"
          to="/gallery"
          onClick={checOpenMobile}
        >
          Галерия
        </Link>

        <Link
          className="header-link my-2"
          to="/contacts"
          onClick={checOpenMobile}
        >
          Контакти
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
