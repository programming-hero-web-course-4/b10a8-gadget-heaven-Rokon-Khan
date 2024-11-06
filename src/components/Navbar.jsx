import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { getAllCarts, getAllWishlists } from "../utilities/main";

const Navbar = () => {
  const [cart, setCart] = useState(0);
  const [wishlist, setWishlist] = useState(0);
  useEffect(() => {
    const carts = getAllCarts();
    const wishlists = getAllWishlists();
    setCart(carts.length);
    setWishlist(wishlists.length);
  }, []);
  return (
    <div className=" lg:px-10 lg:py-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#9538E2]" : "hover:text-warning"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#9538E2]" : "hover:text-warning"
                  }`
                }
                to="/Statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-[#9538E2]" : "hover:text-warning"
                  }`
                }
                to="/Dashboard"
              >
                Dasboard
              </NavLink>
              {/* <Link to="/">Home</Link>
                    <Link to="/Statistics">Statistics</Link>
                    <Link to="/Dashboard">Dashboard</Link> */}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1 gap-6">
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-[#9538E2]" : "hover:text-[#9538E2]"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-[#9538E2]" : "hover:text-[#9538E2]"
                }`
              }
              to="/Statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-[#9538E2]" : "hover:text-[#9538E2]"
                }`
              }
              to="/Dashboard"
            >
              Dasboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${
                  isActive ? "text-[#9538E2]" : "hover:text-[#9538E2]"
                }`
              }
              to="/New"
            >
              New Collection
            </NavLink>
            {/* <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/dashboard">Dashboard</Link> */}
          </ul>
        </div>
        {/* <div className="navbar-end gap-5">
          <IoCartOutline className="text-5xl bg-zinc-200 p-2 rounded-full" />
          <FiHeart className="text-5xl bg-zinc-200 p-2 rounded-full" />
        </div> */}
        <div className="navbar-end gap-5">
          <div>
            <IoCartOutline className="text-5xl bg-zinc-200 p-2 rounded-full"></IoCartOutline>
            <span className="relative -top-12 -right-10 bg-white text-lg font-bold p-2 rounded-full">
              {cart}
            </span>
          </div>
          <div>
            <FiHeart className="text-5xl bg-zinc-200 p-2 rounded-full">
              {" "}
            </FiHeart>
            <span className="relative -top-12 -right-10 bg-white text-lg font-bold p-2 rounded-full">
              {wishlist}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
