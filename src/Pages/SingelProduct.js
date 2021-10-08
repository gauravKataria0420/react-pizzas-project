import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from "../CartContext";
import Product from "../components/product";

const SingelProduct = () => {
  const [product, setProduct] = useState({});
  const [adding, setAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const params = useParams();
  const History = useHistory();

  useEffect(() => {
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        // console.log(product);
      });
  }, []);

  const addToCart = (event, product) => {
    event.preventDefault();
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
    }, 600);
  };

  return (
    <div className="container mx-auto mt-12">
      <button
        className="mb-12 text-lg font-bold"
        onClick={() => {
          History.goBack();
        }}
      >
        Back
      </button>
      <div className="flex">
        <img src={product.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="font-bold text-xl">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button
            onClick={(event) => {
              addToCart(event, product);
            }}
            className={`${
              adding ? "bg-green-500" : "bg-yellow-500"
            } bg-yellow-500 py-1 px-4 font-bold rounded-full`}
          >
            {/* Add to Cart */}
            {adding ? "Item Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingelProduct;
