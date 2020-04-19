import React from "react";
import { Style, css, axios, classOf } from "../../assets/state";
import { Link, useParams } from "react-router-dom";

const Filter = () => {
  const params = useParams();
  const [filter, setFilter] = React.useState([]);
  // console.log(params);
  React.useEffect(() => {
    axios
      .get("/api/v3/product_categories/")
      .then((res) => {
        console.log(res);
        setFilter(res.data.info.productCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);
  return (
    <div className={classes.filter}>
      {filter.length > 0 &&
        filter.map((item) => {
          return (
            <Link
              to={"/category/" + item.code}
              key={item._id}
              className={classOf.navLink}
            >
              {item.name}
            </Link>
          );
        })}
    </div>
  );
};

const { classes } = Style({
  filter: {
    extend: css.card,
    "@media(min-width:922px)": {
      position: "sticky",
      top: 80,
      height: "calc(100vh - 100px)",
    },
    "@media(max-width:922px)": {
      transition: "all .3s ease-in-out",
      transform: "translateX(-100%)",
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 9999,
      width: "100%",
    },
  },
});

export default Filter;
