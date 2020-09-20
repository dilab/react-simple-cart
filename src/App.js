import React from 'react';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-2">
          <Filter />
        </div>
        <div className="col-10">
          <ProductList />
        </div>
        <div className="container mt-5" style={{ maxWidth: 540 }}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;


