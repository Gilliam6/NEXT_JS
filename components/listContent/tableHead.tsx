import Link from 'next/link';

function TableHead()
{
   return ( 
   <thead>
    <tr>
      <th>Title</th>
      <th>Amount</th>
      <th>Price</th>
      <th>Shop</th>
      <th>
          <Link href="/groceries/create">
            <button className="btn">Add</button>
          </Link>
      </th>
    </tr>
  </thead>);
}

export default TableHead;