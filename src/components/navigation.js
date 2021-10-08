import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
const Navigation = () => {
  const styleCart = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };

  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="container mx-auto flex text-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="/images/logo.png" alt="Logo" />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={styleCart}>
                <span className="text-white">
                  {cart.totalItems ? cart.totalItems : 0}
                </span>
                <img
                  className="ml-2 text-white"
                  src="/images/cart.png"
                  alt="cart"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
