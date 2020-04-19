import React from "react";
import PropTypes from "prop-types";
import createProps from "./createProps";
import { classUtil } from "..";

const ColumnSizeType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const propTypes = {
  mt: ColumnSizeType,
  mb: ColumnSizeType,
  ml: ColumnSizeType,
  mr: ColumnSizeType,
  pt: ColumnSizeType,
  pb: ColumnSizeType,
  pr: ColumnSizeType,
  pl: ColumnSizeType,
};

const classMap = {
  mt: "mt",
  mb: "mb",
  ml: "ml",
  mr: "mr",
  pt: "pt",
  pb: "pb",
  pl: "pl",
  pr: "pr",
};

function isInteger(value) {
  return (
    typeof value === "number" && isFinite(value) && Math.floor(value) === value
  );
}

function getColClassNames(props) {
  const extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  return Object.keys(props)
    .filter((key) => classMap[key])
    .map(
      (key) =>
        classUtil[
          isInteger(props[key])
            ? classMap[key] + "_" + props[key]
            : classMap[key]
        ]
    )
    .concat(extraClasses);
}

export function getColumnProps(props) {
  return createProps(propTypes, props, getColClassNames(props));
}

export default function Div(props) {
  const { tagName, ...columnProps } = props;
  return React.createElement(tagName || "div", getColumnProps(columnProps));
}

Div.propTypes = propTypes;
