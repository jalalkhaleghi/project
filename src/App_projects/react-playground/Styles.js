import { Vars } from "./assets/state";
import { Style, customStyle } from "../../components/UI";
import "./assets/scss/App.scss";
import "react-toastify/dist/ReactToastify.css";
import "react-tabs/style/react-tabs.css";
import "react-multi-carousel/lib/styles.css";

export const style = {
  ...customStyle,
  card: {
    backgroundColor: "#fff",
    border: "1px solid #eee",
    padding: 10,
  },
  btn_cart: {
    backgroundColor: Vars.main_color,
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    color: "#fff",
    cursor: "pointer",
  },
};

export const { classes } = Style(style);
