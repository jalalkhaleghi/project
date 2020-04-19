import React from "react";
import SocialNetwork from "./SocialNetwork";
import {
  Vars,
  Icon,
  Dic,
  Style,
  classOf,
  Search,
  Grid,
  Row,
  Col
} from "../../assets/state";

const style = {
  news: {
    backgroundColor: Vars.main_color,
    paddingTop: 32,
    paddingBottom: 32,
    color: "#fff"
  },
  flexSocial: {
    flexWrap: "wrap",
    "@media(max-width:544px)": {
      justifyContent: "center",
      marginBottom: 10
    }
  }
};

const { classes } = Style(style);

const News = () => {
  return (
    <section className={classes.news}>
      <Grid>
        <Row>
          <Col md={7}>
            <div className={[classOf.flexCenter, classes.flexSocial].join(" ")}>
              <SocialNetwork />
              <p>{Dic.footer.social}</p>
            </div>
          </Col>
          <Col md={5}>
            <Search
              placeholder={Dic.footer.placeholderNews}
              icon={<Icon icon="mailbox" size={25} />}
            />
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

export default News;
