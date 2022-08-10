import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DesctopMenu from "./menus/DesktopMenu";
import MobileMenu from "./menus/MobileMenu";
import pic_9 from "../pictures/pic_9.JPG";

function Header() {
  const [sticky, setSticky] = useState("non-sticky");
  const [isMobile, setisMobile] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 160) {
      setSticky("sticky-header");
    } else {
      setSticky("non-sticky");
    }
  };

  const checkMobile = () => {
    if (window.innerWidth > 800) {
      setisMobile(false);
      console.log("not mobile");
    } else {
      setisMobile(true);
      console.log("mobile");
    }
  };

  useEffect(() => {
    checkMobile();
    function handleResize() {
      console.log(window.innerWidth);
      checkMobile();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="header">
      {isMobile ? (
        <>
          <MobileMenu />
          <div className="d-flex justify-content-center my-3">
            <img
              className="object-fit-cover"
              src={pic_9}
              alt="Stefanovo"
              width="100%"
              height="190px"
            />
          </div>
        </>
      ) : (
        <>
          <div className="background-header" /> <DesctopMenu />
        </>
      )}
    </div>
  );
}

export default Header;
