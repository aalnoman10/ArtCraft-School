import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Resister from "../pages/Login/Resister/Resister";
import Error from "../Layout/Error";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyClass from "../pages/Dashboard/Instructor/MyClass/MyClass";
import AddItem from "../pages/Dashboard/Instructor/AddItem/AddItem";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Feedback from "../pages/Dashboard/Admin/Feedback/feedback";

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
                element: <Instructors />
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Home />
                    },

                    // admin
                    {
                        path: '/dashboard/admin/manage-users',
                        element: <AdminRoute><ManageUsers /></AdminRoute>
                    },
                    {
                        path: '/dashboard/admin/manage-classes',
                        element: <AdminRoute><ManageClasses /></AdminRoute>
                    },
                    {
                        path: '/dashboard/admin/feedback',
                        element: <AdminRoute><Feedback /></AdminRoute>
                    },

                    // instructor
                    {
                        path: '/dashboard/instructor/add-a-class',
                        element: <InstructorRoute><AddItem /></InstructorRoute>
                    },
                    {
                        path: '/dashboard/instructor/my-class',
                        element: <InstructorRoute> <MyClass /></InstructorRoute>
                    },
                ]
            },
        ]
    },
    {
        path: "*",
        element: <Error />
    }
]);

export default Router;