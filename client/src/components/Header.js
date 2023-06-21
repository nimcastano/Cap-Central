import './Header.css';
import { Link, Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full flex justify-center items-center mb-2">
        <nav className="w-full bg-black flex items-center h-14 px-5">
          <div className="h-full w-1/3 flex items-center">
            <SearchBar />
          </div>
          <h2 className="w-1/3 text-center">
            <Link to="/" className="title text-amber-400 text-4xl">
              Cap Central
            </Link>
          </h2>
          <h3 className="w-1/3 text-right cart text-amber-400 text-2xl">
            Cart
          </h3>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
