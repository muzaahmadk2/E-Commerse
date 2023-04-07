import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import CartContext from "../Store/Cart-Context";

const CartItems = (props) => {
  const crtCtx = useContext(CartContext);
  const cartItems = crtCtx.items;
  const [data, setData] = useState(cartItems);

  const valueChangeHandler = (event, index) => {
    const updatedItems = [...data];
    updatedItems[index].quantity = +event.target.value;
    setData(updatedItems);
  };
  const removeCartItemHandler = (event,index) => {
    event.preventDefault();
    crtCtx.removeItem(cartItems[index]);
  }

  return (
    <>
      {cartItems.map((ele, index) => (
        <tr key={index} style={{ verticalAlign: "middle" }}>
          <th>
            <div>
              <img
                src={ele.img}
                alt={ele.title}
                style={{ width: "70px", height: "70px", marginRight: "10px" }}
              />
              <span>Album {index}</span>
            </div>
          </th>
          <th>
            <div>
              <span>{ele.price}</span>
            </div>
          </th>
          <th>
            <div>
              <input
                type={"text"}
                value={ele.quantity}
                onChange={(event) => valueChangeHandler(event, index)}
                style={{ width: "30px", height: "30px" }}
              />
              <Button onClick={(event) => removeCartItemHandler(event,index)} variant="danger" className="m-2">
                Remove
              </Button>
            </div>
          </th>
        </tr>
      ))}
    </>
  );
};
export default CartItems;
