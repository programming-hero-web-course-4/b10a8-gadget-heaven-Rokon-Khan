import { createBrowserRouter } from "react-router-dom";
import ProductCards from "../components/ProductCards";
import MainLaout from "../layouts/MainLayout";
import CardDetails from "../pages/CardDetails";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Home from "../pages/Home";
import New from "../pages/New";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("../categories.json"),
    children: [
      {
        path: "/",
        element: <ProductCards></ProductCards>,
        loader: () => fetch("../products.json"),
      },
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
      },
    ],
  },
  {
    path: "/new",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/new",
        element: <New></New>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export { router };
