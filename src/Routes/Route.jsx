import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Resister from "../pages/Login/Resister/Resister";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/resister',
                element: <Resister />
            },
            {
                path: '/instructors',
                element: <Home />
            },
            {
                path: '/classes',
                element: <Home />
            },
            {
                path: '/dashboard',
                element: <Home />
            },
        ]
    },
]);

export default Router;