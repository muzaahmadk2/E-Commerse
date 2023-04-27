import CartContext from "./Cart-Context";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  // const [userEmail, setUserEmail] = useState();
  const email = localStorage.getItem('email');
  let userEmail;
  if(email){
    userEmail = email;
  }
  
  

  function postCartItem(item) {
    axios({
      method: "post",
      url: `https://crudcrud.com/api/6dd2fa166c1c4d32a9b78c345d862910/cart${userEmail} `,
      data: item,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const getdata = () => {
    // console.log("getdata");
    try {
      axios.get(
        `https://crudcrud.com/api/6dd2fa166c1c4d32a9b78c345d862910/cart${userEmail}`
      )
      .then(res => {
          let total = 0;
          let itemCart = [];
          for(let i in res.data){
            let item = res.data[i];
            total += item.price;
            const existingCartItemIndex = itemCart.findIndex(
              (itm) => itm.id === item.id
            );
            const existingCartItem = itemCart[existingCartItemIndex];
            if (existingCartItem) {
              itemCart[existingCartItemIndex].quantity += 1;
            }else{
              itemCart.push(item);
            }
          }
          setTotalAmount(total);
          setCartItems(itemCart);
      })
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log("getData", email);
    if (userEmail) {
      console.log(userEmail)
      getdata();
    }
  },[userEmail]);


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
      setCartItems(cartItems.filter((itm) => itm.id !== item.id));
    } else {
      cartItems[existingCartItemIndex].quantity -= 1;
      setCartItems(cartItems);
    }
  };

  const purchaseHandler = () => {
    alert("Your order has been placed......!");
    setCartItems([]);
    setTotalAmount(0);
  };

  const logoutHandler = () => {
    setCartItems([]);
    setTotalAmount(0);
    userEmail = undefined;
  };

  const cartContext = {
    userEmail: userEmail,
    items: cartItems,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    postCart: postCartItem,
    purchase: purchaseHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
