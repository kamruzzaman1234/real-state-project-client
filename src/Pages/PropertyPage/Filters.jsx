import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState(10000);
  const [type, setType] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ location, maxPrice, type });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 flex flex-wrap gap-4">
      <div className="flex-1">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          placeholder="Enter location"
        />
      </div>

      <div className="flex-1">
        <label className="block text-gray-700">Max Price ($)</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
      </div>

      <div className="flex-1">
        <label className="block text-gray-700">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        >
          <option value="all">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="office">Office</option>
        </select>
      </div>

      <div className="flex items-end">
        <button
          type="submit"
          className="bg-[#FF5A3A] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default Filters;
