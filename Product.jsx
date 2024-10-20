import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
