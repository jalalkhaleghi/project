export default {
  body: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    direction: "ltr",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    minHeight: "100vh"
  },
  section: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    paddingTop: 16,
    paddingBottom: 16,
    "@media (min-width: 544px)": {
      paddingTop: 20,
      paddingBottom: 20
    }
  },
  a: {
    color: "inherit",
    textDecoration: "none",

    "&:hover,&:focus": {
      textDecoration: "none"
    }
  },
  del: {
    color: "#909090"
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    display: "block",

    "&[data-src]": {
      opacity: 0
    },

    "&:not(.initial)": {
      transition: "opacity 1s"
    },

    "&:not([src])": {
      visibility: "hidden"
    },

    "&.initial": {
      opacity: 1
    },
    "&.loaded": {
      opacity: 1
    },
    "&.error": {
      opacity: 1
    }
  },
  "p:last-child": {
    marginBottom: 0
  },

  figure: {
    margin: 0
  }
};
