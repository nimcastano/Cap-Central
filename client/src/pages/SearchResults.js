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
      <div className="w-full text-center">
        <h2 className="text-lg">Search Results for '{searchTerm}'</h2>
        <div className="flex justify-center">
          <div className="flex items-start mt-8 mr-2">
            <form className="flex flex-col">
              <select
                name="size"
                className="py-2 px-1 text-xs rounded border border-black mb-2">
                <option value="">Size</option>
                <option value="7">7</option>
                <option value="7 1/4">7 1/4</option>
                <option value="7 3/8">7 3/8</option>
                <option value="7 5/8">7 5/8</option>
                <option value="7 3/4">7 3/4</option>
                <option value="8">8</option>
              </select>
              <select
                name="price-order"
                className="py-2 px-1 w-fit text-xs rounded border border-black">
                <option value="">Order By Price</option>
                <option value="price asc">Lowest to Highest</option>
                <option value="price desc">Highest to Lowest</option>
              </select>
              <button
                type="submit"
                className="bg-black rounded text-xs w-28 h-8 mt-2 text-amber-400">
                Apply Filters
              </button>
            </form>
          </div>
          <div className="flex flex-col w-2/3">
            <ProductList products={filteredProds} />
          </div>
        </div>
      </div>
    );
  }
}
