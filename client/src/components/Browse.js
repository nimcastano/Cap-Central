// import { Link } from 'react'

import { useEffect, useState } from 'react';
import ProductList from './ProductList';

export default function Browse() {
  const [products, setProducts] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await fetch('api/browse');
        if (!result.ok) {
          throw new Error(`fetch Error ${result.status}`);
        }
        const data = await result.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    }
    getProducts();
  }, []);

  if (error) {
    console.error(error);
  }

  if (products !== undefined) {
    return (
      <div className="w-full flex flex-wrap">
        <ProductList products={products} />
      </div>
    );
  }
}
