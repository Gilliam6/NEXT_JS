function ModalWindow() {
    return (
    <div className="fixed top-0 bottom-0 left-0 right-0">
        <div className="fixed left-1/3 top-1/3 w-70 h-40 bg-white text-black flex flex-row justify-center items-center rounded-xl">
            <div className="basis-full text-center"><p>Do you really want to delete this item?</p></div>
            <div className="basis-1/2"><button className="btn">Cancel</button></div>
            <div className="basis-1/2"><button className="btn">Delete</button></div>
        </div>
    </div>
    );
}

export default ModalWindow;