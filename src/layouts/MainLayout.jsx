import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLaout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      <Toaster></Toaster>
      {/* Hero */}
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
