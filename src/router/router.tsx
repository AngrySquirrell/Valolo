import React from "react";
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Router = ({ children }: { children: React.ReactNode }) => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: children,
            children: [
                {
                    path: "/",
                    element: (

                        <Dashboard />

                    ),
                },
                // {
                //     path: "/users",
                //     element: (

                //             <Users />

                //     ),
                // },
                {
                    path: "*",
                    element: <Navigate to={"/"} />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Router;