import { Link } from "react-router-dom";


const ToyRow = ({ toy }) => {
    const { toy_name, seller_name, price, category, quantity, _id } = toy
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
                <Link to={`/toyDetails/${_id}`}>
                    <button className="btn btn-info btn-xs">details</button>
                </Link>
            </th>
        </tr>

    );
};

export default ToyRow;