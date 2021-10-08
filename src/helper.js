export const getCart = () => {
  let cart = [];
  if (window.localStorage.getItem("cart"))
  cart = window.localStorage.getItem("cart");
  return cart;
};
export const storeCart = (Cart) => {
  window.localStorage.setItem("cart", JSON.stringify(Cart));
};
