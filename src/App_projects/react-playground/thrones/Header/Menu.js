import React from "react";
import { useLocation } from "react-router";
import { Dic, Style, Navbar, NavItems } from "../../assets/state";

const styles = {
  navItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  nav_link: {
    display: "flex !important",
    alignItems: "center",
    flex: "1 0 auto",
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10,
    color: "inherit",
    "@media(min-width:976px)": {
      minWidth: 80,
      textAlign: "center",
      justifyContent: "center",
      paddingTop: 5,
      paddingBottom: 5
    }
  }
  // navbarNav: {
  //   "& >li:nth-child(2)": {
  //     display: "none"
  //   }
  // }
};

const { classes } = Style(styles);

const Menu = props => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   axios.get("api/v3/setting").then(response => {
  //     // console.log(response);
  //     setMenu(response.data.info.menuData);
  //   });
  // }, []);
  let menuLink = null;
  if (props.menu) {
    menuLink = props.menu.map(item => {
      return (
        <NavItems
          key={item._id}
          link={"/" + item.slug}
          classLink={[classes.nav_link, "nav_link"].join(" ")}
        >
          {item.menu_name}
        </NavItems>
      );
    });
  }
  const location = useLocation();
  return (
    <Navbar {...props} classNav={classes.navbarNav}>
      <NavItems
        link="/"
        exact
        active="active"
        classLink={[classes.nav_link, "nav_link"].join(" ")}
      >
        {Dic.header.menu_home}
      </NavItems>
      {menuLink}

      <NavItems
        link="/blog"
        classLink={[classes.nav_link, "nav_link"].join(" ")}
      >
        {Dic.header.blog}
      </NavItems>
      <NavItems
        link="/hook_count"
        classLink={[classes.nav_link, "nav_link"].join(" ")}
      >
        شمارنده
      </NavItems>
      <NavItems
        link="/test"
        classLink={[classes.nav_link, "nav_link"].join(" ")}
      >
        تست
      </NavItems>
      <NavItems
        link="/books"
        classLink={[classes.nav_link, "nav_link"].join(" ")}
      >
        لیست
      </NavItems>
    </Navbar>
  );
};

export default Menu;
