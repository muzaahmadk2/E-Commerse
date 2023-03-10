import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import ListItem from "./Components/ListItem";
import NavBar from "./Components/NavBar";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import CartProvider from "./Components/Store/CartProvider";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <NavBar />,
//     children: [
//       { path: "/about", element: <About /> },
//       { path: "/home", element: <Home /> },
//       {path: '/', element: <ListItem />},
//       {path: '/store', element: <ListItem />}
//     ],
//   },
// ]);

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {/* <RouterProvider router={router} /> */}
      {showCart && <Cart onClose={hideCartHandler} />}
      <NavBar onShowCart={showCartHandler} />
      
      {/* <ListItem /> */}
      <Footer />
    </CartProvider>
  );
}

export default App;
