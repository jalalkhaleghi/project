import React from "react";
import spinner from "./Spinner.module.scss";

const Spinner = props => (
  <div className={[spinner.containerLoader, props.className].join(" ")}>
    <div className={spinner.loader}>Loading...</div>
  </div>
);

export default Spinner;
