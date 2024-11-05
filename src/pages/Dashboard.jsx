import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { getAllCarts } from "../utilities/main";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const carts = getAllCarts();
    setProducts(carts);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const carts = getAllCarts();
    setProducts(carts);
  };
  return (
    <div>
      <div className="w-full h-[250px] bg-[#9538E2] text-center text-white space-y-3  py-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className=" max-w-[796px] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="">
          <button className="btn mr-6 text-lg font-bold rounded-full">
            Cart
          </button>
          <button className="btn text-lg font-bold rounded-full">
            Wishlisht
          </button>
        </div>
      </div>

      <div className="max-w-[1024px] py-4 rounded-xl mx-auto">
        {products.map((product) => (
          <Cart
            handleRemove={handleRemove}
            key={product.id}
            product={product}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
