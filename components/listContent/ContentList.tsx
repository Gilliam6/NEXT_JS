function ContentList() {
    const itemList : object = {
        Title : "Banana",
        Amount : 100,
        Price : 0.2,
        Shop : "BestBostonGrocery(BBG)"
    }
    function renderItems(iList){
        for (let item of iList) {
            item.Title;
            item.Amount;
            item.Price;
            item.Shop;
        }
    }
    return (
    <div className="max-w-967px">
        <table className="table-auto">
  <thead>
    <tr>
      <th>Title</th>
      <th>Amount</th>
      <th>Price</th>
      <th>Shop</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
    </div>);
}

export default ContentList;