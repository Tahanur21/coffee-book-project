import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayOut/MainLayout";

 
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>
  }
])

export default routes;