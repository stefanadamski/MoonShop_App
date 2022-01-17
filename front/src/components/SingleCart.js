import "./single_cart.css";
import { Link } from "react-router-dom";

const SingleCart = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cart_item">
      <Link to={`/product/${item.product}`} className="cart_item_name">
        <p>{item.name}</p>
      </Link>
      <p className="cart_item_price">${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cart_item_select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cart_item_delete"
        onClick={() => removeHandler(item.product)}
      > Delete
      </button>
    </div>
  );
};

export default SingleCart;
