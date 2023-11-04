import { useEffect, useState } from "react";
import CarsCard from "./CarsCard";


const Categories = () => {
    const [category, setCategory] =useState('Sports')
    const  [carsData, setCarsData] =useState([])
    // console.log(carsData);

    useEffect(() => {
        fetch(`https://toy-car-meraj-server.vercel.app/cars/${category}`)
        .then(res => res.json())
        .then( data => {
            console.log(data);
            setCarsData(data)
            
        })
    },[category])

    return (
        <div>
            <div className="text-center my-4 md:flex gap-2 mb-10 justify-center items-center">
                <h3 className="text-3xl font-bold text-transparent animated-gradient">Category:</h3>
                
                <button onClick={() => setCategory('Sports')} className={category==='Sports'? 'border-2 border-green-400 bg-green-400 px-4 mx-1 rounded' : 'border-2 border-black px-4 mx-1 rounded'}>Sports Car</button>
                <button onClick={() => setCategory('Police')}className={category==='Police'? 'border-2 border-green-400 bg-green-400 px-4 mx-1 rounded' : 'border-2 border-black px-4 mx-1 rounded'}>Police Car</button>
                <button onClick={() => setCategory('Truck')} className={category==='Truck'? 'border-2 border-green-400 bg-green-400 px-4 mx-1 rounded' : 'border-2 border-black px-4 mx-1 rounded'}>Truck</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-5 md:mx-10">
                {
                    carsData.map(singleCar => <CarsCard
                    key={singleCar._id}
                    singleCar={singleCar}
                    ></CarsCard>)
                }
            </div>
        </div>
    );
};

export default Categories;