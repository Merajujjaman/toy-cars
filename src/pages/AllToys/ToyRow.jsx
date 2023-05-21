

const ToyRow = ({ toy }) => {
    const { toy_name, seller_name, price, category,quantity } = toy
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
                {quantity? quantity : 'Not found'}
            </td>
            <td>{category}</td>
            <th>
                <button className="btn btn-info btn-xs">details</button>
            </th>
        </tr>

    );
};

export default ToyRow;