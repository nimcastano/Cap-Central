import { useEffect, useState } from 'react';
import { fetchCatalog } from '../lib/api';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';

export default function SearchResults() {
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  const { searchTerm } = useParams();

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
    const filteredProds = products.filter((prod) =>
      prod.productDesc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="flex flex-col w-4/5">
        <div className="w-full text-center">
          <h2>Search Results for '{searchTerm}'</h2>
        </div>
        <ProductList products={filteredProds} />
      </div>
    );
  }
}
