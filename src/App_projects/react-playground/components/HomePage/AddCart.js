import React from "react";
import { Icon, Style, Vars } from "../../assets/state";
import { CartContext } from "../../context/CartContextProvider";

const style = {
  icon_cart: {
    color: "#fff",
    width: "2.5rem",
    cursor: "pointer",
    height: "2.5rem",
    display: "flex",
    zIndex: 3,
    position: "relative",
    transition: "all .3s ease-in-out",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
    backgroundColor: "#ccc",
    "&:hover,&:focus": {
      backgroundColor: Vars.main_color
    }
  }
};

const { classes } = Style(style);

const AddCart = props => {
  const { cart, cartChange } = React.useContext(CartContext);
  return (
    <div
      className={classes.icon_cart}
      onClick={() => {
        const item = cart.filter(item => console.log(item));
        cartChange(
          {
            id: props.id,
            number: 1,
            name: props.name,
            image: props.image
          },
          1
        );
      }}
    >
      <Icon icon="shopping-cart" size="20" />
    </div>
  );
};

export default AddCart;
