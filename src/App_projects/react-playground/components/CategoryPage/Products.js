import React from "react";
import { Style, classOf, axios } from "../../assets/state";
import { useParams } from "react-router-dom";

const Products = (props) => {
  const params = useParams();
  const [product, setProduct] = React.useState([]);
  const [cid, setCid] = React.useState(params.id ? params.id : "");
  React.useEffect(() => {
    axios
      .post("/api/v3/products_search?", {
        cid: cid,
      })
      .then((res) => {
        console.log(res);
        setProduct(res.data.info.products);
      });
  }, []);
  const goDetails = (id, slug) => {
    props.history.replace("/details/" + slug + "/" + id);
  };
  return (
    <div className={classes.products}>
      {product.length > 0 &&
        product.map((prod) => {
          return (
            <div className={classOf.card} key={prod._id}>
              <p>{prod.category_name}</p>
              {prod.images.length > 0 && (
                <div
                  className={[classOf.cardImage, classes.cardImage].join(" ")}
                  onClick={() => goDetails(prod.code, prod.slug)}
                >
                  <img src={prod.images[0].url} />
                </div>
              )}
              <div className={classOf.cardBody}>
                <ul className={classes.list}>
                  <li>{prod.name}</li>
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const { classes } = Style({
  products: {
    display: "grid",
    gridGap: 20,
    gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
  },
  cardImage: {
    cursor: "pointer",
  },
});

export default Products;
