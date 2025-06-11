// components/Navbar.jsx
import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`bg-red-600 ${darkMode ? 'dark:bg-blue-800' : ''} py-4 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-2xl font-bold">
            beladiri 
          </a>
          <div>
            <a href="/" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Beranda
            </a>
           
            <button onClick={toggleDarkMode} className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              {darkMode ? 'Mode Terang' : 'Mode Gelap'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
