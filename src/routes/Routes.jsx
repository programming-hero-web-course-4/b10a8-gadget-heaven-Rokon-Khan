import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import ProductCards from "../components/ProductCards";
import Wishlist from "../components/Wishlist";
import MainLaout from "../layouts/MainLayout";
import CardDetails from "../pages/CardDetails";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("../categories.json"),
    children: [
      {
        path: "/category/:category",
        element: <ProductCards></ProductCards>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
  {
    path: "/product/:id",
    element: <CardDetails></CardDetails>,
    loader: () => fetch("../products.json"),
  },

  {
    path: "/statistics",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
    ],
  },
]);

export { router };
