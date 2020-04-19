import React, { useState, useEffect, useRef } from "react";
import { classUtil, Style } from "..";

const styles = {
  btn: {
    fontSize: "inherit",
    padding: "5px 10px",
    "&:focus": {
      outline: "none",
    },
  },
};

const { classes } = Style(styles);

const Dropdown = (props) => {
  const [display, setDisplay] = useState(false);
  const myRef = useRef();
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setDisplay(false);
    }
  };
  const handleClickInside = () => setDisplay(!display);
  useEffect((e) => {
    if (display) {
      document.addEventListener("mousedown", handleClickOutside, false);
    }
  });
  return (
    <div
      className={[classUtil.dropdown, props.className].join(" ")}
      ref={myRef}
    >
      <button
        className={[classUtil.btn, props.navClass, classes.btn].join(" ")}
        onClick={handleClickInside}
      >
        {props.title}
      </button>
      {display && (
        <div
          className={[classUtil.dropdownMenu, props.classNameDropdownMenu].join(
            " "
          )}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
