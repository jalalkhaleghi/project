import { LightenDarkenColor } from "../../../../components/UI";

const colors = {
  main_color: "#78943b",
  base_color: "#9eba3c",
  color2: "#f5c360",
  mycolor: "#ddd"
};

export default {
  ...colors,
  bg_body: "#f5f5f5",
  color_body: "#333",
  color_blue: "#3398d1",
  color_yellow: "#fac400",
  color_red: "#fd5845",
  color_green: "#3eb613",
  shadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
  boxShadow: "0 3px 7px 0 rgba(0, 0, 0, 0.15)",
  text_shadow: "0 1px 0 rgba(0, 0, 0, 0.4)",
  light_color: LightenDarkenColor(colors.base_color, 30),
  light_main: LightenDarkenColor(colors.main_color, 30),
  light_color2: LightenDarkenColor(colors.color2, 30),
  dark_color: LightenDarkenColor(colors.base_color, -30),
  dark_main: LightenDarkenColor(colors.main_color, -30),
  dark_color2: LightenDarkenColor(colors.color2, -30)
};
