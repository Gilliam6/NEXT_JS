function TableLines(props : any) {
    return (
        <tr>
            <td>{props.Title}</td>
            <td>{props.Amount}</td>
            <td>{props.Price}</td>
            <td>{props.ShopId}</td>
            <td className="text-center"><button className="btn">Delete</button></td>
        </tr>
    )
}

export default TableLines;