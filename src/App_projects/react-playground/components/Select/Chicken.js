import React from "react";
import img from "../../assets/images/chicken.png";
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

const Chicken = props => {
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
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: "\n      " }}
        />
        <g>
          <g>
            <path
              className="st0"
              d="M565.4,279.4c-2.4-5-4.7-9.3-9.3-12.3c0.6-2.6,0.6-5.3,0-7.8c-1.6-6.7-5.3-10.5-10.9-11.5
												c-3.2-0.6-5.9-1.9-8.6-4.4c-4.1-3.6-8.1-4.1-12.6-1.4c-0.5,0.3-1.6,0.3-2.5,0.3l-0.1,0c-0.4,0-0.9-0.1-1.5-0.2
												c-0.5-0.1-1-0.2-1.6-0.3c-3-0.3-5.3,1.4-5.9,4.2c-0.1,0.4-0.2,0.9-0.2,1.4c-0.6,0.3-2.4,1.2-7.7,3.5c-0.5,0.2-0.9,0.4-1,0.4
												c-10.2,4.8-18.6,12.3-25,22.1c-1,1.5-2.2,3.4-3.6,5.5c-7.1,10.7-18.9,28.7-23.2,36.6c-0.5,0.9-7,5.2-8.5,5.7
												c-12.5,4-23.6,9-34,15.1c-1.7,1-2.8,1.2-3,1.2c-6.4-0.3-13.9-0.7-21.1-1.7c-4.1-0.6-7.6-1.7-11.7-3.1l-2.1-0.7
												c-1.8-0.6-2-0.6-4.2-1.6c-0.6-0.3-9.1-5.3-12.3-7.4c-2.1-1.4-4.2-2.7-6.3-4.1c-0.4-0.2-0.8-0.4-1.2-0.6c-1.7-0.8-3.8-1.8-4.5-4.5
												c-4-14.4-5.6-28.8-4.5-42.9c0.3-3.8,0.8-7.9,1.8-12.9c1.5-7.8-1.2-12.4-3.6-14.8c-2.4-2.4-6.9-4.9-14.6-3.4
												c-8.1,1.6-14.6,5.9-19.7,13.1c-3-2.3-6.6-3-10.3-2.2c-4,0.9-7.4,2.3-10,4.2c-6.3,4.5-10.2,10.9-12,19.6c-1.7,0.1-3.7,0.4-5.5,1.6
												c-2.8,2-6.1,4.4-8.4,7.7c-4.4,6.2-6.6,13.7-6.3,22.1c-1.7,0.5-3.3,1.4-4.7,2.4c-3.5,2.8-5.8,6.7-7,12c-2,9-1.3,17.3,2.1,24.8
												c-5,3.7-7.4,9.4-7.2,17.1c0.2,7.7,2.9,14.6,8.3,21.2c-1.8,2.1-2.9,4.3-3.4,6.5c-1.7,7.8,0.1,15.2,5.3,21.4
												c2.4,2.9,5.1,5.3,7.6,7.4c-1.6,2.6-2.4,5.6-2.5,9.1c0,7.3,3.2,13.4,9.9,18.8c6,4.8,12.9,7.3,19.5,9.8l1.1,0.4
												c1,0.4,2.1,1.1,3.3,2.4c0.4,0.4,1,1.7,1.5,2.6l0.1,0.2c0.2,0.3,0.3,0.6,0.5,0.9c4.5,8.8,10.4,17,17.5,24.3
												c7.9,8.2,16.5,14.7,25.6,19.4c1.9,1,3.9,2.1,6,3.4c4.2,2.4,8.6,5,13.2,6.7l0.7,0.3c4.9,1.8,7.3,2.6,12.1,6.1
												c8.2,9.2,19.3,15.6,30.3,17.7c1.6,4.4,9.1,26.8,10.6,30.5c-1.5,1.4-12.5,11.6-13.2,13.3c-0.2,0.4-1.1,2.5-0.8,3.9
												c0.3,1.4,1.6,3.9,6.2,4.9c1.2,0.3,2.4,0.2,5.9-0.1c2.3-0.2,12-3.3,13.6-3.6c2.9,0.4,28.1,11.4,31.6,12.6c4.1,1.5,8.9,2.1,12.1,2.4
												c0.2,0,0.3,0,0.5,0c2.1,0,3.8-1.1,4.9-2c1.6-1.4,2.4-3,2.5-4.8c0.3-3.9-5.1-8.3-7.6-11.3c4.4-0.9,12.4-1,16.2-1.7
												c3.9-0.8,5.5-2.9,6.1-4.6c0.5-1.4,1.3-2.8-1.2-6c-0.9-1.1-4.9-1.9-5.2-2.2c0-0.2,1.6-2.5,0.7-3.9c-0.9-1.4-2.5-4.1-13.1-4
												c-2.8,0-5.5,0.4-8.1,0.8c-4.6,0.6-10.6,0.8-13.2-0.6c-4-2.2-5-7.3-9-18.6c0-0.1-2-6-3.1-9l0.1,0c7.3-3.7,12.9-11.5,16.5-17
												c0.6-1,1-1.4,1.1-1.6c53.1-7.8,80.4-52.6,89.6-71.5c4.9-9.9,8.2-21.3,10.3-34.6c2.3-15.2,2.6-31,0.9-48.3c-1.3-13-3.9-26.1-8-39.9
												c0.2-2.2,4.1-13,5.9-17c2.4-0.6,5.1-1.9,7.3-3.7c5.3-4.3,4.1-11.1,3.2-16.5c-0.3-1.7-0.6-3.4-0.7-4.8c1.4-0.1,2.5-0.1,3.3-0.1
												c2.3,0,4.9,0,7.8,0.6l4,0.8L565.4,279.4z"
            />
            <path
              className="st3"
              d="M555,278l7.2,0.7l-0.7-2l-4.4-6.3l-3-2l-1.6,0.4l0.6-3.9v-5.8l-2.3-4.9l-3.5-3.3l-5.6-1.6l-3.7-1.3l-5.3-4.5
												h-5.9l-6.6,1.6h-4.4l-0.7,4.1v3c-2,1.2-9.1,4.2-9.5,4.4c-9.5,4.5-16.4,11.8-22.7,20c-7,9.2-22,34.2-27.2,43.6
												c-1.3,2.4-8.5,5.7-11.2,6.6c-11.4,3.7-22.4,8.4-32.8,14.6c-1.8,1.1-4.1,2-6.1,2c-7.3-0.3-14.5-0.7-21.7-1.7
												c-5.1-0.7-9.1-2.2-14.1-3.8c-2.4-0.8-2.7-0.8-5.3-2c-1.8-0.7-2.5-1.1-3.5-1.7c-5.3-3.3-9.8-5.5-15-8.8c-2.8-1.8-7.9-5.9-9-9.8
												c-4.1-14.7-5.8-29.6-4.7-44.8c0.3-4.5,1-9.1,1.9-13.6c1.6-8.6-3-13.2-11.4-11.5c-8.7,1.7-14.4,7.2-18.6,14.6
												c-1.2,2.2-1.8,2.2-3.2,0.1c-1.9-2.9-4.6-4.7-8-3.9c-2.8,0.6-5.7,1.7-8,3.3c-6.2,4.4-9,11-10.1,18.3c-0.3,1.7-1.1,2.4-2.8,2.3
												c-1.6,0-3.5-0.2-4.7,0.6c-2.6,1.8-5.2,3.8-7,6.3c-4.2,5.9-5.7,12.7-5.2,20c0.2,3.1-0.2,3.4-3.2,4c-1.3,0.3-2.6,0.9-3.7,1.7
												c-2.8,2.2-4.2,5.4-5,8.8c-1.8,8-1.3,15.8,2.7,23.1c0.9,1.6,1.1,2.9-0.8,3.9c-5.6,2.8-7,8-6.9,13.6c0.2,7.3,3.3,13.5,8.1,18.9
												c2,2.2,1.9,2.8-0.2,5c-1.3,1.4-2.7,3.2-3.1,5c-1.3,6.1,0.2,11.8,4.1,16.5c2.5,3,5.6,5.6,8.6,8.2c1.9,1.6,2.3,2.7,0.8,4.2
												c-2.2,2.2-3,4.9-3,7.8c0,6.1,3.2,10.7,7.8,14.3c5.6,4.5,12.4,6.8,19,9.3c2.1,0.8,3.8,2.1,5.4,3.7c1.3,1.3,2.2,3.4,3,5.1
												c4.4,8.5,9.9,16.1,16.5,23c7.1,7.4,15,13.6,24.1,18.3c5.9,3.1,12.2,7.4,18.5,9.7c5.7,2.1,8.7,3.1,14.7,7.5
												c0.1,0.1,0.2,0.2,0.3,0.4c7.2,8,16.3,13.9,26.8,15.8c2.1,0.4,3.9,1.8,4.6,3.8c1.9,5.4,8.8,26.9,9.2,28.3c1.1,4.1,2.3,5.8,1.1,7.2
												c-3.1,3.9-10.5,9.1-12.7,10.6c-0.8,0.5-1,1.4-0.8,2c0.1,0.5,1.2,0.8,1.9,1c1,0.2,6.9-0.8,12.5-2.8c1-0.4,6.4-2.3,7.2-2
												c8.1,3.1,7.4,2.8,12.2,5c6.1,2.8,13.1,5.6,15.9,6.4c4.3,1.2,11.3,4.3,14.7,4.6c0.6,0,1.7-0.9,1.8-1.4c0.3-4.9-9.7-9.5-11.9-10.5
												c-0.8-0.4-5.3-2.8-6.2-3.1c0-0.2,22.6-3,31.3-4.7c1.9-0.4,2.5-1.2,1.2-2.8c-1.1-1.3-19.9-0.9-19.9-0.9l16.5-4.9c0,0-1.1-1.7-3.6-2
												c-7.8-0.8-20,1.3-25,2.2c-3.7,0.6-9.2-2-10.8-5.5c-0.6-1.3-8.5-24.9-9.8-28.2c-1.6-4.2,0.5-4.2,4.6-6.8c5.5-3.6,10-8.1,13.6-13.7
												c1.3-2,2.7-3.8,5.4-4.1c42.7-5.6,79.2-56.5,85-68.4c5.1-10.4,8-21.6,9.7-33c2.4-15.6,2.4-31.3,0.9-46.9
												c-1.3-13.4-4.1-26.5-7.9-39.3c-0.8-2.8,5-21.6,8-21.6l-0.2-0.4h1.9l3.3-0.8l3.4-1.9l2.2-2.2l1.2-3.4l0.1-4.1l-1.1-6.9l-0.9-4.6
												l1.3-0.1L555,278z"
            />
            <g>
              <path
                className="st0"
                d="M531,270.9c0.8,0.6,1.6,1.1,2.5,1.4c0.1-0.6,0.4-1.3,0.8-1.8c-0.8-0.5-1.5-1.1-2.1-1.8
													c-1.1-1.3-2.2-2.5-3.3-3.8c-0.9-1-2.1-1.2-3.4-0.9c-1.1,0.3-2.2,0.4-3.3,0.3c-2.1-0.1-3.2,0.5-4.2,2.8c1.4-0.5,2.7-1,4.1-1.4
													c3.9-1.2,5.8-0.5,8.2,3c-1.5-0.7-2.7-1.4-4-2c-1.5-0.7-3-0.6-4.5-0.1c-1.4,0.5-2.7,1.2-3.1,3c0.5-0.3,1.6-0.9,2.3-1.3
													c-1,2-0.4,4.2,1.5,4.6c3.7,0.8,4.6-1.5,4.4-5C528.4,269,529.8,269.8,531,270.9z"
              />
              <path
                className="st0"
                d="M563.1,279.5c-2.5-5.3-4.8-9.5-9.7-12.3c0.9-2.8,1-5.5,0.3-8.2c-1.5-6-4.6-9.4-9.6-10.3
													c-3.5-0.6-6.4-2.1-9.4-4.8c-3.5-3.1-6.8-3.5-10.7-1.2c-0.9,0.5-2.2,0.5-3.3,0.5l-0.1,0c-0.6,0-1.2-0.1-1.8-0.2
													c-0.5-0.1-1-0.2-1.5-0.2c-2.2-0.2-3.8,0.9-4.2,2.9c-0.8,4,0.2,7.2,3.1,9.7c0.3,0.2,0.6,0.5,0.9,0.7c0.1,0.1,0.3,0.2,0.4,0.3l0,0
													c0.9,0.8,5,1.9,5.2,1.9c3.1,0.5,6.2,1.1,9.4,1.7c2.3,0.4,3.9,1.4,5.1,3l1.4,1.9l-0.7-2.2c0,0-0.7-2.1-1.1-2.5
													c-1.5-1.8-3.4-2.7-5.8-2.6c-4.3,0.1-8.3-0.8-11.8-2.7c-2.3-1.2-3.5-3.3-3.7-6.1c-0.1-0.7,0.1-1.2,0.5-1.5
													c0.4-0.3,0.9-0.3,1.6-0.1c2.4,0.8,4.7,0.5,7.4-1c0.4-0.2,0.8-0.4,1.2-0.6l0.4-0.2c1.5-0.7,2.8-0.6,4.1,0.5
													c1.6,1.3,3.5,2.8,5.6,3.9c1.5,0.8,3.4,1.2,5.3,1.3c2.7,0.1,4.8,1,6.5,2.8c3.4,3.6,4.4,8.1,3.2,13.7c-0.1,0.3-0.2,0.7-0.3,1.1
													c-0.1,0.2-0.2,0.4-0.2,0.5l-0.1,0.6l0.6-0.1c0.2,0,0.5-0.1,0.8-0.1c1.6,0,1.9,0.2,1.9,0.2c2.1,1.8,4.6,5,6.2,7.9
													c-0.6,0.1-1.8,0.1-4.1,0.1c-5,0.4-14.3-0.3-14.7-0.3c-0.1,0-0.2-0.1-0.4-0.1l-0.1,0c-0.3,0-0.6-0.1-0.9-0.1l-0.1,0l-0.4,0.1
													c-0.5,0.2-0.9,0.3-1.4,0.5l-1.3,0.4l2.3,0.6c0.7,0.2,1.4,0.4,2.1,0.6c0.5,0.1,1.5,0.3,2.3,0.4c-0.6,0.9-1.1,1.9-1.5,2.8
													c-1.4,3.5-2.8,5.8-5.2,8.6c-1.8,2.1-3.7,5.6-3.5,8.7c0.1,1.6,0.8,2.9,2,3.8c1.1,0.9,2.4,1.3,3.8,1.3c3.3,0,7-2.1,8.9-3.7
													c4.6-3.7,3.6-9.4,2.6-15c-0.4-2.4-0.8-4.7-0.7-6.7c1.6-0.1,3.6-0.1,4.9-0.1c2.4,0,5.1,0,8.1,0.6l0.8,0.2L563.1,279.5z
													 M548.4,296.2c-0.6,2.6-5.6,6.4-9.4,6.4c0,0,0,0-0.1,0c-1.9,0-3-1-3.4-3c-0.7-3.3,1.5-5.7,3.6-8c0.7-0.8,1.4-1.5,2-2.3
													c0.8-1.1,1.3-2.6,1.9-4c0.8-2.2,1.6-4.4,3.3-5.3c0.1-0.1,0.2-0.1,0.3-0.2l0.8,0c-0.1,2.4,0.3,4.7,0.7,7
													C548.6,290,549.2,293,548.4,296.2z"
              />
            </g>
          </g>
          <path
            className="st0"
            d="M362.7,418.8c-2.8,0-10-0.2-16.4-0.4c-17.3-0.7-17.9-1.3-18.7-2.3l-0.8-1l0.3-1.3c0.4-1.6,1.4-2.1,8.8-5.4
											c-11.7,2-28.6,4.2-38.5-3.3c-0.8-0.6-1.2-1.6-1.1-2.6c0.2-2.3,2.5-3.6,11.3-7.9c0.5-0.3,1.1-0.5,1.7-0.8c-1,0.2-2,0.4-2.8,0.5
											c-10,1.9-25.2,4.7-34-7.5c-3.9-5.4,4.9-12.1,9.1-15.4l0.5-0.4c8.8-6.8,17.3-11.7,27.7-15.9c10.1-4.1,33.6-8.3,34.9-8.4
											c0,0,0.5-0.1,1.1-0.1c6.1-0.8,13.4-1.7,15.2-1.7c0.1,0,0.5,0,1-0.1c25.6-2.5,41.9-0.1,51,2.2c11,2.9,19.1,5.7,22.9,15.9v0
											c1.5,4.2,3.7,15.2-9.1,26.7c-5.5,4.9-15.5,12-22.7,15.4c-4.5,2.1-27.4,12.7-40.3,13.8C363.7,418.8,363.3,418.8,362.7,418.8z
											 M337.8,413c9.2,0.6,24,0.9,25.6,0.8c12.3-1,35.8-12,38.5-13.3l0.1,0c6.7-3.1,16.4-10,21.5-14.6c10.2-9.1,9.2-17.2,7.7-21.3l0,0
											c-2.9-8-9.3-10.2-19.5-12.8c-8.7-2.3-24.4-4.5-49.3-2.1c-0.7,0.1-1.1,0.1-1.3,0.1c-1.2,0-6.1,0.6-14.7,1.7
											c-0.9,0.1-1.4,0.2-1.5,0.2c-1.7,0.2-24,4.2-33.4,8c-9.9,4-18.1,8.7-26.5,15.2l-0.6,0.4c-8.1,6.2-8.2,8.1-8.1,8.5
											c7,9.6,19.2,7.3,29,5.5c6.3-1.2,10.8-2,13.4,0.5c0.6,0.6,1,1.5,0.8,2.4c-0.3,2-2,3-10,6.9c-2,1-5,2.4-7,3.6
											c9.6,4.9,25.7,2.1,35.6,0.3c3.9-0.7,6.7-1.2,8.6-1.2c2.8,0,3.5,1.5,3.7,2.4c0.6,2.8-2.2,4.2-12.7,8.9
											C337.9,413,337.9,413,337.8,413z"
          />
        </g>
      </svg>

      <svg
        version="1.1"
        className={props.className}
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 800 800"
        style={{ enableBackground: "new 0 0 800 800" }}
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path
                id="3"
                className="st5"
                onClick={id => selectPart(id)}
                d="M443.7,506.6c1.1-3,2.4-5.8,3.3-8.8c1.2-3.5,2.1-7,2.8-10.6c0.1-0.7,0.1-1.4,0.1-2.1
				c0.1-4.6,0.1-9.1-0.5-13.7c-0.7-5.6-1.3-11.2-2.2-16.8c-1.4-8.8-3.2-17.4-5.7-25.9c-2.3-7.8-5.1-15.5-9.7-22.3
				c-1.4-2.1-3-4.1-5.1-5.6c-1.1-0.8-1.1-1,0-1.9c2.7-2.3,5.3-4.8,7.8-7.4c3.6-3.7,6.4-7.9,8.3-12.7c1.2-2.8,1.7-5.9,1.9-9
				c0.1-3.6-0.1-7.2-1.2-10.6c-1.2-3.7-3.3-6.8-5.8-9.7c-3.1-3.4-6.7-6.2-10.8-8.3c-0.3-0.2-0.6-0.2-0.8-0.8
				c1.4-0.5,2.8-1.1,4.2-1.6c5.5-2,10.9-4.3,16.2-6.9c5.1-2.5,9.9-4.2,14.3-7.9c2-1.7,4-4.6,5.1-7c0.4-0.8,0.9-1.2,1.8-0.9
				c4,1.3,8.1,1.9,12.2,2.9c4.8,1.1,9.5,2.5,14.2,3.6c9.9,2.4,19.8,4.5,29.7,7c1.3,0.3,2,0.8,2.4,2.2c2.1,8.9,4.3,17.8,5.7,26.9
				c0.7,4.4,1.2,8.8,1.6,13.2c0.6,5.8,0.9,11.6,0.7,17.4c-0.1,4.3-0.5,8.6-1,12.8c-0.6,5.3-1.7,10.5-3,15.7
				c-1.3,5.1-3.3,10-5.5,14.9c-4.2,9.2-9.4,17.9-15.5,26c-2.5,3.2-5.1,6.3-7.8,9.3c-1.9,2-3.7,4.1-5.7,5.9
				c-8,7.6-16.5,14.4-25.9,20.2c-7.8,4.9-16,9.1-24.6,12.4C444.8,506.6,444.4,506.9,443.7,506.6z"
              />
              <path
                id={6}
                className="st5"
                d="M349.9,504.9c-1.6-0.3-2.7-1.5-3.9-2.4c-7.3-5.2-14.5-10.7-21.4-16.5c-4.4-3.7-8.7-7.5-12.9-11.4
				c-3.6-3.3-7-6.9-10.3-10.5c-5-5.5-9.3-11.4-12.8-18c-4.5-8.4-8.8-16.8-13-25.3c-3-6.1-5.9-12.2-8.2-18.6c0-0.1-0.1-0.2-0.2-0.4
				c-0.3-0.8-0.6-1.7,0.1-2.4c0.7-0.6,1.5-0.1,2.2,0.2c2.2,0.7,8.7,4.3,10.7,5.4c7.2,4,9.7,5.7,17.2,9.3c5.1,2.4,10.4,4.1,15.8,5.8
				c5.2,1.6,10.4,3,15.7,4.2c4.4,1,8.9,2.2,13.4,2.5c5,0.3,10,0.3,15.1-0.2c9.7-0.9,19.1-3.4,28.3-6.7c4.8-1.7,9.5-3.7,14.1-5.8
				c6.3-2.8,12.2-6.3,18.3-9.4c2.2-1.1,1.6-1.4,3.8,0.6c4.5,4.3,7.5,9.5,10,15.1c4.6,10.4,7.2,21.3,9.3,32.4
				c0.6,3.4,1.3,6.8,1.5,10.2c-0.2,0.3-0.5,0.1-0.7,0c-6.5-5.8-14.2-9.3-22.7-11.4c-5.8-1.4-11.7-2.5-17.7-3.3
				c-5.8-0.7-11.5-1.3-17.4-1.1c-6.6,0.3-13.1,1.1-19.4,3.4c-6.4,2.3-11.8,6-15.7,11.6c-3.7,5.3-6.1,11.2-6.5,17.8
				c-0.6,8.6,2,16.2,6.3,23.3C349.4,503.8,349.9,504.2,349.9,504.9L349.9,504.9z"
              />
              <path
                id={7}
                className="st5"
                d="M386.5,453.5c7.2-0.1,13.7,0.7,20.1,1.9c8,1.5,15.7,3.7,23,7.4c3.3,1.7,6.3,3.8,9,6.6
				c2.8,2.9,4.1,6.3,4.3,10.2c0.4,7.6-1.4,14.9-4,22c-1.2,3.2-2.5,6.3-4.1,9.3c-2.6,4.9-6.3,8.9-10.5,12.5c-1.7,1.5-3.5,2.8-5.5,3.7
				c-3.9,1.9-8,2.9-12.4,3c-7.6,0-14.8-1.9-21.9-4.4c-4.1-1.4-8.1-3.3-11.8-5.7c-7.3-5-13.1-11.5-17.7-19.1
				c-2.1-3.6-3.7-7.5-4.5-11.6c-1.9-8.7-0.3-16.7,5.5-23.7c5.3-6.3,11.9-10.2,20.1-11.3C379.8,453.7,383.5,453.4,386.5,453.5z"
              />
              <path
                id={5}
                className="st5"
                d="M402.2,406.2c-0.2,0.6-0.8,0.7-1.2,0.9c-8.7,3.9-16.2,6.5-25.3,9.4c-7.2,2.5-27.6,6.1-58.8-2.3
				c-11-2.9-13.4-4.9-16.5-6.2c-6.9-2.8-13.5-6.2-20.1-9.8c-3.5-1.9-7-3.8-10.3-6.1c-1.6-1.1-3.2-2.2-4.6-3.7
				c-1.3-1.4-1.8-3-0.5-5.1c2.3-3.8,5.3-7,8.6-9.8c6.9-6,14.7-10.6,22.6-15c4.7-2.6,9.8-4.3,14.9-5.8c6-1.8,12.1-3.1,18.3-4.3
				c2.6-0.5,5.1-0.8,7.7-1.2c0.9-0.1,1.4,0.1,1.9,0.9c3.8,5.6,7.7,11,12,16.2c2.6,3.2,5.3,6.4,8.1,9.6c3.2,3.6,6.6,7,10.1,10.4
				c5.9,5.7,12.2,10.8,19.2,15.1c4,2.5,8.2,4.5,12.7,6.1C401.5,405.7,401.9,405.8,402.2,406.2z"
              />
              <path
                id={4}
                className="st5"
                d="M346.1,345.8c0.5-0.3,0.9-0.2,1.4-0.2c20.2-4.3,39.3-4.2,59.9-0.8c13.3,2.4,18.5,2.4,24.2,8.2
				c5.6,6.6,8.8,14.4,5.7,22.3c-2.5,6.9-4.1,8.9-10.1,14.3c-4.4,4.3-9.3,6.9-14.3,10.5c-1.3,1-2.6,1.2-4.2,0.9
				c-8.5-1.8-15.9-5.6-22.7-10.9c-6.5-5.2-12.4-11.1-18.1-17c-4.8-5-9.1-10.4-13.4-15.8c-2.7-3.4-5.4-6.9-8.1-10.3
				C346.3,346.5,346.1,346.3,346.1,345.8z"
              />
              <path
                id={2}
                className="st5"
                d="M525.1,324.4c-2.8-0.7-5.8-1.7-8.5-2.3c-8.1-2-16.2-3.8-24.3-5.9c-7.1-1.8-14.2-3.9-21.3-5.9
				c-1.2-0.3-1.2-0.5-0.5-1.6c4.9-8.1,9.9-16.3,14.8-24.4c1-1.7,0.9-1.6,2.7-0.9c9.5,4.1,19.1,8,28.7,12c4.3,1.8,7.1,3,11.3,4.8
				c1.3,0.5,1.9,1.5,1.6,2.7C529.1,303.8,525.4,317,525.1,324.4z"
              />
            </g>
            <path
              id={1}
              className="st5"
              d="M489.4,277.6l42.8,17.4c0,0,6.6-12.2,12.4-25.6c3.8-8.7-9.4-27.3-33.5-12.3
			C501.2,263.2,489.4,277.6,489.4,277.6z"
            />
            <path
              id={8}
              className="st5"
              d="M400.2,536.8l14.2-1.3c0,0,5.6,23,8.8,31c1.2,3.1,5.9,7.3,9.2,7.9c2.4,0.4,11.1-1,11.1-1l16.5-3.1l-18,6.4
			l18,1.1l-24,5.3l16.9,11.5l-28.3-11.1l-10.4-5.4l-15.2,5.7l12.1-11.1L400.2,536.8z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Chicken;
