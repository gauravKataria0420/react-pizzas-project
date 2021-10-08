import Products from "../components/products.js";
const Home = () => {
  return (
    <>
      <div className=" Hero py-16 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2 ml-12">
            <h6 className="text-lg">
              <em>Are you Hungry?</em>
            </h6>
            <h1 className="text-3xl md:text-3xl font-bold">Don't wait !</h1>
            <button className="px-6 py-2 bg-yellow-500 text-white mt-4 font-bold rounded-full hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img className="w-4/5" src="/images/pizza.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <Products />
      </div>
    </>
  );
};
export default Home;
