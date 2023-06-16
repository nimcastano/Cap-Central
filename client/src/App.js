import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="bg flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
