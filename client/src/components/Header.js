import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full flex justify-center items-center mb-2">
        <nav className="w-full bg-black flex justify-between items-center h-14 px-5">
          <div className="h-full flex items-center">
            <i className="fa-solid fa-magnifying-glass w-full text-white text-xl"></i>
          </div>
          <h2>
            <Link to="/" className="title text-amber-400 text-4xl">
              Cap Central
            </Link>
          </h2>
          <h3 className="cart text-amber-400 text-2xl">Cart</h3>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
