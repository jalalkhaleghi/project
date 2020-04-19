import { create } from "jss";
import preset from "jss-preset-default";
import rtl from "jss-rtl";

const dir = true;

const presets = preset().plugins;

const jss = create({ plugins: [...presets, rtl()] });
export const Style = styles =>
  jss.createStyleSheet(styles, { flip: dir }).attach();
