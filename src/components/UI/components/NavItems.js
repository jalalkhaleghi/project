import React from "react";
import { NavLink } from "react-router-dom";
import { classUtil } from "../";

const NavItems = (props) => {
  return (
    <li className={[classUtil.navItems, props.classItem].join(" ")}>
      <NavLink
        className={[classUtil.navLink, props.classLink].join(" ")}
        to={props.link}
        exact={props.exact}
        activeClassName={props.active}
        onClick={props.clicked}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItems;
