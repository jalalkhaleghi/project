import React from "react";
import { classOf, Style } from "../";

const styles = {
  flex_space: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

const { classes } = Style(styles);

const Card = props => {
  let header = null;
  if (props.title) {
    header = (
      <div className={[classOf.cardHeader, classes.flex_space,props.classHeader].join(" ")}>
        <h6
          className={[classes.cardTitle, classOf.mb_0, props.classTitle].join(
            " "
          )}
        >
          {props.title}
        </h6>
        {props.icon}
      </div>
    );
  }
  return (
    <div className={[classOf.card, props.className].join(" ")}>
      {header}
      <div className={[classOf.cardBody, props.cardBody].join(" ")}>
        {props.children || props.body}
      </div>
    </div>
  );
};

export default Card;
