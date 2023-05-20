import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import CarsDetails from "../pages/Home/CarsDetails";

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

            }
        ]
    },
]);

export default router;