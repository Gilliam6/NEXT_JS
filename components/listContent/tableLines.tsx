import { Fragment, useState } from "react";
import BackDrop from "../modalWindow/backDrop";
import ModalWindow from "../modalWindow/modalWindow";

 
function TableLines(props : any) {
    function deleteHandler() {
        setModalIsOpen(true);
        console.log(modalIsOpen)
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    const [ modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Fragment>
        <tr className="text-center">
            <td>{props.Title}</td>
            <td>{props.Amount}</td>
            <td>{props.Price}</td>
            <td>{props.Shop}</td>
            <td><button className="btn" onClick={deleteHandler}>Delete</button></td>
        </tr>
        {modalIsOpen ? <BackDrop onCancel={closeModalHandler}/> : null}
        {modalIsOpen ? <ModalWindow onCancel={closeModalHandler}/> : null}

        </Fragment>
    );
}

export default TableLines;