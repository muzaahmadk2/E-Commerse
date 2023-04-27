import React from "react";

const CartContext = React.createContext({
    items: [],
    userEmail: "",
    totalAmount: 0,
    addItem: (item) =>{},
    removeItem: (id,size) => {},
    postCart: (Item) => {},
    purchase: () => {},
    logout: () => {},
});

export default CartContext;