import Product from "./product";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";

const Products = () => {
  // const { name } = useContext(CartContext);

  const [products, setProducts] = useState([]); //It is called Destrucktureing Statement
  useEffect(() => {
    fetch("https://ecom-rest-apis.herokuapp.com/api/products")
      .then((Response) => Response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <div className="container pb-24 mx-auto">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 gap-24 my-8 ">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
