import React from "react";
import { Style } from "../../assets/state";
import CopyRight from "./CopyRight";

const style = {
  footer: {
    marginTop: "auto",
    position: "relative",
    color: "#8c8c8c",
    backgroundColor: "#fff"
  },
  cards_footer: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    "@media (min-width: 544px)": {
      paddingTop: "2rem",
      paddingBottom: "2rem"
    }
  }
};

const { classes } = Style(style);

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <CopyRight />
    </footer>
  );
};

export default Footer;
