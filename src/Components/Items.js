import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Container, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "./Store/Cart-Context";

const Items = (props) => {
  const crtCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    event.preventDefault();
    crtCtx.addItem({ ...props, quantity: 1 });
    crtCtx.postCart({ ...props, quantity: 1 });
  };

  return (
    <Col>
      <Container style={{ width: "350px", height: "auto" }}>
        <h4 className="mt-3 mb-3">{props.title}</h4>
        <Card
          className="img-fluid card h-100 shadow"
          style={{ maxWidth: "300px", height: "50px", overflow:"hidden" }}
        >
          <Link to={`/store/${props.id}`}>
            <Card.Img
              variant="top"
              src={props.img}
              style={{  objectFit:"cover", transition:"transform 400ms" }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            ></Card.Img>
          </Link>
        </Card>
        <span className="fw-bolder ">${props.price}</span>
        <Button
          variant="primary"
          style={{ marginLeft: "100px", marginTop: "10px" }}
          onClick={addToCartHandler}
        >
          Add To Cart
        </Button>
      </Container>
    </Col>
  );
};
export default Items;
