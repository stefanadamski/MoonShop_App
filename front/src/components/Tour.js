import "./tour.css";
import { Link } from "react-router-dom";

const Tour = ({  description, price, name, productId }) => {
  return (
    <div className="product">

      <div className="product_info">
        <p className="info_name">{name}</p>

        <p className="info_description">{description.substring(0, 100)}</p>

        <p className="info_price">${price}</p>

        <Link to={`/product/${productId}`} className="info_button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Tour;
