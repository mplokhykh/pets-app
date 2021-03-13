import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { titleHeader } from "../../constatns";
import "./Header.scss";

export function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="header-logo" />

      <div className="header-links-wrappers">
        {titleHeader.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="header-links-wrappers-link"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div>SEARCH</div>
    </div>
  );
}
