import { useContext, useState } from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link, BrowserRouter, Route, NavLink,Redirect, Switch } from "react-router-dom";
import Header from "./Layout/Header";
import ListItem from "./ListItem";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Contact from "./Pages/Contact";
import CartContext from "./Store/Cart-Context";
import AuthPage from "./Pages/AuthPage";
import AuthContext from "./Store/Auth-Context";

const NavBar = (props) => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const crtCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const noOfItems = crtCtx.items.length;

  const toggleHeader = (sta) => {
    setIsHeaderActive(sta);
    console.log(isHeaderActive);
  };
  const contactHandler = (details) => {
    props.onContact(details)
  }
  const logoutHandler = () =>{
    // event.preventDefault();
    authCtx.logout();
  }

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <BrowserRouter>
      <Navbar bg="dark" expand="sm" fixed="top" variant="dark">
        {isLoggedIn && (<Container className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/store">
              STORE
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT US
            </Nav.Link>
            <Button onClick={logoutHandler} variant="primary">LOGOUT</Button>
          </Nav>
        </Container>)}
        {isLoggedIn && (<Container>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Item>
              <Button variant="outline-info" onClick={props.onShowCart}>
                Cart
              </Button>
              <Badge style={{ color: "#2196F3", fontSize: "20px" }} bg="dark">
                {noOfItems}
              </Badge>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>)}
        {!isLoggedIn && <Container><Nav><Nav.Link as={Link} to="/login" >LOGIN</Nav.Link></Nav></Container>}
      </Navbar>
      <Header isActive={isHeaderActive} />

      <Switch>
        <Route path="/about" > <About /> </Route>
        <Route path="/home"><Home toggleHeader={toggleHeader} /></Route>
        <Route path="/store" exact><ListItem /></Route>
        <Route path="/" exact><Redirect to="/store" /></Route>
        <Route path="/contact"><Contact onContact={contactHandler} /></Route>
        <Route path="/store/:id"><ProductDetails /></Route>
        <Route path="/login" ><AuthPage /></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default NavBar;
