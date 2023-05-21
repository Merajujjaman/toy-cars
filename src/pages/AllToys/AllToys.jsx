import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";


const AllToys = () => {
    const [toys, setToys] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:5000/addToy')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    console.log(toys);

    return (
        <div className="my-8">
            
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