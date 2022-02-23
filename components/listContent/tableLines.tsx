function TableLines(props : any) {
    return (
        <tr className="text-center">
            <td>{props.Title}</td>
            <td>{props.Amount}</td>
            <td>{props.Price}</td>
            <td>{props.Shop}</td>
            <td><button className="btn">Delete</button></td>
        </tr>
    );
}

export default TableLines;