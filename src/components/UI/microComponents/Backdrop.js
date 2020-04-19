import React from "react";
import { Style } from "../";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.5)",
    zIndex: 999
  }
};

const { classes } = Style(styles);

const Backdrop = props => {
  return (
    props.show && <div className={classes.overlay} onClick={props.clicked} />
  );
};

export default Backdrop;
