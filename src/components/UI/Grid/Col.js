import React from "react";
import PropTypes from "prop-types";
import createProps from "./createProps";
import { classUtil } from "..";

const ColumnSizeType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
const ViewportSizeType = PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]);

const propTypes = {
  xs: ColumnSizeType,
  sm: ColumnSizeType,
  md: ColumnSizeType,
  lg: ColumnSizeType,
  xl: ColumnSizeType,
  mt: ColumnSizeType,
  mb: ColumnSizeType,
  ml: ColumnSizeType,
  mr: ColumnSizeType,
  pt: ColumnSizeType,
  pb: ColumnSizeType,
  pr: ColumnSizeType,
  pl: ColumnSizeType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  first: ViewportSizeType,
  last: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
};

const classMap = {
  xs: "col_xs",
  sm: "col_sm",
  md: "col_md",
  lg: "col_lg",
  xl: "col_xl",
  xsOffset: "col_xs_offset",
  smOffset: "col_sm_offset",
  mdOffset: "col_md_offset",
  lgOffset: "col_lg_offset",
  xlOffset: "col_xl_offset",
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

  if (props.first) {
    extraClasses.push(classUtil["first_" + props.first]);
  }

  if (props.last) {
    extraClasses.push(classUtil["last_" + props.last]);
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

export default function Col(props) {
  const { tagName, ...columnProps } = props;
  return React.createElement(tagName || "div", getColumnProps(columnProps));
}

Col.propTypes = propTypes;
