import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div>
        <h1 className="text-4xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-clos-2 gap-10">
          <div className="shadow-xl lg:col-span-1">
            <Categories categories={categories}></Categories>
          </div>
          <div className=" lg:col-span-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>

      {/* <div className="min-h-[calc(100vh-300px)]"></div> */}

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};
export default Home;
