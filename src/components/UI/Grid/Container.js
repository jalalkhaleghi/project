import React from "react";
import { classUtil } from "../";

const Container = (props) => {
  return (
    <div className={[classUtil.container, props.className].join(" ")}>
      {props.children}
    </div>
  );
};

export default Container;
