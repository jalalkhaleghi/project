import React from "react";
import { Link } from "react-router-dom";
import namad1 from "../../assets/images/e0a8fb15.png";
import namad2 from "../../assets/images/enamd1.png";
import namad3 from "../../assets/images/samandehi1.png";
import namad4 from "../../assets/images/fc43b34d.png";
import logo_footer from "../../assets/images/logo_footer.png";

import { Style } from "../../assets/state";

const style = {
  logo_namad: {
    display: "flex",
    flexWrap: "wrap",
    "& a": {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 110,
      padding: "0.625rem",
      "& img": {
        objectFit: "scale-down",
        height: "100%"
      }
    }
  }
};

const { classes } = Style(style);

const Logos = () => {
  return (
    <figure className={classes.logo_namad}>
      <Link to="/">
        <img
          src={namad1}
          alt="pardakht"
          className="loaded"
          data-was-processed="true"
        />
      </Link>
      <Link to="/">
        <img
          src={namad2}
          alt="anjoman"
          className="loaded"
          data-was-processed="true"
        />
      </Link>
      <Link to="/">
        <img
          src={namad3}
          alt="samandehi"
          className="loaded"
          data-was-processed="true"
        />
      </Link>
      <Link to="/">
        <img
          src={namad4}
          alt="enad"
          className="loaded"
          data-was-processed="true"
        />
      </Link>
    </figure>
  );
};

export default Logos;
