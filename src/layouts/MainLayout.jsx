import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLaout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            
            <div className="min-h-[calc(100vh-300px)] py-12 container mx-auto px-12">
            {/* Dynamic Contents */}
            <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
            
        </div>
    );
};

export default MainLaout;