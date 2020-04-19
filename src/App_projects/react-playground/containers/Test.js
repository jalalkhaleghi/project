import React from "react";
import { Grid, Style } from "../assets/state";
import CockpitPage from "../components/CockpitPage";
import srcImg from "../assets/images/apples-bananas-basket-bunch-235294.jpg";

const Test = () => {
  const [background, setBackground] = React.useState({
    backgroundImage: "",
    backgroundPosition: "0 0",
  });
  const handleZoom = (e) => {
    const {
      left,
      top,
      scrollTop,
      width,
      height,
    } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackground({
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${srcImg})`,
    });
  };
  const resetZoom = () => {
    setBackground({ backgroundImage: "" });
  };
  return (
    <section>
      <Grid>
        {/* <CockpitPage /> */}
        <div
          style={background}
          className={classes.figure}
          onMouseMove={(e) => handleZoom(e)}
          onMouseLeave={resetZoom}
        >
          <img src={srcImg} />
        </div>
      </Grid>
    </section>
  );
};

const { classes } = Style({
  figure: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "250% 250%",
    width: 400,
    height: 400,
    "& img": {
      height: "100%",
      objectFit: "scale-down",
    },
    "&:hover": {
      "& img": {
        opacity: 0,
        visibility: "hidden",
      },
    },
  },
});

export default Test;
