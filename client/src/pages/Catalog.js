import Carousel from '../components/Carousel';
import Browse from '../components/Browse';

export default function Catalog() {
  return (
    <div className="w-4/5 max-w-4xl flex flex-col justify-center items-center my-4">
      <Carousel />
      <Browse />
    </div>
  );
}
