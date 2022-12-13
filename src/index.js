import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Categories from "./Pages/Categories";
import ProductDetails from "./Pages/ProductDetails";
import Regester from "./Pages/Regester.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: ":productId", element: <ProductDetails /> },

      { path: "categories", element: <Categories /> },
    ],
  },
  { path: "regester", element: <Regester /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
