import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingCart from './components/ShoppingCart';

function App() {

  const products = [
    { id: 1, size: 'S', name: "Cat Tee Black T-Shirt", price: 10.90, isFreeShipping: true, imgLink: 'https://via.placeholder.com/300x400.png' },
    { id: 2, size: 'M', name: "Cat Tee Black T-Shirt", price: 10.90, isFreeShipping: false, imgLink: 'https://via.placeholder.com/300x400.png' },
    { id: 3, size: 'L', name: "Cat Tee Black T-Shirt", price: 10.90, isFreeShipping: true, imgLink: 'https://via.placeholder.com/300x400.png' },
    { id: 4, size: 'XL', name: "Cat Tee Black T-Shirt", price: 10.90, isFreeShipping: false, imgLink: 'https://via.placeholder.com/300x400.png' },
  ];

  return (
    <div className="container-fluid mt-5">
      <ShoppingCart products={products} />
    </div>
  );
}

export default App;


