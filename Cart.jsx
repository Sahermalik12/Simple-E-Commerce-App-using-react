import React from 'react';

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
