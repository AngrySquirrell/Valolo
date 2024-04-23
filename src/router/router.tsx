import React from "react";
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Agents from "../pages/Agents";
import Agent from "../pages/Agent";

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
                {
                    path: "/agents",
                    element: <Agents />
                },
                {
                    path: "/agents/:uuid",
                    element: <Agent />
                },
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