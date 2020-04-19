import React from "react";
import { classOf, Style, axios, Vars, Icon } from "../../assets/state";
import { Link } from "react-router-dom";

const GroupingSidbar = (props) => {
  const [grouping, setGrouping] = React.useState([]);
  React.useEffect(() => {
    axios.get("/api/v3/product_categories").then((res) => {
      // console.log(res);
      setGrouping(res.data.info.productCategories);
    });
  }, []);
  return (
    <div className={classOf.card}>
      <div className={classes.close} onClick={props.closeFilter}>
        X
      </div>
      <nav>
        {grouping.map((group) => {
          return (
            <Link
              className={[classOf.navLink, classes.navLink].join(" ")}
              key={group._id}
              to={"/category/" + group.code}
            >
              <Icon icon={group.icon} size="20" />
              {group.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

const { classes } = Style({
  list: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    "& li + li": {
      marginTop: 6,
    },
    "& a": {
      display: "block",
      padding: 3,
    },
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 32,
    marginBottom: 16,
    borderBottom: "1px solid #eee",
    "&:after": {
      content: '""',
      position: "relative",
      top: 11,
      backgroundColor: Vars.main_color,
      display: "block",
      width: 60,
      height: 2,
    },
  },
  itemClass: {
    padding: 10,
  },
  navLink: {
    cursor: "pointer",
    transition: "margin .3s ease-in-out",
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    "&:hover": {
      color: Vars.main_color,
      marginLeft: 3,
    },
    "& img": {
      width: 28,
      height: 28,
      marginRight: 8,
    },
    "& svg": {
      color: "#4e4e4e",
    },
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: "5px 12px",
  },
});

export default GroupingSidbar;
