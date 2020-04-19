import React, { Component } from "react";
import Backdrop from "../microComponents/Backdrop";
import { Style } from "../rtl";

const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1050,
    display: "none",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    outline: 0,
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "rgba(0,0,0,.3)",
    alignItems: "center",
    justifyContent: "center"
  },
  modalDialog: {
    backgroundColor: "#fff",
    borderRadius: 5,
    zIndex: 999,
    padding: 16,
    maxWidth: 500,
    width: "100%",
    minHeight: "30vh",
    transition: "top .4s ease-in-out"
  },
  show: {
    display: "flex"
  }
};

const { classes } = Style(styles);

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show != this.props.show ||
      nextProps.children != this.props.childern
    );
  }
  componentWillUpdate() {
    // console.log("[Modal Component] will updated");
  }
  render() {
    return (
      <div
        className={[
          classes.modal,
          this.props.className,
          this.props.show ? classes.show : null
        ].join(" ")}
        onClick={this.props.clicked}
      >
        <div className={[classes.modalDialog, this.props.modalClass].join(" ")}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Modal;
