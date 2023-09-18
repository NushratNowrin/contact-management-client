import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../components/Login/Login";
import App from "../App";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/home",
      element: <PrivateRouter><App></App></PrivateRouter>
     
    }
  ]);

  export default router;