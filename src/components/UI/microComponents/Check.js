import React from "react";
import style from "./Check.module.scss";

const Checkbox = props => {
  return (
    <div className={[style.toggler, props.className].join(" ")}>
      <input
        id="toggler-1"
        name={props.name}
        type="checkbox"
        defaultValue={1}
        onChange={props.changed}
        checked={props.checked}
      />
      <label htmlFor="toggler-1">
        <svg
          className={style["toggler-on"]}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <polyline
            className={[style.path, style.check].join(" ")}
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
        <svg
          className={style["toggler-off"]}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <line
            className={[style.path, style.line].join(" ")}
            x1="34.4"
            y1="34.4"
            x2="95.8"
            y2="95.8"
          />
          <line
            className={[style.path, style.line].join(" ")}
            x1="95.8"
            y1="34.4"
            x2="34.4"
            y2="95.8"
          />
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
