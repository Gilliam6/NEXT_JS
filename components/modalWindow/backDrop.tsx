function BackDrop(props) {
    return (<div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30" onClick={props.onCancel}></div>);
}

export default BackDrop;