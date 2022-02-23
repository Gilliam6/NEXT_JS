import TableLines from "./tableLines";
import TableHead from "./tableHead";

function ContentList(props : any){
    return (
    <table className="table-fixed w-200">
        <TableHead />
        <tbody>
            {props.foods?.map((product : any)=>
            (<TableLines key={product.id} Title={product.Title} Amount={product.Amount} Price={product.Price} Shop={product.ShopId} />))}
        </tbody>
    </table>);
}

export default ContentList

