import HomePage from "../components/PageComponents/Home/HomePage";
import RootLayout from "./RootLayout";
import { loadMenuData, loadHomeData } from "../api/loader"
import { createBrowserRouter } from "react-router-dom";
import ServicesPage from "../components/PageComponents/ServicesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: loadMenuData,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: loadHomeData,
      },
      {
        path:"/services",
        element:<ServicesPage />,
        
      },
    ],
  },
]);

export default router;
