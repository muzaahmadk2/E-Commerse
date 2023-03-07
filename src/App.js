import { Navbar, Nav, Container,Button } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav className="justify-content-center" activeKey="/home">
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
              <Button variant="primary">Cart</Button>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Header />
    </div>
  );
}

export default App;
