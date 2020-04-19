import React from "react";

import { Style, classOf } from "../../assets/state";

const style = {
  cardHeader: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0
  },
  cardTitle: {
    color: "#333"
  }
};

const { classes } = Style(style);

export const Card = props => {
  return (
    <div className={[classOf.card, classes.card].join(" ")}>
      {props.title && (
        <div className={[classOf.cardHeader, classes.cardHeader].join(" ")}>
          <h6 className={[classOf.cardTitle, classes.cardTitle].join(" ")}>
            {props.title}
          </h6>
        </div>
      )}
      <div className={[classOf.cardBody, classes.cardBody].join(" ")}>
        {props.children}
      </div>
    </div>
  );
};
