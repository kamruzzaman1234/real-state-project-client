// src/components/Categories.js
import React from 'react';

const Categories = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Categories</h3>
      <ul className="mt-4 space-y-2">
        <li><a href="/" className="text-blue-600 hover:underline">Technology</a></li>
        <li><a href="/" className="text-blue-600 hover:underline">Lifestyle</a></li>
        <li><a href="/" className="text-blue-600 hover:underline">Education</a></li>
        <li><a href="/" className="text-blue-600 hover:underline">Travel</a></li>
      </ul>
    </div>
  );
};

export default Categories;
