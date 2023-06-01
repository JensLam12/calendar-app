
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../Auth';
import { CalendarRoutes } from '../calendar'
import { ChildAuthRoutes } from './ChildAuthRoutes';
import { ChildCalendarRoutes } from './ChildCalendarRoutes';

const routesConfig = createBrowserRouter([
    {
        path: "auth",
        element: (
            <AuthRoutes />
        ),
        children: ChildAuthRoutes,
    },
    {
        path: "/",
        element: (
            <CalendarRoutes />
        ),
        children: ChildCalendarRoutes,
    },
]);

const routesConfigWithoutAuth= createBrowserRouter([
    {
        path: "/",
        element: (
            <CalendarRoutes />
        ),
        children: ChildCalendarRoutes,
    },
]);

export const AppRouter = () => {
    
    const status  = 'not-authenticated';

    return <RouterProvider router={routesConfig} />;

    // if( status === 'not-authenticated') {
    //     return <RouterProvider router={routesConfig} />;
    // } else {
    //     return <RouterProvider router={routesConfigWithoutAuth} />;
    // }

}