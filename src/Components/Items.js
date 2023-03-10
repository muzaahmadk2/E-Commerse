import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Container, Card, Col } from "react-bootstrap";
import CartContext from "./Store/Cart-Context";

const Items = (props) => {
const crtCtx = useContext(CartContext);

const addToCartHandler = (event) => {
    event.preventDefault();
    crtCtx.addItem({...props, quantity:1});
}

  return (
    <Col>
      <Container style={{width:'350px',height:'auto'}}>
        <h4 className="mt-3 mb-3">{props.title}</h4>
        <Card
          className="img-fluid card h-100 shadow"
          style={{ maxWidth: "300px", height: "50px" }}
        >
          <Card.Img variant="top" src={props.img}></Card.Img>
        </Card>
        <span className="fw-bolder " >${props.price}</span>
        <Button variant="primary" style={{marginLeft:'100px',marginTop:'10px'}} onClick={addToCartHandler}>
          Add To Cart
        </Button>
      </Container>
    </Col>
  );
};
export default Items;
