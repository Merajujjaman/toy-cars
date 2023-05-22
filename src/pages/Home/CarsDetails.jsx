import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";


const CarsDetails = () => {
    useTitle('Details')
    const carDetails = useLoaderData()
    // console.log(carDetails);
    const { toy_name, price, seller_name, picture, rating, details, category, available_quantity
    } = carDetails
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img src={picture} alt="toys picture is not found" className=" rounded-lg shadow-2xl" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-5xl font-bold">
                        {toy_name}
                        <div className="badge badge-secondary">Raring: {rating}</div>
                    </h1>
                    <p className="text-xl font-bold pt-6">Detailes</p>
                    <p className="pb-6">{details}</p>
                    <p className="pb-2 text-xl font-bold">Category: {category}</p>
                    <p className="pb-2 text-xl font-bold">Quantity:   {available_quantity}</p>
                    <p className="pb-2 text-xl font-bold">Seller: {seller_name}</p>
                    <p className="pb-2 text-xl font-bold text-green-500">Price: {price}</p>
                    <Link to='/'>
                        <button className="btn btn-primary">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarsDetails;