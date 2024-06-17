import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ items }) => {
  return (
    <nav>
      <ul className="nav">
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <Link className="nav-link" to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
