import { useEffect, useState } from 'react';
import { fetchCatalog } from '../lib/api';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';

export default function SearchResults() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [size, setSize] = useState();
  const [priceOrder, setPriceOrder] = useState();
  const [filtered, setFiltered] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchCatalog();
        setProducts(data);
        setFiltered(
          data.filter((prod) =>
            prod.productDesc.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, [searchTerm]);

  if (error) {
    return <div>Error Loading Search Results: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products[0]) {
    return <div className="text-lg">No results matching '{searchTerm}'</div>;
  }

  const handleFilters = (e) => {
    e.preventDefault();
    let filteredAndOrdered = products.filter((prod) =>
      prod.productDesc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (size) {
      filteredAndOrdered = filteredAndOrdered.filter((prod) =>
        prod.sizes.sizes.includes(size)
      );
    }
    if (priceOrder) {
      if (priceOrder === 'price asc') {
        filteredAndOrdered = filteredAndOrdered.sort(
          (a, b) => a.price - b.price
        );
      } else {
        filteredAndOrdered = filteredAndOrdered.sort(
          (a, b) => a.price - b.price
        );
        filteredAndOrdered.reverse();
      }
    }
    setFiltered(filteredAndOrdered);
  };

  return (
    <div className="w-full text-center">
      <h2 className="text-lg">Search Results for '{searchTerm}'</h2>
      <div className="flex justify-center">
        <div className="flex items-start mt-8 mr-2">
          <form id="filters" className="flex flex-col" onSubmit={handleFilters}>
            <select
              name="size"
              className="py-2 px-1 text-xs rounded border border-black mb-2"
              onChange={(e) => setSize(e.target.value)}>
              <option value="">Size</option>
              <option value="7">7</option>
              <option value="7 1/4">7 1/4</option>
              <option value="7 3/8">7 3/8</option>
              <option value="7 5/8">7 5/8</option>
              <option value="7 3/4">7 3/4</option>
              <option value="8">8</option>
            </select>
            <select
              name="priceOrder"
              className="py-2 px-1 w-fit text-xs rounded border border-black"
              onChange={(e) => setPriceOrder(e.target.value)}>
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
          <ProductList products={filtered} />
        </div>
      </div>
    </div>
  );
}
