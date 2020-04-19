import React from "react";
import { StarPoint, classOf, Style, Vars, Icon, Dic, Css } from "..";
import { Link } from "react-router-dom";

const style = {
  card: {
    position: "relative",
    textAlign: "justify"
  },
  label: {
    position: "absolute",
    top: "1.25rem",
    display: "none",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 3,
    color: "#fff",
    right: "1.25rem",
    left: "1.25rem",
    "@media(min-width:576px)": {
      display: "flex"
    }
  },
  title: {
    backgroundColor: "#444",
    padding: "0.1875rem 0.625rem",
    borderRadius: 4
  },
  cardImage: {
    // height: 200,
    marginRight: 10,
    boxShadow: Vars.shadow,
    backgroundColor: "#fff",
    borderRadius: 5,
    "@media(min-width:576px)": {
      // height: 400,
      marginRight: 30
    },
    "& img": {
      borderRadius: 5,
      height: "auto"
    }
  },
  cardTitle: {
    fontSize: 16,
    display: "block",
    marginBottom: 10
  },
  blog_footer: {
    color: "#acacac",
    flexWrap: "wrap",
    "& span": {
      whiteSpace: "nowrap"
    }
  },
  cardBody: {
    backgroundColor: Vars.white,
    boxShadow: Vars.shadow,
    padding: 20,
    borderRadius: 5,
    marginTop: -10,
    position: "relative",
    zIndex: 9,
    marginLeft: 10,
    border: "1px solid rgba(0,0,0,.05)",
    "@media(min-width:576px)": {
      marginTop: -20
    }
  },
  author: {
    display: "flex",
    alignItems: "center",
    "& img": {
      borderRadius: "50%",
      width: 30,
      height: 30,
      marginRight: 10
    }
  },
  block_post: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%"
  },
  more: {
    color: Vars.main_color,
    marginLeft: 10,
    whiteSpace: "nowrap",
    position: "relative",
    top: 5,
    cursor: "pointer"
  },
  cardText: {
    lineHeight: 1.8
  },
  textDefault: {
    "&:before,&:after": {
      content: '""',
      display: "block",
      height: 20,
      borderRadius: 4,
      marginBottom: 10,
      backgroundColor: "#f5f5f5"
    },
    "&:before": {
      width: "30%"
    }
  }
};

const { classes } = Style(style);

const Media = props => {
  return (
    <div className={[classes.card, props.className].join(" ")}>
      {props.categoryName && (
        <div className={classes.label}>
          <span className={classes.title}>{props.categoryName}</span>
        </div>
      )}
      <Link
        to={props.goTo}
        className={[classOf.cardImage, classes.cardImage].join(" ")}
      >
        {props.src && <img src={props.src} alt={props.alt} />}
        {props.children}
      </Link>
      <div className={classes.cardBody}>
        <Link className={classes.cardTitle} to={props.goTo}>
          {props.cardLink}
        </Link>
        <div className={classes.cardText}>
          {props.text}
          {props.textDefault && <div className={classes.textDefault}></div>}
          {props.text && (
            <Link
              className={classes.more}
              to={props.goTo}
              onClick={props.clicked}
            >
              {Dic.blog.more}
            </Link>
          )}
        </div>

        <div
          className={[
            classOf.flexSpace,
            classOf.mt_5,
            classes.blog_footer
          ].join(" ")}
        >
          <div className={classes.block_post}>
            <span className={[classes.author, classOf.mr_4].join(" ")}>
              <img src={avatar} />
              <a href="#">{props.user}</a>
            </span>
            <span>
              <Icon icon="comment" size={20} className={classOf.mr_2} />
              {props.comment} {props.text && Dic.blog.comment}
            </span>
            <span className={classOf.ml_sm_3}>
              <Icon icon="calendar-alt" size={20} className={classOf.mr_2} />
              {props.date}
            </span>
            <span
              className={[
                classes.piont_blog,
                classOf.ml_auto,
                classOf.mr_0
              ].join(" ")}
            >
              <StarPoint
                rate={props.rate}
                className={[classOf.mb_0, classOf.mt_0].join(" ")}
              />
              <span className={classOf.ml_2}>{props.view}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
