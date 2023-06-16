import { useCallback, useEffect, useState } from 'react';
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

  console.log(product);

  const { productName, photoUrl, productDesc, sizes, team } = product;
  const urls = photoUrl.urls;

  const photoList = urls.map((url) => (
    <img
      key={url}
      src={url}
      alt={productName}
      className="w-20 m-1"
      onClick={() => setMainPic(url)}
    />
  ));

  return (
    <div className="container flex justify-center w-5/6">
      <div className="flex w-1/2 flex-col justify-around">
        <div className="flex item-center bg-white">
          <img src={mainPic} alt={productName} className="m-2" />
        </div>
        <div className="w-full flex flex-wrap">{photoList}</div>
      </div>
    </div>
  );
}
