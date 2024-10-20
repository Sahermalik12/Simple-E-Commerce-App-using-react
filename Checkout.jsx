import React, { useState } from 'react';

const Checkout = ({ cartItems, handleClearCart }) => {
  const [form, setForm] = useState({ name: '', address: '', email: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Your cart is empty');
    } else {
      alert(`Thank you for your purchase, ${form.name}!`);
      handleClearCart();
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
