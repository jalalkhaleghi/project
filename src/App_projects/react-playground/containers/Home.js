import React from "react";
import { Grid, Row, Col, Style, css } from "../assets/state";
import SectionProducts from "../components/HomePage/SectionProducts";
import GroupingSidbar from "../components/HomePage/GroupingSidbar";

const Home = (props) => {
  const [show, setShow] = React.useState(props.show);
  React.useEffect(() => {
    setShow(props.show);
  }, [props.show]);
  const openFilter = () => {
    props.openFilter();
  };
  return (
    <section>
      <Grid fluid>
        <Row>
          <Col
            md={2}
            className={[classes.card, show ? classes.active : null].join(" ")}
          >
            <GroupingSidbar closeFilter={openFilter} />
          </Col>
          <Col md={10}>
            <SectionProducts />
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

const style = {
  card: {
    position: "sticky",
    top: 80,

    padding: 0,
    // paddingBottom: 200,
    "& > div:first-child": {
      borderBottom: "1px solid rgba(0,0,0,.1)",
      "& h5": {
        fontSize: 18,
      },
    },
    "@media(min-width:576px)": {
      height: "calc(100vh - 100px)",
    },
    "@media(max-width:576px)": {
      transition: "all .3s ease-in-out",
      transform: "translateX(-100%)",
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 9999,
      width: 280,
      borderRadius: 0,
      extend: css.card,
    },
  },
  active: {
    transform: "translateX(0)",
  },
};

const { classes } = Style(style);

export default Home;
