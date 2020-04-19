import React from "react";
import { Style } from "../";

const pointStar = {
  star: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 22 22"
    >
      <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
  oStar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 22 22"
    >
      <path d="M0 0h20v20H0z" fill="none" />
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      <path d="M0 0h20v20H0z" fill="none" />
    </svg>
  )
};

const styles = {
  stars_point: {
    display: "inline-block",
    "line-height": 1,
    position: "relative",
    cursor: "pointer",
    "margin-top": 10,
    "margin-bottom": 10,
    "white-space": "nowrap",
    "& svg": {
      fill: "#ccc"
    }
  },
  star_item: {
    color: "rgb(223, 223, 223)",
    fontSize: 20
  },
  stars_selected: {
    position: "absolute",
    top: 0,
    display: "block",
    overflow: "hidden",
    direction: "ltr",
    left: 0
    // "& svg": {
    //   fill: "#ffc20d"
    // }
  }
};

const { classes } = Style(styles);

const StarPoint = props => {
  let width;
  switch (props.rate) {
    case 1:
      width = "20%";
      break;
    case 2:
      width = "40%";
      break;
    case 3:
      width = "60%";
      break;
    case 4:
      width = "80%";
      break;
    case 5:
      width = "100%";
      break;
    default:
      width = "0%";
  }
  // const { width } = props;
  return (
    <span className={[classes.stars_point, props.className].join(" ")}>
      <i className={classes.star_item}>{pointStar.star}</i>
      <i className={classes.star_item}>{pointStar.star}</i>
      <i className={classes.star_item}>{pointStar.star}</i>
      <i className={classes.star_item}>{pointStar.star}</i>
      <i className={classes.star_item}>{pointStar.star}</i>
      <span className={classes.stars_selected} style={{ width: width }}>
        <i className={classes.star_item}>{pointStar.oStar}</i>
        <i className={classes.star_item}>{pointStar.oStar}</i>
        <i className={classes.star_item}>{pointStar.oStar}</i>
        <i className={classes.star_item}>{pointStar.oStar}</i>
        <i className={classes.star_item}>{pointStar.oStar}</i>
      </span>
    </span>
  );
};

export default StarPoint;
