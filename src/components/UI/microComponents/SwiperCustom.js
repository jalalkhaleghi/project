import React from "react";
import Swiper from "react-id-swiper";
import { Style, Icon } from "../";

const styles = {};

const { classes } = Style(styles);

const SwiperCustom = props => {
  const params = {
    slidesPerView: 3
  };
  return (
    <Swiper {...params} shouldSwiperUpdate>
      {props.items.map((item, id) => {
        return <div key={id}>{item}</div>;
      })}
    </Swiper>
  );
};

export default SwiperCustom;
