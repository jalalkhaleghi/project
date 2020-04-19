import React from "react";
import { Style } from "../../../../components/UI";
import { Vars, Btn } from ".";

const styles = {
  btn_primary: {
    backgroundColor: Vars.main_color,
    color: "#fff",
    "&:hover,&:focus": {
      backgroundColor: Vars.dark_main
    }
  },
  btn_success: {
    backgroundColor: Vars.base_color,
    color: "#fff",
    "&:hover,&:focus": {
      backgroundColor: Vars.dark_color
    }
  },
  btn_info: {
    backgroundColor: Vars.color2,
    color: "#fff",
    "&:hover,&:focus": {
      backgroundColor: Vars.color2
    }
  }
};

const { classes } = Style(styles);

const Button = props => {
  let btnClass = null;
  if (props.primary) {
    btnClass = classes.btn_primary;
  } else if (props.success) {
    btnClass = classes.btn_success;
  } else if (props.info) {
    btnClass = classes.btn_info;
  } else {
    btnClass = null;
  }
  const classNames = [props.className, btnClass].join(" ");
  return (
    <Btn type={props.type} className={classNames} clicked={props.clicked}>
      {props.children}
    </Btn>
  );
};

export default Button;
