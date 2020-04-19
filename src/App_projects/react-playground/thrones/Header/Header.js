import React from "react";
import { Style, Vars } from "../../assets/state";
import Navigation from "./Navigation";
import Top from "./Top";
// import { StickyContainer, Sticky } from "react-sticky";

const styles = {
  header: {
    margin: "0",
    padding: "0",
    "z-index": "999",
    position: "relative",
    "min-height": "50px",
    boxShadow: Vars.shadow
    // marginTop: 49,
    // "@media(min-width:576px)": {
    //   marginTop: 44
    // }
  }
};

const { classes } = Style(styles);

const Header = props => {
  return (
    <header className={classes.header}>
      <Top {...props} triggerTop={props.triggerTop} menu={props.menu} />
      <Navigation {...props} />
    </header>
  );
};

export default Header;
