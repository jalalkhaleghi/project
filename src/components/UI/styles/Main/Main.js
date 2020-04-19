import { Style } from "../../rtl";
import Styles from "./Styles";
import { Utilities } from "../Utilities";
import Default from "../Default";
import Reset from "./Reset";
import Forms from "./Forms";

const defaultStyle = {
  // ...Reset,
  ...Styles,
  ...Utilities,
  ...Forms,
  ...Default,
};

export const customStyle = {
  ...Reset,
  ...Styles,
  ...Utilities,
  ...Forms,
  ...Default,
};

export const { classes } = Style(defaultStyle);
