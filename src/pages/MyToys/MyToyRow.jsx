import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRow = ({ mySingleToy, reload, setReload }) => {
    // console.log(mySingleToy);
    const { toy_name, seller_name, price, category, quantity, _id } = mySingleToy

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                fetch(`http://localhost:5000/seller/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setReload(!reload)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
        })
    }

    return (
        <tr>
            <td>
                {toy_name}
            </td>
            <td>
                {seller_name}
            </td>
            <td>
                $ {price}
            </td>
            <td>
                {quantity ? quantity : 'Not found'}
            </td>
            <td>{category}</td>
            <th>
                <Link to={`/update/${_id}`} >
                    <button className="btn btn-info btn-xs me-1">Update</button>
                </Link>
                <Link onClick={() => handleDelete(_id)}>
                    <button className="btn btn-error btn-xs">Delete</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyToyRow;