import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";
import useTitle from "../hooks/useTitle";


const AllToys = () => {
    const [toys, setToys] = useState([])
    const [search, setSearch] = useState('')
    useTitle('All Toys')
    
    // console.log(search);


    useEffect(() => {
        fetch('https://toy-car-meraj-server.vercel.app/addToy')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(toys);

    const handleSearch = () => {
        fetch(`https://toy-car-meraj-server.vercel.app/search/${search}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
            .catch(error => {
                console.log(error);
                
            })
    }

    return (
        <div className="my-8  min-h-screen">
            <div className=" my-2">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs me-2" />
                <button onClick={handleSearch} className="btn btn-info">search</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllToys;