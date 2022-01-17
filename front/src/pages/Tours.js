import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SingleCart from "../components/SingleCart";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const Tours = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cart_screen">
        <div className="cart_screen_left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div style={{color: 'grey'}}>
              Your Cart Is Empty <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <SingleCart
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cart_screen_right">
          <div className="cart_screen_info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
