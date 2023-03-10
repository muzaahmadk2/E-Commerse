import { Card, CloseButton, Table } from "react-bootstrap";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";

const Cart = (props) => {
  return (
    // <Modal onClose={props.onClose} style={{float: 'right'}}>
      <Card style={{ width: "auto", float: "right" }}>
        <div className="text-end m-2">
          <CloseButton onClick={props.onClose} />
        </div>
        <h4 className="text-center">CART</h4>
        <Card.Body style={{ overflow: "scroll" }}>
          <Table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <CartItems />
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    // </Modal>
  );
};
export default Cart;
