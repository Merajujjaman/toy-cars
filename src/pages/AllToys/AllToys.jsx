import { useEffect, useState } from "react";


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
            <h1>Total bookings:</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {/* {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                setLoad={setLoad}
                                load={load}
                            ></BookingRow>)
                        } */}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllToys;