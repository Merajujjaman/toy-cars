import { Link } from "react-router-dom";

const CarsCard = ({ singleCar }) => {
    const { _id,toy_name, price, rating, picture } = singleCar
    return (

        <div className="card w-full bg-base-100 shadow-xl">

            <figure><img src={picture} className="object-cover h-40 rounded-xl" alt="toys photo not found" /></figure>

            <div className="card-body">
                <h2 className="card-title">
                    {toy_name}
                    <div className="badge badge-secondary">Raring: {rating}</div>
                </h2>
                <p className="text-green-500">price: {price}</p>
                
                <Link to={`/carDetails/${_id}`} className="card-actions justify-end">
                    <button className="btn btn-outline">Details</button>
                </Link>
            </div>
        </div>

    );
};

export default CarsCard;