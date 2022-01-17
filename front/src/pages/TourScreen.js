import "./tour_screen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const TourScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="product_screen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="product_screen_left">
            <div className="left_info">
              <p className="left_name">{product.name}</p>
              <p style={{color: 'black'}}> ${product.price}</p>
              <p> {product.description}</p>
              <p style={{color: 'black'}}>
                The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth
                (comparable to the width of Australia), it is the largest natural satellite in the Solar
                System relative to the size of a major planet,[f] the fifth largest satellite in the Solar
                System overall, and is larger than any known dwarf planet. The Moon is a planetary-mass
                object that formed a differentiated rocky body, making it a satellite planet under the
                geophysical definitions of the term. It lacks any significant atmosphere, hydrosphere,
                or magnetic field. Its surface gravity is about one-sixth of Earth's.
              </p>
            </div>
          </div>
          <div className="product_screen_right">
            <div className="right_info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "Tickets available" : "Sold out"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Book the trip!
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TourScreen;
