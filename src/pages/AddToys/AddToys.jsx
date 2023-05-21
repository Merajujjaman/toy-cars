import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddToys = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = e => {
        e.preventDefault()
        const form = e.target

        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const category = form.category.value;
        const seller_email = form.seller_email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const photo = form.photo_url.value;
        // console.log(toy_name, seller_name, seller_email, category,price, rating,details, photo);

        const addToyData = {
            toy_name,
            category,
            seller_name,
            seller_email,
            price,
            rating,
            quantity,
            details,
            photo
        }

        fetch('https://toy-car-meraj-server.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'upload seccessfull',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Add Your Toy</h1>


            <form onSubmit={handleAddToy} className="bg-blue-100 p-2 md:p-4 rounded my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toy_name" placeholder="enter your toy name" className="input input-bordered" required />
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
                        <input type="text" name="seller_name" className="input input-bordered" placeholder="seller name" required />
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
                        <input type="number" name="price" placeholder="enter yous toy's price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Ratings</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating out of 5" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="enter toys quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="url" name="photo_url" placeholder="enter toys quantity" className="input input-bordered" required />
                    </div>



                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input name="details" className="textarea" placeholder="Bio"></input>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Upload" />
                </div>
            </form>
        </div>
    );
};

export default AddToys;