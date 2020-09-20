import React from 'react';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="container-fluid mt-5">
      <ShoppingCart />
    </div>
  );
}

export default App;


