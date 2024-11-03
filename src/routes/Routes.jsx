import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        },
      ]
    },
    
  ]);

export { router };

