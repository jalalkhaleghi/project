import React from "react";
import Carousel from "react-multi-carousel";
import {
  axios,
  classLocal,
  classOf,
  Style,
  Icon,
  Spinner,
  Vars,
  Dic
} from "../../assets/state";

import AddCart from "./AddCart";

const SectionProducts = () => {
  const [prods, setProds] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios.get("/api/v3/max_sell_products?page=1&per_page=8").then(res => {
      console.log(res);
      setProds(res.data.info.products);
      setLoading(false);
    });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return loading ? (
    <Spinner />
  ) : (
    prods.length && (
      <Carousel responsive={responsive}>
        {prods.map(prod => {
          return (
            <div
              className={[classOf.card, classOf.mr_2].join(" ")}
              key={prod._id}
            >
              {prod.images.length > 0 && (
                <div className={classes.cardImage}>
                  <img src={prod.images[0].url} />
                </div>
              )}
              <div className={classes.cardBody}>
                <ul className={classes.list}>
                  <li>
                    <h6>{prod.name}</h6>
                  </li>
                  <li>
                    <AddCart
                      id={prod._id}
                      image={prod.images.length > 0 && prod.images[0].url}
                      name={prod.name}
                    />
                  </li>
                </ul>
                <ul
                  className={[
                    classes.list,
                    classOf.mt_3,
                    classes.listLast
                  ].join(" ")}
                >
                  <li>
                    <span className={classes.price_before}>
                      <del>
                        {prod.regular_price} {Dic.toman}
                      </del>
                      <small className={classOf.ml_1}>قیمت بازار</small>
                    </span>
                    <span className={classes.price}>
                      {prod.discount_price} {Dic.toman}
                    </span>
                  </li>
                  <li>
                    <div className={classes.addFavorit}>
                      <Icon icon="heart" icon="20" />
                      افزودن به علاقه مندی ها
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </Carousel>
    )
  );
};

const style = {
  list: {
    display: "flex",
    fontSize: 12,
    alignItems: "center",
    justifyContent: "space-between"
  },
  price_before: {
    color: "#909090",
    display: "table",
    position: "relative",
    fontSize: ".85rem",
    marginBottom: 5
  },
  price: {
    color: "red",
    fontSize: "1rem"
  },
  addFavorit: {
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  listLast: {
    alignItems: "flex-end"
  }
};

const { classes } = Style(style);

export default SectionProducts;
