import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('../categories.json'),
    },
    {
      path: '/category/:category',
      element: <ProductCards></ProductCards>,
      loader: () => fetch('../coffees.json'),
    },
      
    {
      path: "/statistics",
      element: <MainLaout></MainLaout>,
      children: [
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <MainLaout></MainLaout>,
      children: [
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        },
      ]
    },
    
    
  ]);

export { router };

