import CustomReset from "../CustomReset";

export default {
  "@global": {
    "*,*::before,*::after": {
      boxSizing: "border-box"
    },
    html: {
      fontFamily: "sans-serif",
      lineHeight: 1.15,
      WebkitTextSizeAdjust: "100%",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
    },
    "article,aside,figcaption,figure,footer,header,hgroup,main,nav,section": {
      display: "block"
    },
    "#root": {
      display: "inherit",
      flexDirection: "inherit",
      minHeight: "inherit"
    },
    ":focus": {
      outline: "none !important"
    },
    '[tabindex="-1"]:focus:not(:focus-visible)': {
      outline: "0 !important"
    },
    hr: {
      boxSizing: "content-box",
      height: 0,
      overflow: "visible",
      color: "rgba(0, 0, 0, 0.05)",
      borderTop: "1px"
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: 0,
      marginBottom: "0.5rem",
      fontWeight: 600,
      lineHeight: 1.2
    },
    p: {
      marginTop: 0,
      marginBottom: "1rem"
    },
    "abbr: [title] ,abbr[data-original-title]": {
      textDecoration: "underline dotted",
      cursor: "help",
      borderBottom: 0,
      WebkitTextDecorationSkipInk: "none",
      textDecorationSkipInk: "none"
    },

    address: {
      marginBottom: "1rem",
      fontStyle: "normal",
      lineHeight: "inherit"
    },
    dt: {
      fontWeight: "700"
    },
    dd: {
      marginBottom: "0.5rem",
      marginLeft: "0"
    },
    blockquote: {
      margin: "0 0 1rem"
    },
    b: {
      fontWeight: "bolder"
    },
    strong: {
      fontWeight: "bolder"
    },
    small: {
      fontSize: "80%"
    },
    sub: {
      bottom: "-0.25em"
    },
    sup: {
      top: "-0.5em"
    },
    a: {
      color: "#007bff",
      textDecoration: "none",
      backgroundColor: "transparent"
    },
    a_hover: {
      color: "#0056b3",
      textDecoration: "underline"
    },
    a_not__href: {
      color: "inherit",
      textDecoration: "none"
    },
    a_not__href___hover: {
      color: "inherit",
      textDecoration: "none"
    },
    pre: {
      marginTop: "0",
      marginBottom: "1rem",
      overflow: "auto"
    },
    code: {
      fontFamily:
        'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace',
      fontSize: "1em"
    },
    kbd: {
      fontFamily:
        'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace',
      fontSize: "1em"
    },
    samp: {
      fontFamily:
        'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace',
      fontSize: "1em"
    },
    figure: {
      margin: "0 0 1rem"
    },
    img: {
      verticalAlign: "middle",
      borderStyle: "none"
    },
    svg: {
      overflow: "hidden",
      verticalAlign: "middle"
    },
    table: {
      borderCollapse: "collapse"
    },
    caption: {
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      color: "#6c757d",
      textAlign: "left",
      captionSide: "bottom"
    },
    th: {
      textAlign: "inherit"
    },
    label: {
      display: "inline-block",
      marginBottom: "0.5rem"
    },
    button: {
      WebkitAppearance: "button",
      fontFamily: "inherit"
    },
    button_focus: {
      outline: "5px auto -webkit-focus-ring-color"
    },
    input: {
      overflow: "visible",
      fontFamily: "inherit"
    },
    select: {
      wordWrap: "normal"
    },
    optgroup: {
      margin: "0",
      fontFamily: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit"
    },
    textarea: {
      overflow: "auto",
      resize: "vertical",
      height: "auto !important"
    },
    "input,button,select,optgroup,textarea": {
      margin: 0,
      fontFamily: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit"
    },
    type__button: {
      WebkitAppearance: "button"
    },
    type__reset: {
      WebkitAppearance: "button"
    },
    type__submit: {
      WebkitAppearance: "button"
    },
    button_not__disabled: {
      cursor: "pointer"
    },
    type__button___not__disabled: {
      cursor: "pointer"
    },
    type__reset___not__disabled: {
      cursor: "pointer"
    },
    type__submit___not__disabled: {
      cursor: "pointer"
    },
    button___moz_focus_inner: {
      padding: "0",
      borderStyle: "none"
    },
    type__button_____moz_focus_inner: {
      padding: "0",
      borderStyle: "none"
    },
    type__reset_____moz_focus_inner: {
      padding: "0",
      borderStyle: "none"
    },
    type__submit_____moz_focus_inner: {
      padding: "0",
      borderStyle: "none"
    },
    input_type__radio: {
      boxSizing: "border-box",
      padding: "0"
    },
    input_type__checkbox: {
      boxSizing: "border-box",
      padding: "0"
    },
    input_type__date: {
      WebkitAppearance: "listbox"
    },
    input_type__time: {
      WebkitAppearance: "listbox"
    },
    input_type__datetime_local: {
      WebkitAppearance: "listbox"
    },
    input_type__month: {
      WebkitAppearance: "listbox"
    },
    fieldset: {
      minWidth: "0",
      padding: "0",
      margin: "0",
      border: "0"
    },
    legend: {
      display: "block",
      width: "100%",
      maxWidth: "100%",
      padding: "0",
      marginBottom: "0.5rem",
      fontSize: "1.5rem",
      lineHeight: "inherit",
      color: "inherit",
      whiteSpace: "normal"
    },
    progress: {
      verticalAlign: "baseline"
    },
    type__number_____webkit_inner_spin_button: {
      height: "auto"
    },
    type__number_____webkit_outer_spin_button: {
      height: "auto"
    },
    type__search: {
      outlineOffset: "-2px",
      WebkitAppearance: "none"
    },
    type__search_____webkit_search_decoration: {
      WebkitAppearance: "none"
    },
    webkit_file_upload_button: {
      font: "inherit",
      WebkitAppearance: "button"
    },
    output: {
      display: "inline-block"
    },
    summary: {
      display: "list-item",
      cursor: "pointer"
    },
    template: {
      display: "none"
    },
    hidden: {
      display: "none !important"
    },
    h1: {
      fontSize: "2.5rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h3: {
      fontSize: "1.75rem"
    },
    h4: {
      fontSize: "1.5rem"
    },
    h5: {
      fontSize: "1.25rem"
    },
    h6: {
      fontSize: "1rem"
    },
    "ul,ol": {
      listStyle: "none",
      padding: "0",
      margin: "0"
    },
    '[type="checkbox"]:checked, [type="checkbox"]:not(:checked), [type="radio"]:checked, [type="radio"]:not(:checked)': {
      position: "absolute",
      opacity: 0,
      pointerEvents: "none"
    },
    ...CustomReset
  }
};
