import React from "react";
import classes from "./header.module.css";
import { Link, NavLink } from 'react-router-dom'

function Header(props) {
  return (
    <header>
      <Link to="/">
        <div className={classes.logo}>Todos</div>
      </Link>
      <nav>
        <ul>
          <NavLink to="/" activeClassName={classes.active} exact>
            <li>Главная</li>
          </NavLink>
          <NavLink to="/todos" activeClassName={classes.active} exact>
            <li>Список todos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header