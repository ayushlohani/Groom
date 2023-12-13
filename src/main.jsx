import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import MyntraStore from "./store/index.js";
import Profile from "./routes/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
