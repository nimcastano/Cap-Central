import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [mainPic, setMainPic] = useState();

  useEffect(() => {
    async function getProduct(productId) {
      try {
        const result = await fetch(`/api/browse/${productId}`);
        if (!result.ok) throw new Error(`fetch Error ${result.status}`);
        const product = await result.json();
        setProduct(product[0]);
        setMainPic(product[0].photoUrl.urls[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    getProduct(productId);
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Product {productId}: {error.message}
      </div>
    );
  }

  if (!product) return null;

  const { productName, photoUrl, productDesc, sizes, price } = product;
  const urls = photoUrl.urls;

  const photoList = urls.map((url) => (
    <img
      key={url}
      src={url}
      alt={productName}
      className="w-20 m-1 rounded-md"
      onClick={() => setMainPic(url)}
    />
  ));

  const sizesArr = sizes.sizes;
  const sizeList = sizesArr.map((size) => <option key={size}>{size}</option>);

  return (
    <div className="container flex justify-center w-5/6">
      <div className="flex w-1/2 flex-col justify-around">
        <div className="flex justify-center w-full item-center bg-white drop-shadow-sm rounded-md h-80">
          <img
            src={mainPic}
            alt={productName}
            className="m-1 w-full object-contain"
          />
        </div>
        <div className="w-full flex flex-wrap drop-shadow-sm">{photoList}</div>
      </div>
      <div className="flex w-1/2 flex-col items-center mx-2">
        <div className="flex items-center bg">
          <h2 className="text-center font-bold text-lg">{productName}</h2>
        </div>
        <div className="w-full px-1 my-4">
          <h2 className="w-full text-left font-medium text-xl">{price}</h2>
        </div>
        <div className="w-full">
          <form className="w-full flex justify-evenly">
            <select name="size" id="size">
              <option value="">Size</option>
              {sizeList}
            </select>
            <button
              type="submit"
              className="rounded text-amber-400 text-sm p-1"
              id="add-to-cart">
              Add to Cart
            </button>
          </form>
        </div>
        <div className="w-full m-3 flex justify-center">
          <div className="m-2 p-3 rounded" id="desc-box">
            <h3 className="text-sm mb-1">Description</h3>
            <p className="text-xs">{productDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
