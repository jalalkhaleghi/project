import React from "react";
import { Grid, Row, Col } from "../assets/state";
import Products from "../components/CategoryPage/Products";
import Filter from "../components/CategoryPage/Filter";

const Category = props => {
  return (
    <section>
      <Grid fluid>
        <Row>
          <Col xs={3}>
            <Filter />
          </Col>
          <Col xs={9}>
            <Products {...props} />
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

export default Category;
