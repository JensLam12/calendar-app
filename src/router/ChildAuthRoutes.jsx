import { Navigate } from "react-router-dom";
import { LoginPage } from "../Auth";

export const ChildAuthRoutes = [
    {
        path: "",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate to={"/auth"} />,
    },
];