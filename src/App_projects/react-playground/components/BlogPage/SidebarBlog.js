import React from "react";
import { axios, Style, Vars } from "../../assets/state";

const SidebarBlog = (props) => {
  const [nav, setNav] = React.useState([]);
  React.useEffect(() => {
    axios.get("/api/v3/cms/categories").then((res) => {
      setNav(res.data.info.categories);
    });
  }, []);
  const selectMenu = (id) => {
    props.selectNav(id);
    props.history.replace("/blog/" + id);
  };
  return (
    <div className={classes.sidebar}>
      <nav>
        {nav.map((item) => {
          return (
            <span
              className={classes.menuItem}
              key={item._id}
              onClick={() => selectMenu(item.code)}
            >
              {item.title}
            </span>
          );
        })}
      </nav>
    </div>
  );
};

const { classes } = Style({
  sidebar: {
    top: 80,
    position: "sticky",
  },
  menuItem: {
    display: "block",
    paddingTop: 7,
    paddingBottom: 7,
    cursor: "pointer",
    "&:hover": {
      color: Vars.main_color,
    },
  },
});

export default SidebarBlog;
