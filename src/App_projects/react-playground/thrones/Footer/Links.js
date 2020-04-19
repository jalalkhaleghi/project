import React from "react";
import { Link } from "react-router-dom";
import { Dic, classOf, Style } from "../../assets/state";
import { Card } from "./Card";

const style = {
  itemLink: {
    "& a": {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 5,
      paddingBottom: 5
    }
  },
  gridFit150: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gridGap: 16
  }
};

const { classes } = Style(style);

const Links = () => {
  return (
    <div className={classes.gridFit150}>
      <Card title={Dic.footer.titleFooter2}>
        <nav className={classes.itemLink}>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title1}
          </Link>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title2}
          </Link>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title3}
          </Link>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title4}
          </Link>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title5}
          </Link>
        </nav>
      </Card>
      <Card title={Dic.footer.titleFooter3}>
        <nav className={classes.itemLink}>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title6}
          </Link>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title7}
          </Link>
        </nav>
      </Card>
      <Card title={Dic.footer.titleFooter4}>
        <nav className={classes.itemLink}>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title8}
          </Link>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title9}
          </Link>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title10}
          </Link>
          <Link to="/" className={classOf.navLink}>
            {Dic.footer.links.title11}
          </Link>
        </nav>
      </Card>
    </div>
  );
};

export default Links;
