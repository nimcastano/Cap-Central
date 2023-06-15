export default function ProductList({ products }) {
  const itemList = products.map((product) => (
    <li key={product.productId} className="w-1/3 p-2">
      <div className=" bg-white h-full drop-shadow-sm flex flex-col justify-between items-center rounded py-4 px-2">
        <div className="m-2">
          <img src={product.photoUrl.urls[0]} alt={product.productName} />
        </div>
        <div className="flex flex-col items-center">
          <h2>{product.team}</h2>
          <h3>{product.price}</h3>
        </div>
      </div>
    </li>
  ));

  return <ul className="w-full flex flex-wrap">{itemList}</ul>;
}
