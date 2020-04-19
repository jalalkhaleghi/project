export default {
  sectionOne: {
    paddingTop: 10,
    "@media (min-width: 544px)": {
      paddingTop: 20
    }
  },
  cardNone: {
    backgroundColor: "transparent",
    border: "none"
  },
  card: {
    flex: "1 0 auto",
    boxShadow: "none",
    borderRadius: 5
  },
  cardHeader: {
    display: "inherit",
    flexFlow: "column",
    padding: 10,
    borderTopRightRadius: "inherit",
    borderTopLeftRadius: "inherit"
  },
  cardBody: {
    display: "inherit",
    flexFlow: "inherit",
    flex: "inherit",
    padding: 10
  },
  cardFooter: {
    display: "inherit",
    flexFlow: "column"
  },
  cardImage: {
    display: "flex",
    position: "relative",

    "& img": {
      width: "100%",
      height: "100%",
      transition: "all 0.3s ease-in-out",
      margin: "auto",
      maxHeight: "100%"
    },

    "&:hover": {
      zoom_icon: {
        opacity: 1,
        visibility: "visible"
      }
    }
  },
  flexCenter: {
    display: "flex",
    alignItems: "center"
  },
  frame_swiper: {
    position: "relative"
  },
  flexSpace: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
};
