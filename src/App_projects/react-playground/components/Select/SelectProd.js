import React from "react";
import { Grid, Style, Modal, Vars, Row, Col, axios } from "../../assets/state";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import img from "../../assets/images/h1.png";
import img_hover from "../../assets/images/h2.png";
import img1 from "../../assets/images/s1.png";
import img1_hover from "../../assets/images/s2.png";
import img2 from "../../assets/images/c1.png";
import img2_hover from "../../assets/images/c2.png";
import { Link } from "react-router-dom";

// import img_prod1 from "../../assets/images/13981225143834_سینه-بی-استخوان.png";
import Caw from "./Caw";
import Chicken from "./Chicken";
import Sheep from "./Sheep";

// import caw from "../assets/images/caw1.svg";

const SelectProd = props => {
  const [show, setShow] = React.useState(false);
  const [product, setProduct] = React.useState([]);
  const showModal = () => {
    setShow(true);
  };
  React.useEffect(() => {
    axios
      .post("/api/v3/products_search")
      .then(res => {
        console.log(res);
        setProduct(res.data.info.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <section>
      <Grid>
        <Modal
          show={show}
          clicked={() => setShow(false)}
          modalClass={classes.modalDialog}
          className={classes.modal}
        >
          <div className={classes.grid}>
            {product.length > 0 &&
              product.map(prod => {
                return (
                  <Link to="/" key={prod._id}>
                    <img src={prod.images[0].url} />
                  </Link>
                );
              })}
          </div>
        </Modal>
        <Tabs>
          <Row>
            <Col md={3}>
              <TabList>
                <Tab>
                  <img className={classes.img} src={img} />
                  <img
                    className={[classes.img, classes.img_hover].join(" ")}
                    src={img_hover}
                  />
                </Tab>
                <Tab>
                  <img className={classes.img} src={img2} />
                  <img
                    className={[classes.img, classes.img_hover].join(" ")}
                    src={img2_hover}
                  />
                </Tab>
                <Tab>
                  <img className={classes.img} src={img1} />
                  <img
                    className={[classes.img, classes.img_hover].join(" ")}
                    src={img1_hover}
                  />
                </Tab>
              </TabList>
            </Col>

            <Col md={8}>
              <TabPanel>
                <h5 className={classes.title}>انتخاب قطعات گوشت مرغ</h5>
                <Chicken
                  clicked={() => setShow(true)}
                  className={classes.svgAreas}
                  classSvg={classes.svgBack}
                  {...props}
                />
              </TabPanel>
              <TabPanel>
                <h5 className={classes.title}>انتخاب قطعات گوشت گاو</h5>
                <Caw
                  clicked={() => setShow(true)}
                  className={classes.svgAreas}
                  classSvg={classes.svgBack}
                  {...props}
                />
              </TabPanel>
              <TabPanel>
                <h5 className={classes.title}>انتخاب قطعات گوشت گوسفند</h5>
                <Sheep
                  clicked={() => setShow(true)}
                  className={classes.svgAreas}
                  classSvg={classes.svgBack}
                  {...props}
                />
              </TabPanel>
            </Col>
          </Row>
        </Tabs>
      </Grid>
    </section>
  );
};

const style = {
  img_hover: {
    display: "none"
  },
  svgAreas: {
    position: "relative",
    zIndex: 3,
    "& path": {
      opacity: 0.2,
      cursor: "pointer",
      "&:hover": { fill: Vars.main_color, opacity: 1 }
    }
  },
  svgBack: {
    fill: "#ccc",
    stroke: "#bbb",
    strokeWidth: 3,
    position: "absolute",
    top: 0,
    left: 0
  },
  modalDialog: {
    maxWidth: 700,
    marginBottom: 30
  },
  grid: {
    display: "grid",
    gridGap: 20,
    gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))"
  },
  title: {
    position: "absolute",
    top: 50
    // left: "50%",
    // transform: "translateX(-50%)"
  }
};

const { classes } = Style(style);

export default SelectProd;
