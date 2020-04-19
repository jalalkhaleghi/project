import React from "react";

import { Style } from "../";

const styles = {
  scroll: {
    overflowX: "hidden",
    overflowY: "auto",
    height: "100%"
  }
};

const { classes } = Style(styles);

const Scroll = props => {
  return <div className={classes.scroll}>{props.children}</div>;
};

export default Scroll;
