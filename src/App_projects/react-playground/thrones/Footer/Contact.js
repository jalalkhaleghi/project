import React from "react";
import { Icon, Dic, Style, classOf, Vars } from "../../assets/state";
import { Link } from "react-router-dom";
import { Card } from "./Card";

const style = {
  itemFlex: {
    "& li": {
      display: "flex",
      alignItems: "center",

      "&:first-child": {
        alignItems: "flex-start"
      },

      // "& + li": {
      //   marginTop: 16
      // },

      "& span": {
        display: "block"
      },

      "& svg": {
        display: "flex",
        alignItems: "center",
        flex: "0 0 45px",
        maxWidth: 45,
        color: Vars.base_color,
        marginRight: 15
      }
    }
  },
  tel_footer: {
    fontSize: 20
  },
  tell_main: {
    fontSize: 30,
    display: "block",
    marginTop: 10
  }
};

const { classes } = Style(style);

const Contact = () => {
  return (
    <Card>
      <ul className={classes.itemFlex}>
        <li>
          <Icon icon="headset" size={40} />
          <span>
            <strong className={[classOf.d_block, classOf.mb_2].join(" ")}>
              {Dic.footer.supportFooter} :
            </strong>
            <Link
              to="/"
              dir="ltr"
              className={[classes.tel_footer, classes.tell_main].join(" ")}
            >
              {Dic.header.tell}
            </Link>
            {/* <Link to="/" dir="ltr" className={classes.tel_footer}>
              {Dic.header.tell2}
            </Link> */}
            &nbsp;
          </span>
        </li>
        <li>
          <span>
            <h6>{Dic.footer.addressTitle} </h6>
            {Dic.footer.address}
          </span>
        </li>
        <li>
          <span>
            {Dic.footer.pelak} : 723 &nbsp;&nbsp;{Dic.footer.codePost} :
            84157-83115
          </span>
        </li>
      </ul>
    </Card>
  );
};

export default Contact;
