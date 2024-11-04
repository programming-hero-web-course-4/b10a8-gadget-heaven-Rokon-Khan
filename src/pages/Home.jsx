import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
           <Header></Header> 
           <Banner></Banner>
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
        
        
