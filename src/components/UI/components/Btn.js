import React from "react";
import PropTypes from "prop-types";
import { Style } from "../rtl";

const styles = {
  btn: {
    display: "inline-block",
    fontWeight: "400",
    color: "inherit",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
    userSelect: "none",
    border: "1px solid transparent",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: ".25rem",
    backgroundColor: "transparent",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"
  }
};

const { classes } = Style(styles);

const Btn = props => {
  const classNames = [classes.btn, props.className].join(" ");
  return (
    <button
      type={props.type}
      className={classNames}
      disabled={props.disabled}
      onClick={props.clicked}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

Btn.propTypes = {
  type: PropTypes.string.isRequired
};

Btn.defaultProps = {
  type: "button"
};

export default Btn;
