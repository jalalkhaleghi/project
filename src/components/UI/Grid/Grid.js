import React from "react";
import PropTypes from "prop-types";
import { classUtil, Style } from "../";
import createProps from "./createProps";

const styles = {
  fluid: {
    maxWidth: 1525,
    paddingLeft: 10,
    paddingRight: 10,
    "@media(min-width:768px)": {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
};

const { classes } = Style(styles);

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
};

const Grid = (props) => {
  const containerClass = props.fluid
    ? [classUtil.container_fluid, classes.fluid].join(" ")
    : classUtil.container;
  const classNames = [props.className, containerClass];

  return React.createElement(
    props.tagName || "div",
    createProps(propTypes, props, classNames)
  );
};

Grid.propTypes = propTypes;

export default Grid;
