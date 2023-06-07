import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

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