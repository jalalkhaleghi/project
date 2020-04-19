import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Dic, Grid, Icon, Style, Vars, classOf } from "../../assets/state";
// import VerifyRegister from "../../container/VerifyRegister";
// import Modal from "react-modal";
import Menu from "./Menu";
import lang from "../../assets/images/flags.png";

const styles = {
  top_header: {
    "padding-top": 5,
    "padding-bottom": 5,
    "background-color": "#fff",
    "border-bottom": "1px solid #eee",
    position: "relative",
    zIndex: 999
  },
  row_list: {
    display: "flex",
    alignItems: "center",
    "align-items": "stretch",
    "justify-content": "space-between"
  },
  "@media(max-width:576px)": {
    btn_reg: {
      fontSize: 0
    }
  },
  list_inline: {
    display: "flex",
    "align-items": "center",
    "flex-basis": "auto",
    "flex-grow": "1",
    "max-width": "100%",
    "& li": {
      position: "relative",
      "&:last-child:before": {
        "@media(max-width:544)": {
          display: "none"
        }
      }
    },

    "& a,& span,& button": {
      display: "block",
      padding: "5px 10px",
      "& svg": {
        "margin-right": "10px"
      }
    },
    "& li + li": {
      "&:before": {
        content: '""',
        position: "absolute",
        width: "1px",
        top: "2px",
        bottom: "2px",
        left: -2,
        "background-color": "rgba(0,0,0, 0.1)"
      }
    }
  },
  list_right: {
    "justify-content": "flex-start"
  },
  list_left: {
    "justify-content": "flex-end"
  },
  customerDiv: {
    position: "absolute",
    top: "100%",
    paddingTop: 7,
    zIndex: 9,
    left: "auto",
    right: 0,
    minWidth: "130px"
  },
  dropdown: {
    backgroundColor: Vars.white,
    border: `1px solid ${Vars.border}`,
    padding: 10,
    borderRadius: 5
  },
  linkReg: {
    width: "100%",
    padding: "8px 0 !important",
    textAlign: "left",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: Vars.main_color
    }
  },
  logoutBtn: {
    background: "none",
    border: "none"
  },
  icon: {
    marginRight: "10px"
  },
  customerName: {
    minWidth: "100px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      color: Vars.main_color
    }
  },
  logoutSpan: {
    cursor: "pointer",

    "&:hover": {
      color: Vars.main_color
    }
  },
  dashboard: {
    color: "black"
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    zIndex: "1000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    maxWidth: 400,
    width: "100%",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: "none",
    padding: "10px 0",
    background: Vars.white,
    overflow: "auto",
    WebkitOverflowScrolling: "touch"
  },
  btnClose: {
    position: "absolute",
    zIndex: 9,
    right: 10,
    top: 10
  },
  lang: {
    "&:before": {
      content: '""',
      backgroundImage: `url(${lang})`,
      display: "inline-block",
      verticalAlign: "middle",
      width: 23,
      height: 18,
      marginRight: 5
    }
  },
  loginBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    outline: "0",
    "&:hover": {
      color: Vars.main_color
    }
  },
  hide: {
    display: "none"
  },
  en: {
    "&:before": {
      backgroundPosition: "47px -27px"
    }
  },
  dropdownMenu: {
    marginTop: 7
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.4)",
    zIndex: 99
  },
  registerBtn: {
    display: "inline-block !important"
  }
};

const { classes } = Style(styles);

const Top = props => {
  const [fullname, setFullname] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setFullname(props.customer);
  }, []);

  const logout = () => {
    setIsOpen(false);
    props.logout();
  };
  return (
    <>
      {isOpen && <div className={classes.overlay} />}
      <nav className={classes.top_header}>
        <Grid fluid>
          <div className={[classes.row_list, classOf.mx_0].join(" ")}>
            <Menu menu={props.menu} />
            <ul className={[classes.list_inline, classes.list_left].join(" ")}>
              <li>
                {/* <Dropdown
                    title={Dic.farsi}
                    navClass={[classOf.navLink, classes.lang, classes.fa].join(
                      " "
                    )}
                    classNameDropdownMenu={classes.dropdownMenu}
                  >
                    <Link
                      to="/"
                      className={[classes.lang, classes.en].join(" ")}
                    >
                      {Dic.english}
                    </Link>
                  </Dropdown> */}
              </li>
              <li>
                <a href="tel:03131525" dir="ltr">
                  {Dic.tell}
                  <Icon icon="phone-rotary" size={16} />
                </a>
              </li>
              <li>
                {fullname ? (
                  <span
                    onMouseOver={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className={classes.customerName}
                  >
                    <Icon
                      className={classes.icon}
                      icon="unlock-alt"
                      size={16}
                    />
                    {fullname}
                    {isOpen && (
                      <div className={classes.customerDiv}>
                        <div className={classes.dropdown}>
                          <Link
                            to="/customer/profile"
                            className={[
                              classes.dashboard,
                              classes.linkReg
                            ].join(" ")}
                          >
                            <Icon icon="user-cog" size={20} />
                            {Dic.header.profile}
                          </Link>

                          <button
                            className={[
                              classes.logoutBtn,
                              ,
                              classes.linkReg
                            ].join(" ")}
                            onClick={logout}
                          >
                            <Icon
                              icon="lock-alt"
                              size={18}
                              className={classOf.mr_2}
                              style={{ width: 20 }}
                            />
                            {Dic.customerPanel.exit}
                          </button>
                        </div>
                      </div>
                    )}
                  </span>
                ) : (
                  <button
                    className={
                      window.location.pathname.includes("/login")
                        ? [classes.loginBtn, classes.hide].join(" ")
                        : [classes.loginBtn, classes.btn_reg].join(" ")
                    }
                    onClick={() =>
                      props.history.replace(
                        "/login?redirect=" + props.location.pathname
                      )
                    }
                  >
                    <Icon
                      className={classes.icon}
                      icon="unlock-alt"
                      size={16}
                    />
                    {Dic.header.login} {" / "}
                    {Dic.customerPanel.register}
                  </button>
                )}
              </li>
            </ul>
          </div>
        </Grid>
      </nav>
    </>
  );
};
export default withRouter(Top);
