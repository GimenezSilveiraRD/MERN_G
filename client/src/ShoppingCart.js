import React, { useState } from 'react';

const ShoppingCart = () => {

  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (product) => {
    
  };

 
  const removeFromCart = (productId) => {
   
  };

  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <div>Total: ${calculateTotal()}</div>
    </div>
  );
};

export default ShoppingCart;
