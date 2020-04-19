import React, { Component } from "react";
import { classOf, Style } from "..";

const styles = {
  btn: {
    fontSize: "inherit",
    padding: "5px 10px",
    "&:focus": {
      outline: "none"
    }
  }
};

const { classes } = Style(styles);

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className={[classOf.dropdown, this.props.className].join(" ")}>
        <button
          className={[
            classOf.navLink,
            this.props.navClass,
            classOf.btn,
            classes.btn
          ].join(" ")}
          onClick={this.showMenu}
        >
          {this.props.title}
        </button>
        {this.state.showMenu && (
          <div
            className={[
              classOf.dropdownMenu,
              this.props.classNameDropdownMenu
            ].join(" ")}
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
