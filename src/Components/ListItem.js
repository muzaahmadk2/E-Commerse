import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Items from "./Items";
import { useContext } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import AuthContext from "./Store/Auth-Context";
import CartContext from "./Store/Cart-Context";
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

const listItems = productsArr.map((item, index) => (
  <Items
    img={item.imageUrl}
    price={item.price}
    title={item.title}
    key={index}
    id={item.title}
  />
));
const ListItem = () => {
  

  return (
    <Container
      className="mt-3 py-4"
      style={{ overflow: "visible", maxWidth: "900px" }}
    >
      <h3
        className="mb-5"
        style={{ textAlign: "center", fontFamily: "initial" }}
      >
        MUSIC
      </h3>
      <Row md={2} className="g-4" style={{ justifyContent: "center" }}>
        {listItems}
      </Row>
    </Container>
    
  );
};
export default ListItem;
