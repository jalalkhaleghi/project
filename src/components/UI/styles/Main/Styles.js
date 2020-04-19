export default {
  btn: {
    display: "inline-block",
    "font-weight": "400",
    color: "inherit",
    "text-align": "center",
    "vertical-align": "middle",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "transparent",
    border: "1px solid transparent",
    padding: ".375rem .75rem",
    "font-size": "1rem",
    "line-height": "1.5",
    "border-radius": ".25rem",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"
  },
  nav: {
    display: "flex",
    MsFlexWrap: "wrap",
    flexWrap: "wrap",
    paddingLeft: 0,
    marginBottom: 0,
    listStyle: "none"
  },
  navbarNav: {
    display: "flex",
    "flex-direction": "row",
    "padding-left": "0",
    "margin-bottom": "0",
    "list-style": "none",
    "@media(max-width:544px)": {
      flexDirection: "column"
    }
  },
  navLink: {
    display: "block",
    padding: ".5rem 1rem"
  },
  navbarToggler: {
    "@media(min-width:768px)": {
      display: "none"
    },
    background: "#eee",
    borderColor: "rgba(0, 0, 0, .2)",
    cursor: "pointer",
    maxWidth: 38,
    flex: "0 0 38px",
    height: 38,
    width: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    padding: 8,
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: 4,
    flexDirection: "column",
    color: "rgba(0, 0, 0, .4)",
    "&:after ,&:before": {
      content: '""',
      display: "block",
      width: "100%",
      borderBottom: "1px solid"
    },

    "&:after": {
      marginTop: 7,
      height: 9,
      borderTop: "1px solid"
    },

    "&:hover,&:focus": {
      background: "#ddd"
    }
  },

  navbarToggleableLg: {
    "@media(max-width:768px)": {
      position: "absolute !important",
      left: 0,
      margin: 0,
      right: 0,
      top: "100%",
      zIndex: 9999,
      overflowY: "auto",
      overflowX: "hidden",
      backgroundColor: "#fff",
      display: "none"
    }
  },
  alert: {
    position: "relative",
    padding: ".75rem 1.25rem",
    marginBottom: "1rem",
    border: "1px solid transparent",
    borderRadius: ".25rem"
  },
  badge: {
    display: "inline-block",
    padding: ".25em .4em",
    fontSize: "75%",
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25rem",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"
  },
  breadcrumb: {
    display: "flex",
    MsFlexWrap: "wrap",
    flexWrap: "wrap",
    padding: ".75rem 1rem",
    marginBottom: "1rem",
    listStyle: "none",
    backgroundColor: "#e9ecef",
    borderRadius: ".25rem"
  },
  card: {
    position: "relative",
    display: "flex",
    MsFlexDirection: "column",
    flexDirection: "column",
    minWidth: 0,
    wordWrap: "break-word",
    backgroundColor: "#fff",
    backgroundClip: "border-box",
    border: "1px solid rgba(0,0,0,.125)",
    borderRadius: ".25rem"
  },
  inputGroup: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    width: "100%"
  },
  dropdown: {
    position: "relative"
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 1000,
    minWidth: "10rem",
    padding: ".5rem 0",
    margin: ".125rem 0 0",
    color: "#212529",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid rgba(0,0,0,.15)",
    borderRadius: ".25rem"
  },
  w_25: {
    width: "25% !important"
  },
  w_50: {
    width: "50% !important"
  },
  w_75: {
    width: "75% !important"
  },
  w_100: {
    width: "100% !important"
  },
  w_auto: {
    width: "auto !important"
  },
  h_25: {
    height: "25% !important"
  },
  h_50: {
    height: "50% !important"
  },
  h_75: {
    height: "75% !important"
  },
  h_100: {
    height: "100% !important"
  },
  h_auto: {
    height: "auto !important"
  },
  mw_100: {
    maxWidth: "100% !important"
  },
  mh_100: {
    maxHeight: "100% !important"
  },
  min_vw_100: {
    minWidth: "100vw !important"
  },
  min_vh_100: {
    minHeight: "100vh !important"
  },
  vw_100: {
    width: "100vw !important"
  },
  vh_100: {
    height: "100vh !important"
  }
};
