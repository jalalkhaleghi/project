import React from "react";
import { Style } from "../";

const styles = {
  alert: {
    position: "relative",
    padding: ".75rem 1.25rem",
    marginBottom: "1rem",
    border: "1px solid transparent",
    borderRadius: ".25rem"
  },
  alert_primary: {
    color: "#004085",
    backgroundColor: "#cce5ff",
    borderColor: "#b8daff"
  },
  alert_danger: {
    color: "#721c24",
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb"
  },
  alert_warning: {
    color: "#856404",
    backgroundColor: "#fff3cd",
    borderColor: "#ffeeba"
  }
};

const { classes } = Style(styles);

const Alert = props => {
  let alertClass = null;
  if (props.primary) {
    alertClass = classes.alert_primary;
  } else if (props.danger) {
    alertClass = classes.alert_danger;
  } else if (props.warning) {
    alertClass = classes.alert_warning;
  } else {
    alertClass = null;
  }
  const classNames = [classes.alert, props.className, alertClass].join(" ");
  return <div className={classNames}>{props.children}</div>;
};

export default Alert;
