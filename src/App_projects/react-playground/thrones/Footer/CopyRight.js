import React from "react";
import { Link } from "react-router-dom";
import {
  classOf,
  Dic,
  Grid,
  LightenDarkenColor,
  Style
} from "../../assets/state";

const style = {
  copyright: {
    paddingTop: 16,
    paddingBottom: 16,
    borderTop: "1px solid #ddd",
    color: "#fff",
    backgroundColor: "#333"
  },
  nameCo: {
    "&:hover,&:focus": {
      color: LightenDarkenColor("#333", -80)
    }
  }
};

const { classes } = Style(style);

const CopyRight = () => {
  return (
    <section className={classes.copyright}>
      <Grid>
        <p className={classOf.text_center}>
          <Link
            to="https://siteName.com/"
            className={classes.nameCo}
            target="_blank"
          >
            {Dic.footer.copyRight}
          </Link>
        </p>
      </Grid>
    </section>
  );
};

export default CopyRight;
