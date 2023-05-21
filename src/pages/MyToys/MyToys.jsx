import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
    const [myToyaData, setMyToyData] = useState([])
    const { user } = useContext(AuthContext)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/seller?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToyData(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [user, reload])

    console.log(myToyaData);

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
                            myToyaData.map(mySingleToy => <MyToyRow
                            key={mySingleToy._id}
                            mySingleToy={mySingleToy}
                            reload={reload}
                            setReload={setReload}
                            ></MyToyRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyToys;