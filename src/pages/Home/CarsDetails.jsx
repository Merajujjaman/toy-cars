import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";


const CarsDetails = () => {
    useTitle('Details')
    const carDetails = useLoaderData()
    // console.log(carDetails);
    const { toy_name, price, seller_name, picture, rating, details, category, available_quantity
    } = carDetails
    return (
        <div className="hero min-h-screen bg-cover" style={{
            backgroundImage: `url(${picture})`,

        }}>
            <div className="backdrop-blur-md backdrop-brightness-50 h-full w-full flex justify-center">
                <div className="hero-content flex-col md:flex-row gap-10">
                    <div className="w-full md:w-1/2">
                        <img src={picture} alt="toys picture is not found" className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-5xl font-bold text-transparent animated-gradient">
                            {toy_name}
                        </h1>
                        <span className="badge badge-secondary text-white">Raring: {rating}</span>
                        <p className="text-xl font-bold text-white pt-6">Detailes</p>
                        <p className="pb-6 text-white italic">{details}</p>
                        <p className="pb-2 text-xl text-white font-bold">Category: {category}</p>
                        <p className="pb-2 text-xl text-white font-bold">Quantity:   {available_quantity}</p>
                        <p className="pb-2 text-xl text-white font-bold">Seller: {seller_name}</p>
                        <p className="pb-2 text-xl  font-bold text-green-500">Price: {price}</p>
                        <Link to='/'>
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsDetails;