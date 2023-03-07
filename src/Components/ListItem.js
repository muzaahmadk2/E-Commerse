import { Container, Row, Col, Button } from "react-bootstrap";
import Items from "./items";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const listItems = productsArr.map((item) => (
    <card>
    <Card.img variant="top" src="item.imageUrl" />
    <Card.body>
        item.price
        <Button variant="primary" >Add</Button>
    </Card.body>
</card>
));
const ListItem = () => {
  return (
    <Container>
      <Row>
        <Col>{listItems}</Col>
      </Row>
    </Container>
  );
};
export default ListItem;
