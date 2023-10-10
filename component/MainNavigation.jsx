import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Home from "./Home";

const MainNavigation = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <ul className="list">
          {location.pathname === "/" && (
            <li>
              <NavLink to="/chatbot" end>
                <Home />
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
