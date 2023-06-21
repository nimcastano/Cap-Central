import { useEffect, useState } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

export default function Carousel() {
  const [hatId, setHatId] = useState(1);
  const [imgs, setImgs] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getPhotos() {
      try {
        const result = await fetch('/api/productPhotos');
        if (!result.ok) {
          throw new Error(`fetch Error ${result.status}`);
        }
        const data = await result.json();
        setImgs(data);
      } catch (error) {
        setError(error);
      }
    }
    getPhotos();
  }, []);

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    const interval = setInterval(
      () => setHatId((hatId + 1) % imgs.length),
      3000
    );
    return () => clearInterval(interval);
  }, [hatId, imgs]);

  if (imgs !== undefined) {
    return (
      <div className="flex justify-between items-center w-4/5 h-80 bg-white drop-shadow-md rounded px-4 mb-4">
        <i
          className="arrow fa-solid fa-chevron-left"
          onClick={() => setHatId((hatId - 1 + imgs.length) % imgs.length)}
        />
        <Link
          className="flex justify-center items-center flex-col"
          to={`/details/${imgs[hatId].productId}`}>
          <div className="h-3/4 mb-2 max-h-fit flex flex-col items-center">
            <img
              src={imgs[hatId].photoUrl.urls[0]}
              alt={imgs[hatId].productName}
              className="max-h-64"
            />
            <h2 className="text-center">{imgs[hatId].productName}</h2>
          </div>
        </Link>
        <i
          className="arrow fa-solid fa-chevron-right"
          onClick={() => setHatId((hatId + 1) % imgs.length)}
        />
      </div>
    );
  }
}
