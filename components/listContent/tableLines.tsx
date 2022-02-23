import { useState } from "react";

 
function TableLines(props : any) {
    // const [modalState, ModalHandler] = useState(false);
    // function ModalHandler(modalState) {
    //     if (modalState === false)
    //         modalState = true
    //     return (modalState);
    // }
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