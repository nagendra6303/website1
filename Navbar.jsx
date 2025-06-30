import React, { useState } from 'react';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { useCart } from './CartContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-300 text-black px-4 sm:px-6 py-4 sm:py-5 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg">
        
        {/* Logo & Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-3xl font-extrabold tracking-wide text-pink-600">Shopsy</div>
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links */}
        <div className={`flex-col md:flex md:flex-row md:items-center gap-4 sm:gap-6 text-lg font-semibold transition-all duration-300 ease-in-out ${
          menuOpen ? 'flex mt-4' : 'hidden md:flex'
        }`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</Link>
          <Link to="/Men" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Men</Link>
          <Link to="/Women" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Women</Link>
          <Link to="/Kids" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Kids</Link>

          {/* SearchBar & Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div className="w-full sm:w-auto">
              <SearchBar />
            </div>

            <div className="flex items-center gap-4">
              <Link to="/Cart" className="relative" title="Cart">
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
                <FaShoppingCart className="text-2xl hover:text-blue-400" />
              </Link>

              <Link to="/Login" className="hover:bg-gray-200 p-1 rounded-full">
                <FaUserCircle className="text-2xl hover:text-gray-400" title="Account" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Space below navbar */}
      <div className="h-1 sm:h-10"></div>
    </>
  );
};

export default Navbar;
