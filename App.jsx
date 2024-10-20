import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h1>Simple E-commerce App</h1>
      <ProductList handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
      <Checkout cartItems={cartItems} handleClearCart={handleClearCart} />
    </div>
  );
};

export default App;
