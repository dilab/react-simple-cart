import React from 'react';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-2">
          <Filter />
        </div>
        <div class="col-10">
          <ProductList />
        </div>
        <div class="container mt-5" style={{ maxWidth: 540 }}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;


