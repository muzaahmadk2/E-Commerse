import { useContext, useState } from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link, BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Header from "./Layout/Header";
import ListItem from "./ListItem";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import CartContext from "./Store/Cart-Context";

const NavBar = (props) => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const crtCtx = useContext(CartContext);
  const noOfItems = crtCtx.items.length;

  const toggleHeader = (sta) => {
    setIsHeaderActive(sta);
    console.log(isHeaderActive);
  };
  const contactHandler = (details) => {
    props.onContact(details)
  }

  return (
    <BrowserRouter>
      <Navbar bg="dark" expand="sm" fixed="top" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              STORE
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Container>
        <Container>
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
        </Container>
      </Navbar>
      <Header isActive={isHeaderActive} />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home toggleHeader={toggleHeader} />} />
        <Route path="/" element={<ListItem />} />
        <Route path="/contact" element={<Contact onContact={contactHandler} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default NavBar;
