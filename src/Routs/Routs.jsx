import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import CarsDetails from "../pages/Home/CarsDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/carDetails/:id',
                element: <CarsDetails></CarsDetails>,
                loader:({params}) => fetch(`http://localhost:5000/details/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add',
                element: <AddToys></AddToys>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            }
        ]
    },
]);

export default router;