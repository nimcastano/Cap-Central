import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import SearchResults from './pages/SearchResults';
import './App.css';

function App() {
  return (
    <div className="bg flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="results/:searchTerm" element={<SearchResults />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
