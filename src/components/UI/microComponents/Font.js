import { Style } from "../";
import sfWoff from "./fonts/sf.woff";

const style = {
  "@global html, body": {
    fontFamily: "San Francisco"
  },
  "@font-face": {
    fontFamily: "San Francisco",
    fontWeight: "normal",
    fontStyle: "normal",
    src: `url(${sfWoff}) format("woff")`
  }
};

const { classes } = Style(style);

export default Font;
