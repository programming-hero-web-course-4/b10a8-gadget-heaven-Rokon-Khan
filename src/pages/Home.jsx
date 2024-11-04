import { Outlet, useLoaderData } from "react-router-dom";
import AllCards from "../components/AllCards";
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
      <Categories categories={categories}></Categories>
      <AllCards></AllCards>
      <div className="min-h-[calc(100vh-300px)]">
        {/* Dynamic Contents */}
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};
export default Home;
