import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Navigation from "./components/navigation";
import products from "./Pages/products";
import Cart from "./Pages/Cart.js";
import SingelProduct from "./Pages/SingelProduct";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";
import { getCart, storeCart } from "./helper";
const App = () => {
  const [cart, setCart] = useState({});
  useEffect(() => {
    const cart = getCart();
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/products" exact component={products}></Route>
            <Route path="/products/:_id" component={SingelProduct}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
};
export default App;
