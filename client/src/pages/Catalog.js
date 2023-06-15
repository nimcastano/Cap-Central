// import { useEffect, useState } from "react";
import './Catalog.css';
// import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Browse from '../components/Browse';
// import { useEffect, useState } from 'react';

export default function Catalog() {
  return (
    <div className="w-4/5 max-w-4xl flex flex-col justify-center items-center my-4">
      <Carousel />
      <Browse />
    </div>
  );
}
