import React from "react";
import { Style } from "../";

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    paddingTop: "1rem",
    paddingBottom: "1rem",

    "@media (min-width: 544px)": {
      paddingTop: "2rem",
      paddingBottom: "2rem"
    }
  }
};

const { classes } = Style(styles);

const Section = props => {
  return (
    <section className={[classes.section, props.className]}>
      {props.children}
    </section>
  );
};

export default Section;
