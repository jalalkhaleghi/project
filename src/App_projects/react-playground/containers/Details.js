import React from "react";
import { Grid, Row, Col } from "../assets/state";
import DetailsProduct from "../components/DetailsPage/DetailsProduct";

const Details = props => {
  return (
    <section>
      <Grid>
        <Row>
          <Col md={5}>
            <DetailsProduct {...props} />
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

export default Details;
