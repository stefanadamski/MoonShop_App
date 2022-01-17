import "./navigation.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import music from '../assets/music.mp3';
import {useAudio} from "react-awesome-audio";

const Navigation = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const { isPlaying, play, toggle } = useAudio({
        src: music,
        loop: true,
        volume: 0.7
  });

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h2>Moon Shop</h2>
      </div>
        <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"> </i>
            <span>
              Cart <span className="cart_logo_icon">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" className="cart_link">Tour Shop</Link>
        </li>
        <li>
            <div onClick={toggle} className="cart_link cart_music">{isPlaying ? "Pause Ambient" : "Play Ambient"} </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
