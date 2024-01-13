import React ,{lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import About from "./components/About";
import User from "./components/User";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
// import Grocery from "./components/Grocery";
import Shimmer from "./components/Shimmer";

const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
      <Outlet />
      <Footer/>
    </div>
  );
};
const Grocery = lazy(() => import("./components/Grocery"))
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/conatct",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
      {
        path: "/reastaurat/:resId",
        element: <RestaurantMenu />,
      },

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
