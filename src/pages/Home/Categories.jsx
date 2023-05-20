import { useEffect, useState } from "react";


const Categories = () => {
    const [category, setCategory] =useState('Sports')

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${category}`)
        .then(res => res.json())
        .then( data => {
            console.log(data);
        })
    },[category])

    return (
        <div>
            <div className="text-center my-4 flex gap-2 justify-center items-center">
                <h3 className="text-3xl font-bold text-green-500">Category:</h3>
                
                <button onClick={() => setCategory('Sports')} className={category==='Sports'? 'border-2 border-green-400 bg-green-400 px-4 mx-1 rounded' : 'border-2 border-black px-4 mx-1 rounded'}>Sports Car</button>
                <button onClick={() => setCategory('Police')}className={category==='Police'? 'border-2 border-green-400 bg-green-400 px-4 mx-1 rounded' : 'border-2 border-black px-4 mx-1 rounded'}>Police Car</button>
                <button onClick={() => setCategory('Truck')} className={category==='Truck'? 'border-2 border-green-400 bg-green-400 px-4 mx-1 rounded' : 'border-2 border-black px-4 mx-1 rounded'}>Truck</button>
            </div>
        </div>
    );
};

export default Categories;