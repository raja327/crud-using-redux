import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./AddUser";
import Update from "./Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
      {
        path: "/create",
        element: <AddUser />,
      },
  
      {
        path: "/edit/:id",
        element: <Update />,
      },
  
 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
