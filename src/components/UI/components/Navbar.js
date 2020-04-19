import React, { Component } from "react";
import { Style, classUtil } from "../";

const style = {
  active: {
    display: "block !important",
  },
};

const { classes } = Style(style);

export class Navbar extends Component {
  state = {
    opened: false,
  };

  openNavbar = (isOpen) => {
    if (isOpen) {
      this.setState((prevState) => {
        return {
          opened: !prevState.opened,
        };
      });
    }
  };

  render() {
    let active = [];
    if (this.state.opened) {
      active.push(classes.active);
    }
    return (
      <div className={classUtil.navbarMenu}>
        <div
          onClick={() => this.openNavbar(true)}
          className={classUtil.navbarToggler}
        ></div>
        <nav className={[classUtil.navbarToggleableLg, active].join(" ")}>
          <ul className={[classUtil.navbarNav, this.props.classNav].join(" ")}>
            {this.props.children}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
