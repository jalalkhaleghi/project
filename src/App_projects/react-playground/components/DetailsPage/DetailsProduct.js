import React from "react";
import { axios, Style } from "../../assets/state";

const DetailsProduct = props => {
  const [detail, setDetail] = React.useState("");
  React.useEffect(() => {
    axios.get("/api/v3/products/" + props.match.params.id).then(res => {
      console.log(res);
      setDetail(res.data.info.product);
    });
  }, []);
  return <div className={classes.detailProduc}>{detail.discount_amount}</div>;
};

const { classes } = Style({});

export default DetailsProduct;
