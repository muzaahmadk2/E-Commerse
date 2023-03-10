import { useContext } from "react";
import { Button, Card, CloseButton, Table } from "react-bootstrap";
import CartContext from "../Store/Cart-Context";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";

const Cart = (props) => {
  const crtCtx = useContext(CartContext);

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
        <div style={{textAlign:'right'}}>
            <h3 style={{ display: "inline-block" }}>Total</h3>
            <span style={{ display: "inline-block", marginLeft: "10px" }}>
              ${crtCtx.totalAmount}
            </span>
        </div>
        <div style={{textAlign:'center'}}>
            <Button variant="primary" className="mt-3">Purchase</Button>
        </div>
      </Card.Body>
    </Card>
    // </Modal>
  );
};
export default Cart;
