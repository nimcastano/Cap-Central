import { Link } from 'react-router-dom';

export default function ProductList({ products }) {
  const itemList = products.map((product) => (
    <li
      key={product.productId}
      className="w-1/4 p-2 transition duration-300 ease-in-out hover:scale-110">
      <Link
        to={`/details/${product.productId}`}
        className=" bg-white h-full drop-shadow-sm flex flex-col justify-between items-center rounded py-2 px-2">
        <div className="m-2">
          <img src={product.photoUrl.urls[0]} alt={product.productName} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-center text-sm">{product.team}</h2>
          <h3 className="text-sm">{product.price}</h3>
        </div>
      </Link>
    </li>
  ));

  return <ul className="w-full flex flex-wrap">{itemList}</ul>;
}
