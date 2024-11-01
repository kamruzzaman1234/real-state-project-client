// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto px-4 flex justify-between">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#categories" className="hover:underline">Categories</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
