import React from "react";
import { Style } from "../";

const pointStar = {
  oStar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
};

const styles = {
  star_label: {
    "& svg": {
      fill: "#ccc"
    }
  },
  // "checkbox:checked~label svg, checkbox:not(:checked)>label:hover svg, checkbox:not(:checked)>label:hover~label svg": {
  //   fill: "#f9df4a"
  // },
  checkbox: {
    "&:checked": {
      "& ~ label": {
        "& svg": {
          fill: "#f9df4a"
        }
      }
    },
    "&:not(:checked)": {
      "& > label:hover": {
        "& svg": {
          fill: "#f9df4a"
        }
      },
      "& ~ label:hover": {
        "& svg": {
          fill: "#f9df4a"
        }
      }
    }
  }
};
const { classes } = Style(styles);

const listStar = [1, 2, 3, 4, 5];

const Rating = props => {
  return (
    <div className="rating_comment" >
      {listStar.map((list, index) => {
        return (
          < >
            <input
              type="radio"
              id={"star" + list}
              name="rating"
              defaultValue={5 - index}
              className={classes.checkbox}
              onChange={(e) => props.setRate(e.target.value)}
            />
            <label
              className={classes.star_label}
              data={list}
              htmlFor={"star" + list}
            >
              {pointStar.oStar}
            </label>
          </>
        );
      })}
      <input type="hidden" defaultValue={0} id="rating_comment" />
    </div >
  );
};

export default Rating;
