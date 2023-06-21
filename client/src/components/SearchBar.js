import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/results/${searchTerm}`);
    document.getElementById('search').reset();
  };

  return (
    <form className="flex items-center" id="search" onSubmit={handleSearch}>
      <input
        name="key"
        type="textbox"
        placeholder="ex: Dodgers"
        className="rounded bg h-4/5 p-1 mr-2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <i
          className="fa-solid fa-magnifying-glass w-full text-amber-400 text-xl"
          onClick={handleSearch}></i>
      </button>
    </form>
  );
}
