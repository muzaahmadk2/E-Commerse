
import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header";
import ListItem from "./Components/ListItem";
import NavBar from "./Components/NavBar";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () =>{
    setShowCart(false);
  }

  return (
    <CartProvider>
      <NavBar  onShowCart={showCartHandler}/>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header/>
      <ListItem />
  
    </CartProvider>
  );
}

export default App;
