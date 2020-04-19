import React from "react";
import { Link } from "react-router-dom";
import { Icon, Style, classOf } from "../../assets/state";

const styles = {
  iconsSocial: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "-5px",
    "& a": {
      marginRight: "16px",
      marginBottom: "5px",
      color: "#fff",
      display: "inherit",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      height: "35px",
      width: "35px",
      borderRadius: "5px",
      position: "relative",
      padding: "5px",
      borderRadius: "50%",
      border: "2px solid"
    }
  }
};

const { classes } = Style(styles);

const SocialNetwork = () => {
  return (
    <nav
      className={[
        classes.iconsSocial,
        classOf.mb_sm_0,
        classOf.mb_2,
        classOf.mr_sm_3
      ].join(" ")}
    >
      <Link to="/" className="telegram">
        <Icon icon="telegram-plane" size={20} />
      </Link>
      <Link to="/" className="whatsapp">
        <Icon icon="whatsapp" size={20} />
      </Link>
      <Link to="/" className="instagram">
        <Icon icon="instagram" size={20} />
      </Link>
    </nav>
  );
};

export default SocialNetwork;
