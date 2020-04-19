import React from "react";
import Media from "react-media";
import { Link, withRouter } from "react-router-dom";
import Sticky from "react-sticky-el";
import {
  classOf,
  Col,
  Dic,
  Grid,
  Icon,
  Row,
  Style,
  Vars
} from "../../assets/state";
import Logo from "./Logo";
import Search from "./Search";

const styles = {
  stable: {
    position: "relative",
    backgroundColor: "#fff",
    paddingBottom: 10,
    "@media(min-width:544px)": {
      "padding-top": 0,
      "padding-bottom": 0
    }
  },
  order_menu: {
    order: -1,
    "@media(min-width:576px)": {
      order: 2
    }
  },
  btn_shop: {
    padding: "0 !important",
    overflow: "visible",
    "& span": {
      border: "1px solid #ddd",
      backgroundColor: "#fff",
      width: 50,
      height: 50,
      borderRadius: 5,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
      position: "relative",
      fontSize: 18
    }
  },
  badge: {
    borderRadius: "50%",
    backgroundColor: "#fe7f02",
    fontSize: "86%",
    padding: 0,
    position: "absolute",
    color: "#fff",
    width: 20,
    height: 20,
    left: "-10px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "normal"
  },
  btn_heart: {
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: "5px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fe7f02",
    marginLeft: 16
  },
  row_search: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    height: 100,
    display: "flex",
    transition: "height .2s ease-in-out",
    padding: 10,
    // boxShadow: "0 3px 7px 0 rgba(0, 0, 0, 0.15)",
    "& img": {
      objectFit: "scale-down",
      height: "100%"
    }
  },
  hover: {
    "&:hover": {
      backgroundColor: Vars.main_color,
      color: "#fff"
    }
  },
  formControl: {
    backgroundColor: "#f5f5f5"
  },
  regiter: {
    display: "flex",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
    "@media(min-width:576px)": {
      justifyContent: "flex-end"
    }
  },
  searchDiv: {
    position: "absolute",
    top: "100%",
    left: 10,
    right: 10,
    zIndex: 1000,
    // ...classLocal.card,
    maxHeight: "350px",
    padding: 16,
    overflow: "auto",
    // extend: classLocal.scroll,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
    // borderTop: "none"
  },
  searchItem: {
    display: "inline-block",
    marginBottom: 10,
    marginRight: 10,
    "& a": {
      display: "block",
      backgroundColor: "#eee",
      padding: "6px 10px",
      borderRadius: 5,
      "&:hover": {
        backgroundColor: Vars.main_color,
        color: "#fff"
      }
    }
  },
  affix: {
    "& $stable": {
      borderBottom: "1px solid rgba(0,0,0,.1)",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1)"
    },
    "& $logo": {
      height: 60,
      padding: 5
    },
    "& $btn_shop span": {
      width: 40,
      height: 40
    }
  },
  card_view: {
    position: "absolute",
    top: "100%",
    right: 0,
    zIndex: 999,
    border: "1px solid rgba(0,0,0,.08)",
    backgroundColor: "#fff",
    borderRadius: 3,
    boxShadow: Vars.shadow,
    minWidth: 250,
    display: "none",
    maxHeight: 400,
    overflowX: "hidden",
    overflowY: "auto",
    "@media(min-width:576px)": {
      minWidth: 350
    }
    // extend: classLocal.scroll
  },
  media: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    position: "relative",
    "& + $media": {
      borderTop: "1px solid rgba(0,0,0,.1)"
    }
  },
  mediaImage: {
    width: 80,
    height: 80,
    marginRight: 10,

    "& img": {
      objectFit: "scale-down",
      width: "100%",
      height: "100%"
    }
  },
  close_cart: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#ccc",
    cursor: "pointer",
    "&:hover": {
      color: "red"
    }
  },
  cart_dropdown: {
    // position: "relative",
    "&:hover": {
      "& $card_view": {
        display: "block"
      }
    }
  }
};

const { classes } = Style(styles);

const Navigation = props => {
  // console.log(props.openNavbar);
  return (
    <>
      <Sticky stickyClassName={classes.affix}>
        <nav className={classes.stable}>
          <Grid fluid>
            <Row className={classes.row_search}>
              <Col md={3} xs={5}>
                <figure className={classes.logo}>
                  <Logo />
                </figure>
              </Col>
              <Media
                query={{ maxWidth: 599 }}
                render={() => (
                  <Col xs={2}>
                    <span
                      className={classOf.navbarToggler}
                      onClick={props.openNavbar}
                    ></span>
                  </Col>
                )}
              />

              <Col
                sm={6}
                xs={10}
                id="frame-search"
                className={classOf.justify_content_center}
              >
                <Search {...props} />
              </Col>

              <Col
                xs={7}
                sm={3}
                className={[
                  "col-auto",
                  classes.order_menu,
                  classOf.align_items_end
                ].join(" ")}
              >
                <div
                  className={classes.regiter}
                  style={{ position: "relative" }}
                >
                  <div className={classes.cart_dropdown}>
                    <Link
                      to={{ pathname: "/customer/cart", state: "cart" }}
                      className={classes.btn_shop}
                    >
                      <span>
                        <Icon icon="shopping-cart" size={20} />

                        {/* <b className={classes.badge}>{length}</b> */}
                      </span>
                      {Dic.myCart}
                    </Link>
                  </div>
                  <Link
                    className={classes.btn_heart}
                    to="/customer/favorites"
                    data-tip={Dic.customerPanel.favorites}
                  >
                    <Icon icon="heart" size={20} />
                  </Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </nav>
      </Sticky>
    </>
  );
};

export default withRouter(Navigation);
