import React from "react";
import { Style } from "../";
import srcImg from "../assets/images/apples-bananas-basket-bunch-235294.jpg";

const { classes } = Style({
  figure: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "250% 250%",
    width: 400,
    height: 270,
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

const Zoom = (props) => {
  const [background, setBackground] = React.useState({
    backgroundImage: "",
    backgroundPosition: "0 0",
  });
  const { largImg, smallImg } = props.images;
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
      backgroundImage: `url(${smallImg})`,
    });
  };
  const resetZoom = () => {
    setBackground({ backgroundImage: "" });
  };
  return (
    <div
      style={background}
      className={classes.figure}
      onMouseMove={(e) => handleZoom(e)}
      onMouseLeave={resetZoom}
    >
      <img src={largImg} />
    </div>
  );
};

export default Zoom;
