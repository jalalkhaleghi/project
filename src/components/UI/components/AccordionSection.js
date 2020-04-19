import React, { Component } from "react";
import PropTypes from "prop-types";
import { Style } from "../";

const styles = {
  // accordion: {
  //   padding: "6px 12px"
  // },
  // accordionItem: {
  //   padding: "6px 12px",
  //   backgroundColor: "#eee"
  // }
};

const { classes } = Style(styles);

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label, itemClass, iconClose, iconOpen }
    } = this;

    return (
      <div className={this.props.text}>
        <div onClick={onClick}>
          <h6 className={itemClass}>{label}</h6>
          <div>
            {!isOpen && <span>{iconClose}</span>}
            {isOpen && <span>{iconOpen}</span>}
          </div>
        </div>
        {isOpen && <div>{this.props.children}</div>}
      </div>
    );
  }
}

export default AccordionSection;
