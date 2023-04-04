import { useParams, Route, useRouteMatch, Link } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";

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

const ProductDetails = (props) => {
  const match = useRouteMatch();
  console.log(match);
  const param = useParams();
  const item = productsArr.find((item) => item.title === param.id);

  return (
    <section>
      <div>
        <h1 style={{ marginTop: "50px", marginLeft: "520px", display: "flex" }}>
          <p style={{ fontFamily: "initial", marginRight: "20px" }}>TITLE :</p>
          {item.title}
        </h1>
      </div>
      <br />
      <Container style={{ width: "350px", height: "auto" }}>
        <Card
          className="img-fluid card h-100 shadow"
          style={{ maxWidth: "300px", height: "50px" }}
        >
          <Card.Img variant="top" src={item.imageUrl}></Card.Img>
        </Card>
        <br />
        <span
          style={{
            fontFamily: "-moz-initial",
            fontSize: "40px",
            display: "flex",
          }}
        >
          <p style={{ fontFamily: "initial", marginRight: "20px" }}>PRICE :</p>$
          {item.price}
        </span>
      </Container>
      <Route path={match.path} exact>
        <Link to={`${match.url}/comments`}>
          <Button variant="secondary" size="lg" style={{ marginLeft: "520px" }}>
            ADD COMMENT
          </Button>
        </Link>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Form>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px", marginTop: "20px" }}
          />
          <Button variant="primary" className="mt-3">Submit Comment</Button>
        </Form>
      </Route>
    </section>
  );
};
export default ProductDetails;
