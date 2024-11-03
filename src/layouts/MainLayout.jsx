import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const MainLaout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Hero */}
            <Hero> </Hero>
            <div className="min-h-[calc(100vh-300px)]">
            {/* Dynamic Contents */}
            <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default MainLaout;