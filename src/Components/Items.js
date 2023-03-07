import {Container,Card} from "react-bootstrap";

const Items = props => {
    return <card>
        <Card.img variant="top" src={props.img} />
        <Card.body>
            {props.price}
            <Button variant="primary" >Add</Button>
        </Card.body>
    </card>
};
export default Items;