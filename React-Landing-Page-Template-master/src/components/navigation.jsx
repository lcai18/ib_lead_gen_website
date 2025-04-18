import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img
              src="../img/SecondWindLogo.png"
              alt="Logo"
              style={{ height: "30px", width: "auto", display: "inline-block" }}
            />
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Clients <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/clients#investment-banks">Investment Banks</Link>
                </li>
                <li>
                  <Link to="/clients#search-funds">Search Funds</Link>
                </li>
                <li>
                  <Link to="/clients#private-equity">Private Equity Firms</Link>
                </li>
                <li>
                  <Link to="/clients#venture-capital">
                    Venture Capital Firms
                  </Link>
                </li>
                <li className="disabled">
                  <a href="#">Case Studies (Coming Soon)</a>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/team">Book a Demo</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
