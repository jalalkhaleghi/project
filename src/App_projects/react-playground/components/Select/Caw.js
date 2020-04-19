import React from "react";
import { Style } from "../../assets/state";

const { classes } = Style({
  blockSvg: {
    position: "relative",
    width: 500,
    "@media(min-width:576px)": {
      width: 800
    }
  }
});

const Caw = props => {
  const selectPart = id => {
    console.log(id);
    props.clicked();
  };
  return (
    <div className={classes.blockSvg}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 800 800"
        style={{ enableBackground: "new 0 0 800 800" }}
        xmlSpace="preserve"
        className={props.classSvg}
      >
        <style type="text/css" />
        <g>
          <g>
            <g>
              <path
                className="st7"
                d="M295,317.2C303,317.1,294.9,317.2,295,317.2L295,317.2z"
              />
              <path
                className="st0"
                d="M600.4,361.1l0-0.5l-0.1-0.4c-0.4-2.1-1.7-5.4-7.7-10.5c-4-3.4-17.3-18.8-21.5-24.2
				c-1.1-4.7-5.2-9.9-10.7-13.6c4.4-7.3,2.6-14.4,2.1-15.4c-0.9-2-4.6-7.4-4.6-7.4l-2.7,6.7c-0.4,1.8-3.3,6.2-4.1,7.6
				c0.5-3.5,2.1-10.2,0.7-14.1c0,0-0.9-2.7-2.3-4.2c-0.8-0.8-3.3-2.8-3.3-2.8l-2.1,7.7c-2.6,9.8-10.3,17.4-11.7,18.5
				c-0.3,0.3-0.8,0.6-1.2,0.8c-0.1,0-0.2,0.1-0.3,0.1c-1-0.5-2.3-1.3-3.4-2.3c-8.8-8.2-16.7-11-23.4-8.3l-2.2,1.2
				c0,0-1.8,8.7,1.6,14.5c0.2,0.3,0.3,0.6,0.4,0.9c-4.9,1.1-9.8,2.2-10.8,2.4c-1.5,0.2-2.9,0.6-4.1,1l-0.7,0.2
				c-0.2,0.1-0.4,0.1-0.6,0.2l-0.6,0.1c-0.1,0-0.2,0-0.3,0.1l-0.1,0c-0.1,0-0.2,0-0.3,0c-2.6,0.3-6.5-0.4-10-1.1
				c-1.6-0.3-3.1-0.6-4.5-0.8l-0.3,0l-0.3,0c-15.1,0.1-28.9,1.1-42.1,3.1c-12.3,1.8-41.8,3.9-54.9,4.6l-1.5,0.1
				c-11.4,0.6-22.2,1.2-33.1-1c-10.3-2.1-20.8-3.3-29.8-4.2c-16.5-1.7-29.1-1.3-40.9,1.4c-4.6,1-9,2.9-12.2,4.4
				c-2,0.9-3.7,2.2-5.3,3.4c-0.8,0.6-1.6,1.2-2.3,1.7c-1.1,0.7-2.1,1.4-3.1,2.2c-4.4,2.7-7.7,6-10,9.9c-4.4,7.4-5,15.4-5.1,20.8
				c-0.1,4.1-0.1,8.3-0.1,12.4c0,6,0,12.1-0.2,18.2c-0.1,4-0.7,7.9-1.2,12.1c-0.1,0.9-0.2,1.8-0.4,2.6c-2.5,0.9-4.4,2.6-5.6,4.7
				c-1.4,2.5-3,5.6-4.1,8.8c-0.8,2.4-1.4,4.9-2,7.2c-0.5,1.9-0.9,3.8-1.5,5.6c-0.9,3.1-2.5,5.1-4.8,6.3c-1.4,0.7-2.1,1.9-2.4,2.6
				l-9.2,4.3l7.8,3.6c0.2,0.1,0.3,0.2,0.4,0.2c0.6,0.3,1.7,0.9,3.2,0.7c1.6-0.2,3.2-0.4,4.9-0.8c2.1-0.6,10.2-6.7,16-12.4
				c-0.9,1.3-1.7,2.6-2.5,3.9c-1.6,2.6-2.8,7.7-2.7,9.7c0,0.2,0,0.4,0,0.7c0,0.5,0,1.2,0.1,2c0.8,5.6,1.7,11.2,2.5,16.4
				c1.7,10.9,3.3,23.8,2.6,36.6c-0.1,0.9-0.1,2.3,0,3.7c0.2,2.3,2.1,4.3,5.5,5.9c0.2,1.1-0.7,3-0.5,4.1c0.1,0.8,0.2,1.6,0.3,2.3
				c0.6,4,3.1,7.1,7.1,8.7c4.7,1.8,9.9,2.4,16.4,1.7c3.4-0.4,6-1.8,7.7-4.2c2.3-3.3,2.2-7.1-0.4-11.3c-1.3-2.1-2.8-4.1-4.2-6
				c-0.7-1-1.4-1.9-2.1-2.9c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-1.2-0.2-2.4-0.4-3.7c-0.7-6.9-1.4-14-1.8-21
				c-0.3-4.7,0.4-9.3,1.9-13.7c0.7,2.5,1.5,5,2.5,7.5c3.5,8.6,7.4,18.8,10.4,29.1c0.5,1.7,1.8,6.1,5.8,7.1c0.1,0.6,0.1,1.1,0.2,1.6
				l0.1,0.4c1.2,7.4,6.5,12.3,13.9,12.7c3.6,0.2,7.1,0.1,10.6,0l0.3,0c1.7-0.1,3.3-0.6,4.6-1.1c3.6-1.3,5.3-4.8,4.1-8.3l0-0.1
				c-0.5-1.6-1.2-3.5-2.4-5.1c-2.7-3.4-5.5-6.7-8.2-10l-1.6-1.8c-0.6-0.7-1.1-1.3-1.7-1.8c-0.7-0.8-1.4-1.5-1.8-2.1
				c-3.5-6.3-5.9-12-7.3-17.7c-2.3-9-0.9-16.4,4.5-23.4c2.4-3.1,4.4-6.5,6.4-9.7c0.8-1.3,1.6-2.6,2.4-3.8
				c0.9,0.2,25.9,14.8,64.2,17.8c32.2,2.5,57.1-6.4,61.5-6.9l0.1,0.9c0.5,4.6,1.1,9.4,1.7,14.1c0.2,1.7,0.6,3.3,0.9,4.9
				c0.4,1.8,0.7,3.5,0.9,5.2c0.7,6.5,1.2,13.5,0.3,20.5c-0.4,3.1-0.8,6.3-1,9.5c-0.2,3.1,0.9,5.7,3.1,7.3c-0.5,6,2.2,11.3,7.5,14.3
				c4.3,2.4,8.8,3.7,13.5,3.7c1.8,0,3.7-0.2,5.6-0.6c3.7-0.7,5.5-2.6,6.3-4.1c0.4-0.7,0.8-1.6,0.9-2.8c6.2,3.1,12.5,2.7,18.5,2.1
				c2.1-0.2,3.9-1.3,4.9-3c1.1-1.8,1.2-4,0.4-6.1l0-0.1c-0.6-1.6-1.3-3.3-2.5-4.9c-1.9-2.5-4-5-5.9-7.4c-1.1-1.3-2.2-2.7-3.2-4
				l-0.1-0.1c-0.1-0.1-0.3-0.4-0.4-0.5c-0.2-1-0.4-2-0.6-3.1c-1-4.6-2-9.3-2.7-14c-0.4-2.8-0.8-6-0.3-8.4c2.5-10.9,4-21.8,4.4-32.3
				c0-0.1,0-0.2,0-0.2c0,0,0.1-0.1,0.2-0.1c6.6-3.8,11.8-9.1,15.7-15.7c0.2-0.4,0.5-0.7,0.7-0.8c9.1-5.4,15.8-12.7,20.1-21.7
				l0.2-0.5l0.1-0.6c0.1-0.4,0.1-0.7,0.2-1l0.2-0.7c0-0.1,0-0.2,0.1-0.3c0-0.1,0-0.2,0.1-0.3l0-0.1c0.1-0.2,0.1-0.4,0.2-0.6
				c0-0.1,0.1-0.3,0.1-0.4c0.1-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.1-0.3,0.2-0.4c0.1-0.2,0.1-0.3,0.2-0.5c0.1-0.2,0.1-0.3,0.2-0.5
				c0.1-0.1,0.1-0.3,0.2-0.4l0-0.1c0.1-0.1,0.1-0.3,0.2-0.4l0.3-0.5c0.1-0.1,0.1-0.2,0.2-0.4l0.1-0.2c0.3-0.5,0.5-0.9,0.8-1.3
				l0.1-0.2c0.1-0.2,0.3-0.4,0.4-0.6l0.1-0.2c0.1-0.2,0.3-0.4,0.5-0.6l0.2-0.2c0.2-0.2,0.3-0.4,0.5-0.6l0.2-0.2
				c0.2-0.2,0.4-0.4,0.5-0.6l0.2-0.2c0.2-0.2,0.4-0.4,0.6-0.6l0.1-0.2c0,0,0.1-0.1,0.1-0.1c2.4-1.3,12.1-6.8,20.4-13.3
				c0.5,0.1,1.1,0.2,1.6,0.2c0.4,0.1,0.8,0.1,1.1,0.2l0.4,0.1l0.4,0c0.4,0,9.2-0.5,15.1-1.4c2.6-0.4,6.1-0.9,8.6-1.2
				c3.4,1.6,10.7,4.3,15.7,1.1l0.2-0.1c1.3-0.8,2.6-1.9,3.1-4.1c1.5-0.3,2.8-0.9,3.8-1.9C599.3,371.1,600.8,366.7,600.4,361.1z"
              />
              <path
                className="st2"
                d="M596.4,361.4c0,0,0-3.6-6.1-8.3c-4.8-3.9-19.7-21.4-23-26c-0.2-3.8-5.6-10.5-12.9-14
				c2.9-3.2,6.6-8.7,3.9-16.9c-1.1,5.2-5.6,10.9-6.7,12c-1.1,1.1-2.4,2.5-2.8,3c-1-0.2-2.1-0.3-3.2-0.3c-0.2,0-0.5,0-0.7,0
				c1.1-1.8,1.9-4,2.6-6.4c1.2-3.9,2.4-13.1,0-16c-0.9,12-11.1,22.1-12.9,23.5c-0.8,0.6-2,1.1-2.8,1.3c-0.3,0.1-0.6,0.2-0.9,0.3
				c-1.7-0.5-3.7-1.4-5.6-3.2c-5.1-4.8-14-11.2-20.1-7.7c-0.4,0.9-0.3,5.1,1.8,9.9c3,6.9,6.5,11.2,10.1,14.9c2.2,2.3,2,3.3,4.8,1.5
				c3.1-1.9,4.2-0.8,6.7,0.5c-1.6,0.9-4.5-0.3-6.4,1.7c-2.9,3.1-4.3,2.2-7.1-1.3c-1.6-1.9-6-6.6-8.2-11.2c-5.3,1-9.6,2.2-11.9,2.8
				c-2.7-0.1-5.9,1.4-8.2,1.7c-4.6,0.5-11.1-1.3-15.5-1.8c-13.9,0.1-27.7,1-41.5,3c-12.7,1.9-42.4,4-55.3,4.7
				c-11.9,0.6-23.7,1.4-35.6-1c-9.7-2-19.6-3.1-29.5-4.1c-13.2-1.4-26.5-1.7-39.6,1.3c-3.9,0.9-7.7,2.5-11.4,4.2
				c-2.6,1.2-4.8,3.2-7.2,4.8c-1,0.7-2,1.4-3,2.1c-3.5,2.2-6.6,4.9-8.8,8.7c-3.4,5.8-4.4,12.2-4.5,18.8c-0.1,10.2,0.1,20.4-0.3,30.6
				c-0.2,5.6-1.1,11.1-1.8,16.6c-0.1,0.5-0.7,1.3-1.3,1.4c-2,0.5-3.7,1.5-4.7,3.3c-1.5,2.6-2.8,5.3-3.8,8.1
				c-1.4,4.2-2.2,8.5-3.4,12.7c-1.1,3.7-3.2,6.9-6.8,8.7c-0.5,0.3-0.8,1-1.2,1.6c0.1,0.1-1.5,1.1-2.8,1.7c0.7,0.3,1.1,0.7,1.4,0.6
				c1.5-0.2,3-0.4,4.4-0.7c1.4-0.4,16.3-11.7,19.2-17.3c2.2-4.1,2.8-19.3,2.8-19.3s4.6-3.4,6.4-6c2-2.8,2.5-15.7,2.5-15.7
				s3.5,22.9,0,34.7c-1,2.5-4.1,6.5-5.4,9c-2.2,4.3-5.2,7.9-7.6,12c-1.2,2-2.2,6.3-2.1,7.4c0.1,0.8,0,1.6,0.1,2.3
				c0.8,5.5,1.6,10.9,2.5,16.4c1.9,12.4,3.3,24.9,2.6,37.5c-0.1,1.1-0.1,2.1,0,3.2c0.2,2.2,1.5,2.6,3.7,3.2c0.4,0.1,1.3,0.8,1.6,1.9
				c0.5,2.3-0.4,4.7,0,7c0.4,2.8,2,4.5,4.6,5.5c4.7,1.8,9.6,2,14.5,1.5c1.8-0.2,3.6-0.8,4.8-2.4c1.7-2.4,0.8-4.8-0.5-6.9
				c-1.9-3-4.2-5.8-6.2-8.7c-0.5-0.7-1.2-1.5-1.3-2.3c-0.8-8.4-1.7-16.9-2.2-25.3c-0.4-6.1,0.6-12,3-17.7c1-2.4,2.3-4.6,3.6-7.3
				c0.4,0.7,0.5,0.9,0.5,1.1c1.6,5.3,2.8,10.8,4.9,15.9c3.9,9.7,7.6,19.5,10.6,29.5c0.5,1.9,1.3,4.2,3.4,4.4
				c2.4,0.2,3.2,0.2,3.3,1.9c0,0.7-0.6,2.6-0.5,3.2c0.9,5.5,4.6,9,10.2,9.4c3.5,0.2,7,0.1,10.5-0.1c1.1,0,2.3-0.4,3.4-0.8
				c1.5-0.6,2.2-1.8,1.7-3.3c-0.5-1.4-1-2.9-1.8-4.1c-3.1-4-6.4-7.8-9.7-11.7c-1.3-1.5-3-2.8-3.9-4.5c-3.3-5.9-5.7-13.3-7.3-19.9
				c-2.5-9.8-2-15.1,4.8-25.5c3.2-4.9,6.4-9.8,9.6-14.7c0.3-0.4,1.2-0.8,1.7-0.7c3.3,0.7,20.9,12.5,68.6,17.6
				c19.9,2.1,47.9-5.7,59.3-6.7c2.1-0.2,2.1-0.3,2.3,1.9c0.6,5.6,1.2,11.2,2,16.8c0.5,3.4,1.5,6.8,1.8,10.2
				c0.8,7.1,1.2,14.2,0.3,21.4c-0.4,3.1-0.8,6.2-1,9.3c-0.1,1.8,0.9,3,2.6,3.7c1.2,0.5,2.1,1.6,1.6,2.6c-2.4,5.2,0.1,9.1,4.4,11.5
				c5.1,2.9,10.5,3.8,16.3,2.6c3.6-0.7,4.8-2.9,3.6-6.4c-1.7-4.8-4.9-8.6-7.9-12.5c-0.6-0.7-1.1-1.6-1.1-2.5
				c-0.2-7.4-1.1-16.3-1-23.7c0.1-2.5,0.9-12.4,1.3-17.2c0.4-8.3,1.6-7.3,1.9-4.7c-0.2,5.1,0,14,0.5,18.8c0.5,4.8,1.2,8.1,1.7,12.9
				c0.5,4.9,0.7,9.9,1,14.9c0.1,1.9,2.4,1.6,4.1,2.5c0.6,0.4-0.1,2.6,0.1,3.3c1,3.2,2.2,6.3,5.3,7.8c5.3,2.7,10.9,2.4,16.5,1.8
				c1.9-0.2,2.7-1.9,2-3.6c-0.5-1.4-1.1-2.9-2-4c-3-3.8-6.1-7.5-9.1-11.3c-0.5-0.6-1-1.3-1.2-2c-1.2-5.8-2.5-11.6-3.4-17.5
				c-0.5-3.3-0.9-6.8-0.2-9.9c2.4-10.4,3.9-20.9,4.3-31.6c0.1-1.8,0.7-2.8,2.2-3.7c6-3.5,10.8-8.2,14.2-14.3
				c0.5-0.9,1.3-1.7,2.1-2.2c8.4-5,14.6-11.6,18.5-20c1-6.2,4.1-10.3,8.9-15.1c3.3-1.8,13.5-8.5,21.4-14.9c0.2,0,2.1,0.4,4.4,0.8
				c5.7,0.6,17.7-2.2,24.7-2.7c3.7,2.1,14.8,4.8,14.4-1.1c-6.4-0.4-12.2-4.1-12.2-4.1s7.6,3.4,13.4,2.6c1.4-0.2,2.5-0.2,3.9-1.3
				C597,367.5,596.4,361.4,596.4,361.4z M556.2,335.2c-1-0.1-7.9-2-9.6-3.2c0.6-0.2,4.5-1.3,5.8-1.6c0.8-0.2,2.9-0.9,3.8-0.9
				c1.6,0,3.1,0.7,3.8,1.2c0.7,0.5,1.6,2.2,1.6,2.2C560.2,334.2,558.1,335.4,556.2,335.2z M559,325.9c-1.1-0.6-2.4-0.8-3.7-0.8
				c-1.1,0-6.4,0.5-6.4,0.5s7.4-2.6,9.9-1.9c2.5,0.8,2.9,3.6,3.7,5.9C562.6,329.6,561.1,327,559,325.9z M594.8,363.4
				c-0.7,1.1-2.6,1.5-3.5,0.8c-1.9-1.4-3.6-4-3.6-6.8c0,0,2.2,2.7,3.5,3.5c0.9,0.6,3,0.7,3.4-0.7
				C595.2,361.2,595.5,362.3,594.8,363.4z"
              />
            </g>
            <path
              className="st0"
              d="M545.2,377.2c-10.1-1-18.9-5.1-23.6-10.5c-8.1-9.4-7.1-22-6.6-23.3l-0.6,0.1c-0.3,0.5-0.7,1.1-1,1.6
			c-0.6,3.7-1.6,14.6,5.9,23.3c4.7,5.5,12.7,8.6,22.1,9.6c1.1,0.1,2.2,0.2,3.3,0.3C544.5,377.9,545.2,377.5,545.2,377.2z"
            />
          </g>
        </g>
      </svg>

      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsxlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 800 800"
        style={{ enableBackground: "new 0 0 800 800" }}
        xmlspace="preserve"
        className={props.className}
      >
        <g>
          <g>
            <path
              id={12}
              className="st7"
              d="M285.8,449.1c-3.9,2.3-14,6.6-20.2,10.5c1.6,7,2.5,9,4.3,14.6c2.3,7.8,4.2,11.1,6.1,16.7l10.7,1.3
			c-4.2-15.2-4.3-14.8-4.4-20.2c-0.7-9.5,9-21.9,15.6-30.4C296.9,442.6,287.2,448.3,285.8,449.1z"
            />
            <path
              id={13}
              className="st7"
              d="M281.7,507.5c0,0,3.3-0.5,4-0.2c0.7,0.3,1.6,1.5,1.9,2.1c1,2.3-0.5,4.8,0.3,7.4c0.6,2,1.3,3.9,4.1,5.6
			c7.3,1.2,9,1.5,12.8-0.8c1.9-1.1-0.6-4.4-1.4-5.5c-0.7-1-3.8-3.9-4.6-4.8c-2.8-2.9-7.2-8.8-8.2-10.3c-1-1.6-2.2-3.8-3.2-5.4
			l-10.3-1.4C278.6,498.7,280.5,502.7,281.7,507.5z"
            />
            <path
              id={16}
              className="st4"
              d="M246.2,343.8c0,0-3.4,4.3-3.4,4.3c-3,4.6-3.6,5.6-3.5,11c0.1,7.7-0.4,16.5-0.4,16.5s-0.4,10.6-0.4,10.6
			c-0.6,7.6-0.8,12-1.2,20.2c0.4-0.4,5.8-8,5.9-10C246,356.1,246.3,346.4,246.2,343.8z"
            />
            <path
              id={8}
              className="st7"
              d="M477.6,340.5c-0.5-6.8-0.6-5.4-1.2-12.8c-1.2,0.2-43.2,2.2-44.4,2.3c-5.3,0.8-13.9,0.6-19.2,1.5
			c-1.9,0-4.4,0.4-5,0.4c-2.9,0.2-14,1.5-20.8,1.7c-6.3,0.2-24.7,0.6-27.3,0.8c-3.3,0.2-19.5-0.6-26.1-1.7
			c-0.6-0.1-18.1-2.2-18.1-2.3c-12-1.4-17.4-3.4-29.4-1.9c-23.9,3-32,8.7-32.9,13.6c41.2-1.8,130.8,2.6,170.3,1.7
			C445.5,343.4,462.4,341.4,477.6,340.5z"
            />
            <path
              id={3}
              className="st4"
              d="M509.6,400.1c-26.9-19.5-31.2-54.8-31.2-54.8s-13.3,0.6-16.9,1.1c-6.7,10.8-18.6,37.8-22,50.5
			c-4.8,17.9-5.9,25.3-6.7,32.5c0,0.3,0.2,13.1,1.4,13.1c13.3,0,22.9,0.6,36-3.2C489.4,433.6,511.9,401.7,509.6,400.1z"
            />
            <path
              id={9}
              className="st4"
              d="M453.9,351.8c2.6-3.9,2.6-5,2.6-5s-49.8,2.3-70.6,1.2c-1.6-0.1-9.1,15.3-12.7,15.5
			c-30.7,1.2-63.8-3.5-69.5-4.4c5.1,17.5,4.6,20.8,6.7,40.2c0.2,14.3,1.4,14.8-1.8,26.4c-1.2,4.7-4.8,10.5-4.4,10.6
			c15.2,3.7,42.1,12.6,59.2,14.9c29.1,3.9,64.4-7.3,64.4-7.3s-0.1-1.1-0.5-6.4C426.2,417.9,440.8,371.7,453.9,351.8z"
            />
            <path
              id={2}
              className="st4"
              d="M529.5,380.6c0,0-11.5-2.7-17.5-12.3c-2.9-4.7-6.3-13.5-7.7-20.6c-2.3-11.8,0.2-23.6,0.2-23.6
			s-13.8,1.5-22.9,3.1c0.1,1.6,0.3,44.9,30.1,68.3C514.9,393.8,529.5,380.6,529.5,380.6z"
            />
            <path
              id={10}
              className="st4"
              d="M380.1,348c-22.6,1.3-72.5-1.9-109.3-3.2c-5.8-0.2-18.7,0-18.7,2.1c0,0,74.7,13.3,117.9,13
			C373.5,359.7,382.1,347.8,380.1,348z"
            />
            <path
              id={15}
              className="st7"
              d="M240.9,510.8c0,0.6,0,1.2,0.1,1.9c0.2,0,0.7,0.1,0.9,0.1c0.3-0.7,0.5-1.5,0.9-2.1c0.3-0.5,0.6-1.4,1.2-1.3
			c0.6,0.1,1.1,0.7,1.1,1.3c0,0.8-0.4,2.2-0.3,3c0.4,2.8,0.5,5.5,1,8.2c0.4,2.3,1.5,4.1,3.9,4.7c4.2,1,7.8,1.2,11.9,0.4
			c1.2-0.2,2-1.2,1.5-2.6c-0.5-1.3-1.6-2.3-2.3-3.4c-2.2-3.6-3.9-4.8-6.5-9.2c-0.5-0.8-0.8-5.7-1-8c-0.3-3.3-0.5-3.7-0.7-7.6
			l-11.5-3.5C241.4,498.7,241,504.8,240.9,510.8z"
            />
            <path
              id={14}
              className="st7"
              d="M236.3,451.5c-0.7,3.3-0.5,6.5,0.2,9.7c0,0,0,0,0,0c0,0.1,0.2,1.3,0.5,2.8h0c-0.2,0,1.2,5.8,1,5.8
			c0.1,0.6,0.2,0.9,0.2,1c0.7,6.1,1.6,12.2,2.1,18.3l12,3.1c-0.7-6.5-0.9-12.9,0.7-19.3c0.8-3.2,4.6-12.4,5.7-14.6l-21.9-8.2
			C236.6,450.5,236.4,451,236.3,451.5z"
            />
            <path
              id={11}
              className="st7"
              d="M260.9,350.9c-3.1-0.6-9.7-2.2-9.7-1.7c0.1,15.2-1.1,15.6,1,58.2c0.3,5.9,0.6,18.6-3,24.1
			c-0.8,1.2-1.5,2.4-2.3,3.8c-0.6,0.7-1,1.3-1.4,1.9c0,0-0.1,0.1-0.1,0.1c-2.1,2.4-4.2,4.8-6,7.5c-0.4,0.5-0.7,1-1.1,1.6l22.5,8.7
			c1.6-0.9,6.8-1.9,8.6-2.9c8.8-5,20.9-11.2,26.3-14.4c0,0,0,0,0,0c0.4-0.2,0.7-0.4,1.1-0.7c0,0,0,0,0,0l0,0
			c17.7-15.3,1.9-78.3,1.9-78.3S275,353.8,260.9,350.9z"
            />
            <path
              id={7}
              className="st7"
              d="M439.9,503.8c-0.1,1.1-1,6.5-1,7.6c0,0.4,1.9,1.2,2.1,0.8c0.3-0.6,0.4-1.4,0.8-2c0.3-0.5,0.6-1.3,1.1-1.2
			c0.6,0.1,0.9,1,0.9,1.5c-0.1,1-0.2,2-0.7,2.8c-1.3,2.2-1.2,4.5-0.9,6.7c0.4,2.4,1.6,4.5,3.9,5.7c4.3,2.2,6.1,3.1,11,2.6
			c1.6-0.1,4.4-1.2,3.9-2.7c-0.6-1.9-1.4-3.3-2.4-5c-2.1-3.4-5.7-6.9-7.9-10.2c-0.5-0.7-0.2-1.9,1-2.5c0.4-0.2-0.3-8.7-0.3-9.2
			c0-3.9-0.7-7.3-0.8-11.2h-9.5C440.6,494.8,440.2,500.3,439.9,503.8z"
            />
            <path
              id={6}
              className="st7"
              d="M435,448.5c0.5,5,5.4,32.8,6.2,36h9.3c0.1-1,0.2-4.8,1.1-11.7c0.7-5.5,2.9-21.6,3.4-24.6
			C448.8,447.3,443.4,448.1,435,448.5z"
            />
            <path
              id={5}
              className="st7"
              d="M463.1,499.1c0.1,5,0.5,9.8,0.7,10.2c0.1,0,2.3,2.5,2.5,2.5c0.2-0.5,1.1-2.2,1.3-2.5c1.6-0.7,0.7,1.4,0.5,2.5
			c-0.1,0.5-0.2,1.2,0,1.7c0.5,1.9,1,3.8,1.6,5.6c0.5,1.6,1.4,2.7,3.1,2.9c3.1,0.4,6.1,0.2,9.1-0.7c0.9-0.2,1.3-1,0.8-1.9
			c-0.4-0.8-0.8-1.7-1.4-2.5c-1.9-2.3-4.7-5.1-6.6-7.4c-0.4-0.5-2-6.5-2.1-6.8c-0.6-2.7-2.2-9.7-2.7-12.8h-8.2
			C462.3,492.9,463.1,496.2,463.1,499.1z"
            />
            <path
              id={4}
              className="st7"
              d="M473.7,445.6l-12.8,3c0,0-0.6,15.4-0.9,19.9c-0.3,4.6-0.1,10.3,0.3,14.9c0,0.2,0.3,2.8,0.5,3.9l8.4-0.3
			c0-0.7-0.3-2.6-0.1-5.7c0.3-5.4,1.5-12.2,2.2-16.6C471.8,462.1,473.4,448.8,473.7,445.6z"
            />
            <g>
              <path
                id={1}
                className="st7"
                d="M589.5,361.3l0-0.4l-0.1-0.3c-0.4-1.7-1.4-4.6-6.5-8.9c-3.4-2.9-15.6-15.3-19.2-19.9c-0.9-4-3.3-9.7-8-12.9
				c-11-7.6-18.6-4.9-19.8-4c-0.3,0.2-4.7,2.5-5.1,2.6c-0.1,0-0.1,0-0.2,0.1c-0.9-0.4-5.7-1.2-8-3.7c-7.8-8.5-12.9-5.7-12.9-5.7
				s-2.3,5.7,4.6,14.1c1,1.2-3.2,3.9-4,7.4c-1.2,5.4-1.7,9.9-0.6,17.2c2.1,13.9,6.7,20,12.7,24.4c7.1,5.2,11.9,5.8,18.5,6.1
				c6.5,0.3,12.8-2.3,17.8-3.1c2.2-0.3,10.2-1.9,12.3-2.1c2.8,1.3,5.5,3,9.8,2.2c0,0,3.8-1.2,4.8-2
				C588.5,369.8,589.7,366.1,589.5,361.3z"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Caw;
