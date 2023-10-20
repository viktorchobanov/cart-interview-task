import React from 'react';

import AppProvider from './Context/CartContext';

import Shop from './components/Shop';
import Cart from './components/Cart';

import './App.css';

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <header>
          <h1>Online Store</h1>
        </header>
        <div className='main-container'>
          <div className='product-list'>
            <Shop />
          </div>
          <div className='cart'>
            <Cart />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
