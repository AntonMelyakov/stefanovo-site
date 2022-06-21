import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
  return (
    <footer className="footer d-flex justify-content-end mt-auto">
      <div className="d-flex align-items-center pe-3">
        <span>Всички права запазени</span>
      </div>
    </footer>
  );
}

export default Footer;
