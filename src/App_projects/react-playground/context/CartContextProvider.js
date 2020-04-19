import React from "react";

export const CartContext = React.createContext();

const CartContextProvider = props => {
  const [cart, setCart] = React.useState([]);
  React.useEffect(() => {
    localStorage.getItem("items", JSON.stringify(cart));
  }, [cart]);
  const cartChange = (obj, status) => {
    if (status === 1) {
      cart.map(item => {
        if (item.id === obj.id) {
          item.number = Number(item.number) + Number(obj.number);
        }
      });
    }
  };
  return (
    <CartContext.Provider value={{ cart, cartChange }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
