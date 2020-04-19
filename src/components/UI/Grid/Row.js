import React from "react";
import { classUtil } from "../";
import createProps from "./createProps";

const Row = (props) => {
  return (
    <div className={[classUtil.row, props.className].join(" ")}>
      {props.children}
    </div>
  );
};

export default Row;
