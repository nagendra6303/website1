import React from 'react';
import Navbar from './assets/Routs/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './assets/Routs/Login';
import Home from './assets/Routs/Home';
import Men from './assets/Routs/Men';
import Signup from './assets/Routs/Signup'; 
import Women from './assets/Routs/Women';
import Kids from './assets/Routs/Kids';
import Cart from './assets/Routs/Cart';
import Footer from './assets/Routs/Footer';
import { CartProvider } from './assets/Routs/CartContext';
import SearchBar from './assets/Routs/SearchBar';





function App() {
  return ( 
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SearchBar" element={<SearchBar />} />
        
          
          
          
          
          

        </Routes>
      </Router>
      
    
    </CartProvider>
  );
}

export default App;
