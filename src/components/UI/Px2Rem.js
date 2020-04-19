import jss from "jss";
import defaultUnit from "jss-plugin-default-unit";

const options = {
  "line-height": "rem",
  "font-size": "rem",
  width: "rem",
  height: "rem",
  margin: "rem",
  "margin-top": "rem",
  "margin-right": "rem",
  "margin-left": "rem",
  "margin-bottom": "rem",
  padding: "rem",
  "padding-top": "rem",
  "padding-right": "rem",
  "padding-left": "rem",
  "padding-bottom": "rem"
};

jss.use(defaultUnit(options));
