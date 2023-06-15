import { useEffect, useState } from 'react';
import './Carousel.css';

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
      <div className="flex justify-between items-center w-4/5 h-96 bg-white drop-shadow-md rounded px-4 mb-4">
        <i className="arrow fa-solid fa-chevron-left" />
        <div className="h-full flex justify-center items-center flex-col">
          <img
            src={imgs[hatId].photoUrl.urls[0]}
            alt={imgs[hatId].productName}
            className="h-3/4 mb-2"
          />
          <h2 className="text-center">{imgs[hatId].productName}</h2>
        </div>
        <i className="arrow fa-solid fa-chevron-right" />
      </div>
    );
  }
}
