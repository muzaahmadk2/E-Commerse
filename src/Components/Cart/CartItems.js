import { Button } from "react-bootstrap";

const cartElements = [
  {
    
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const CartItems = (props) => {
  return (
    <>
      {cartElements.map((ele, index) => (
        <tr>
          <th>
            <div>
              <img
                src={ele.imageUrl}
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
                type={"number"}
                value={ele.quantity}
                style={{ width: "30px", height: "30px" }}
              />
              <Button onClick={props.onClose} variant="danger" className="m-2">
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
