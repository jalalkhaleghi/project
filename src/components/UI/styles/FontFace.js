import ReactFontFace from "react-font-face";
import IRANSansTtf from "../../fonts/IRANSans/IRANSansWeb(FaNum).ttf";

export default {
  "@font-face": [
    {
      fontFamily: "IRANSans",
      src: `url(${IRANSansTtf}) format("truetype")`,
      fontStyle: "normal",
      fontWeight: "normal"
    }
  ]
};
