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
      <div className="w-full flex flex-wrap">
        <ProductList products={products} />
      </div>
    );
  }
}
