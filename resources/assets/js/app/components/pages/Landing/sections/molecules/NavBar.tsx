import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <li className="logo">
        <Link to="/hello">
          <h1>Houser</h1>
        </Link>
      </li>
      <li className="buttons">
        <div className="grid-buttons">
          <select name="identity" className="identity">
            <option value="tentant">I am a Tenant</option>
          </select>

          <button className="login">Login</button>

          <select name="language" className="selectLanguage">
            <option value="English">English</option>
          </select>
        </div>
      </li>
    </nav>
  );
};

export default NavBar;
