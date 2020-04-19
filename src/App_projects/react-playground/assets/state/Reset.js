import Vars from "./Vars";

export const Reset = {
  "@global": {
    '[lang="fa"]': {
      "& body": {
        fontFamily: "IRANSans",
        fontSize: 14,
        lineHeight: "normal"
      }
    },
    body: {
      color: Vars.color_body,
      backgroundColor: Vars.bg_body
    },
    a: {
      "&:hover,&:focus": {
        color: Vars.main_color
      }
    },
    "::selection": {
      backgroundColor: Vars.main_color
    }
  }
};
