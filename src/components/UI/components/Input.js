import React from "react";
import { classOf } from "../";
import { Style } from "../rtl";

const style = {
  iconStar: {
    "&:after": {
      content: '"*"',
      color: "rgb(245, 61, 61)",
      marginLeft: 5,
      display: "inline-block",
      fontSize: 16
    }
  },
  Invalid: {
    border: "1px solid red",
    background: "#db8d8d"
  }
};

const { classes } = Style(style);

const Input = props => {
  let inputElement = null;
  let label = null;
  const inputClasses = [classOf.formControl];
  let setData = null;
  if (props.invalid && props.shouldValidation && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  if (props.shouldValidation) {
    setData = classes.iconStar;
  }

  if (props.label !== undefined) {
    label = <label className={setData}>{props.label}</label>;
  }

  // console.log(props.shouldValidation);
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          defaultValue={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          onChange={props.changed}
          defaultValue={props.value}
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          defaultValue={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} defaultValue={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          defaultValue={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={classOf.form_group}>
      {label}
      {inputElement}
    </div>
  );
};

export default Input;
