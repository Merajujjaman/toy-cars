import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import CarsDetails from "../pages/Home/CarsDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import SellerToyDetails from "../pages/AllToys/SellerToyDetails";
import PrivateRouts from "./PrivateRouts";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/MyToys/UpdateToy";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/carDetails/:id',
                element: <PrivateRouts><CarsDetails></CarsDetails></PrivateRouts>,
                loader:({params}) => fetch(`https://toy-car-meraj-server.vercel.app/details/${params.id}`)

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
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRouts><SellerToyDetails></SellerToyDetails></PrivateRouts>,
                loader: ({params}) => fetch(`https://toy-car-meraj-server.vercel.app/addToy/${params.id}`) 
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            },
            {
                path:'/update/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`https://toy-car-meraj-server.vercel.app/addToy/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
]);

export default router;