import React from "react";
import { Style } from "../";

const styles = {
  formCheckInput: {
    "&:checked": {
      "&+ label": {
        "&:before": {
          left: "0.9375rem",
          borderRight: "2px solid transparent",
          borderLeft: "2px solid #9DB93C",
          transform: "rotate(-40deg)",
          borderTop: "2px solid transparent",
          borderBottom: "2px solid #9DB93C",
          top: "-5px",
          width: "0.75rem",
          height: 22,
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transformOrigin: "10px 100%",
        },
      },
    },
  },
  formCheckLabel: {
    position: "relative",
    display: "inline-block",
    height: "1.5625rem",
    lineHeight: "1.5625rem",
    userSelect: "none",
    paddingLeft: 30,
    "&:before,&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      width: "1.125rem",
      height: "1.125rem",
      zIndex: 0,
      transition: "0.2s",
      left: 0,
      border: "2px solid #8a8a8a",
      borderRadius: "0.0625rem",
      marginTop: "0.1875rem !important",
    },
    "&:after": {
      border: 0,
      transform: "scale(0)",
    },
  },
};

const { classes } = Style(styles);

const Checkbox = (props) => {
  return (
    <div className={classes.formCheck}>
      <input
        type="checkbox"
        className={classes.formCheckInput}
        id={props.idCheck}
        name={props.name}
        onChange={props.changed}
        checked={props.checked}
      />
      <label
        className={[classes.formCheckLabel, props.labelClass].join(" ")}
        htmlFor={props.idCheck}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
