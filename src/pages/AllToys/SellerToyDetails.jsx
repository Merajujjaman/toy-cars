import { Link, useLoaderData } from "react-router-dom";

const SellerToyDetails = () => {
    const SingleToyData = useLoaderData()
    const {toy_name, seller_name, category, price, rating, details, photo,quantity} = SingleToyData
    console.log(SingleToyData);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img src={photo} alt="toys picture is not found" className=" rounded-lg shadow-2xl" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-5xl font-bold">
                        {toy_name}
                        <div className="badge badge-secondary">Raring: {rating}</div>
                    </h1>
                    <p className="text-xl font-bold pt-6">Detailes</p>
                    <p className="pb-6">{details}</p>
                    <p className="pb-2 text-xl font-bold">Category: {category}</p>
                    <p className="pb-2 text-xl font-bold">Quantity: {quantity}</p>
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

export default SellerToyDetails;