import { Navbar, Nav, Container,Button } from "react-bootstrap";


const NavBar = props => {
    return(
        <Navbar bg="dark" variant="dark" style={{justifyContent: 'center'}}>
        <Container>
          <Nav >
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="Store">Store</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="about">About</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Button variant="primary" onClick={props.onShowCart}>Cart</Button>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
};
export default NavBar;