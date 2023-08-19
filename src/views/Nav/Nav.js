import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/todo">
            Todos
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/user" exact>
            User
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Nav;
