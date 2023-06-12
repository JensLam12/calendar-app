
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../Auth';
import { CalendarRoutes } from '../calendar'
import { ChildAuthRoutes } from './ChildAuthRoutes';
import { ChildCalendarRoutes } from './ChildCalendarRoutes';
import { useAuthStore } from '../hooks/useAuthStore';
import { useEffect } from 'react';

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
    
    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])
    

    if( status === 'checking') {
        return(
            <h3>Cargando...</h3>
        )
    }

    if( status === 'not-authenticated') {
        return <RouterProvider router={routesConfig} />;
    } else {
        return <RouterProvider router={routesConfigWithoutAuth} />;
    }

}