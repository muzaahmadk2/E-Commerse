import CartContext from "./Cart-Context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setTotalAmount(totalAmount + item.price);

    const existingCartItemIndex = cartItems.findIndex(
      (itm) => itm.id === item.id
    );
    const existingCartItem = cartItems[existingCartItemIndex];
    if (existingCartItem) {
      cartItems[existingCartItemIndex].quantity += 1;
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeItemFromCartHandler = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (itm) => itm.id === item.id
    );
    const existingCartItem = cartItems[existingCartItemIndex];
    setTotalAmount(totalAmount - existingCartItem.price);
    if (existingCartItem && item.quantity === 1) {
      setCartItems(cartItems.filter(itm => itm.id !== item.id));
    } else{
      cartItems[existingCartItemIndex].quantity -= 1;
      setCartItems(cartItems);
      
    }
  };

  const cartContext = {
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
