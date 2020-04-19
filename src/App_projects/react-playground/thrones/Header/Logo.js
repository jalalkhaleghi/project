import React from "react";
import logo from "../../assets/images/logoo.svg";
import { Link } from "react-router-dom";
import { Style } from "../../assets/state";

const style = {
  navbarBrand: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 0,

    "& img": {
      maxHeight: "100%"
    },

    "&:focus": {
      outline: "none"
    }
  }
};

const { classes } = Style(style);

const Logo = props => {
  return (
    <Link className={[classes.navbarBrand, props.className].join(" ")} to="/">
      <img src={logo} alt={props.alt} />
    </Link>
  );
};

export default Logo;
