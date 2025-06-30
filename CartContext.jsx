// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, searchQuery, setSearchQuery }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
