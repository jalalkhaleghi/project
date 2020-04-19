import React from "react";
import { Link } from "react-router-dom";
import { classOf, Style } from "../";

const styles = {
  cardImage: {
    "& span": {
      overflow: "hidden"
    },
    "& img": {
      transition: "all .3s ease-in-out"
    },
    "&:hover": {
      "& img": {
        transform: "scale(1.2) rotate(-5deg)"
      }
    }
  },
  label: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    fontSize: 12,
    backgroundColor: "#eee",
    height: 25,
    position: "relative"
  },
  labels: {
    position: "absolute",
    top: 50,
    left: -10,
    zIndex: 9
  },
  label_primary: {
    backgroundColor: "#9DB93C",
    clipPath: "polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 12% 50%)",

    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 26,
    paddingRight: 26,
    "&:before": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: 15,
      transform: "translateY(-50%)",
      backgroundColor: "#fff",
      borderRadius: "50%",
      width: 5,
      height: 5
    }
  },
  // label_info: {
  //   backgroundColor: "#e5870D",
  //   clipPath:
  //     "polygon(50% 0%, 67% 24%, 98% 35%, 78% 59%, 79% 91%, 48% 81%, 21% 91%, 21% 61%, 2% 35%, 29% 27%)",
  //   top: 20,
  //   right: 60,
  //   width: 50,
  //   height: 50,
  //   justifyContent: "center",
  //   transform: "rotate(8deg)"
  // },
  label_info: {
    backgroundColor: "#e5870D",
    marginTop: 2
  },
  discount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: "50%",
    width: 30,
    height: 30,
    color: "#fff",
    position: "absolute",
    top: 10,
    right: 10,
    transform: "rotate(6deg)",
    zIndex: 9
  }
};

const { classes } = Style(styles); //test change

const Figure = props => {
  return (
    <>
      <figure
        className={[classOf.card, classOf.p_3, props.className].join(" ")}
      >
        <div className={classes.labels}>
          {props.label && (
            <span className={[classes.label, classes.label_primary].join(" ")}>
              {props.label}
            </span>
          )}
          {props.labelStar && (
            <span
              className={[
                classes.label,
                classes.label_primary,
                classes.label_info
              ].join(" ")}
            >
              {props.labelStar}
            </span>
          )}
        </div>
        <div
          className={[
            classOf.cardImage,
            props.cardImage,
            classes.cardImage
          ].join(" ")}
          // onClick={props.clicked}
        >
          {props.labelDiscount && (
            <span className={[classes.label, classes.discount].join(" ")}>
              {props.labelDiscount}
            </span>
          )}
          <Link to={{ pathname: props.clickLink }} className={props.classLink}>
            <img
              src={props.img}
              data-src={props.dataSrc}
              alt=""
              className={[props.classImg, "swiper-lazy"].join(" ")}
            />
          </Link>
        </div>
        <figcaption
          className={[classOf.cardBody, classOf.p_0, props.figClass].join(" ")}
        >
          {props.children || props.figcaption}
        </figcaption>
      </figure>
      {/* <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
    </>
  );
};

export default Figure;
