import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    // console.log(data);
    const { toy_name, seller_name, price, quantity, _id } = data

    const handleUpdateToy = e => {
        e.preventDefault()
        const form = e.target

        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const category = form.category.value;
        const seller_email = form.seller_email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;

        const updateToyData = {
            toy_name,
            category,
            seller_name,
            seller_email,
            price,
            quantity

        }
        console.log(updateToyData);

        fetch(`http://localhost:5000/seller/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'upload seccessfull',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/myToys')

                }
            })

    }


    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Update Your Toy</h1>


            <form onSubmit={handleUpdateToy} className="bg-blue-100 p-2 md:p-4 rounded my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toy_name" defaultValue={toy_name} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Category</span>
                        </label>
                        <select name="category" className="select w-full max-w-xs" >
                            <option disabled selected >Select Category</option>
                            <option value='Sports'>Sports Car</option>
                            <option value='Police'>Police Car</option>
                            <option value='Truck'>Truck</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="seller_name" className="input input-bordered" defaultValue={seller_name} required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="seller_email" defaultValue={user?.email} placeholder="seller email" readOnly className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <input type="number" name="price" defaultValue={price} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name="quantity" defaultValue={quantity} className="input input-bordered" required />
                    </div>

                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;