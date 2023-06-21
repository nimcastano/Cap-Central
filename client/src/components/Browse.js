// import { Link } from 'react'

import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { fetchCatalog } from '../lib/api';

export default function Browse() {
  const [products, setProducts] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchCatalog();
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
      <div className="w-full flex flex-wrap flex-col items-center">
        <h2 className="text-lg text-bold text-center bg-red-800 text-white w-full mb-2">
          Newest Arrivals
        </h2>
        <ProductList products={products} />
      </div>
    );
  }
}
