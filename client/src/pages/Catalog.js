// import { useEffect, useState } from "react";
import './Catalog.css';
// import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { useEffect, useState } from 'react';

export default function Catalog() {
  const [hats, setHats] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getPhotos() {
      try {
        const result = await fetch('/api/productPhotos');
        if (!result.ok) {
          throw new Error(`fetch Error ${result.status}`);
        }
        const data = await result.json();
        setHats(data);
      } catch (error) {
        setError(error);
      }
    }
    getPhotos();
  }, []);

  if (error) {
    console.error(error);
  }

  return (
    <div className="w-4/5 max-w-4xl flex justify-center items-center my-4">
      <Carousel imgs={hats} />
    </div>
  );
}
