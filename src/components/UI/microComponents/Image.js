import React from "react";

const Image = props => {
  return (
    <picture>
      {props.smSrc && (
        <source media="(max-width: 799px)" srcSet={props.smSrc} />
      )}
      {props.lgSrc && (
        <source media="(min-width: 800px)" srcSet={props.lgSrc} />
      )}
      <img src={props.src} alt={props.alt} className={props.className} />
    </picture>
  );
};

export default Image;
