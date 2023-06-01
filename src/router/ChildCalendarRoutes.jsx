import { Navigate } from "react-router-dom";
import { CalendarPage } from "../calendar";

export const ChildCalendarRoutes = [
    {
        path: "/",
        element: <CalendarPage />,
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
];