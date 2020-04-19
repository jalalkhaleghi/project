import React from "react";
import { Style, classOf, Btn } from "../";

const style = {
  inputBroupBtn: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 9,
    color: "#666"
  },
  btn: {
    height: "100%"
  }
};

const { classes } = Style(style);

const Search = props => {
  let btn = null;
  if (props.icon) {
    btn = (
      <div className={classes.inputBroupBtn}>
        <Btn
          className={[classes.btn, props.hover].join(" ")}
          clicked={props.clicked}
        >
          {props.children || props.icon}
        </Btn>
      </div>
    );
  }
  return (
    <div className={[classOf.inputGroup, props.className].join(" ")}>
      {btn}
      <input
        value={props.value || ''}
        className={[classOf.formControl, props.nameClass].join(" ")}
        type="text"
        placeholder={props.placeholder}
        onChange={props.changed}
      // ref={props.ref}
      />
    </div>
  );
};

export default Search;
