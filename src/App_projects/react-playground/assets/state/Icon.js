import React from "react";
import PropTypes from "prop-types";
import IcomoonReact from "icomoon-react";
import iconSet from "../fonticon/selection.json";

const Icon = props => {
  const { size, icon, className } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color="currentColor"
      size={size}
      icon={icon}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.defaultProps = {
  className: "",
  color: "",
  size: "100%"
};

export default Icon;
