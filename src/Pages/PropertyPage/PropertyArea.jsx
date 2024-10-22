import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Filters from "./Filters";

const PropertyArea = () => {
  const [proparties, setProparties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(8);

  useEffect(() => {
    fetch('https://real-state-project-server-j1ykdx38a-kmruzzamans-projects.vercel.app/proparties')
      .then(res => res.json())
      .then(data => {
        setProparties(data);
        setFilteredProperties(data); // Initially show all properties
      });
  }, []);

  const applyFilters = (filters) => {
    const filtered = proparties.filter(prop => {
      const matchesPrice = prop.price <= filters.maxPrice;
      const matchesLocation = prop.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesType = prop.type === filters.type || filters.type === 'all';
      return matchesPrice && matchesLocation && matchesType;
    });
    setFilteredProperties(filtered); // Update the filtered properties
  };

  const loadMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + 6);
  };

  return (
    <div className="mt-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#FF5A3A]">Choose Your Property</h1>
          <p className="text-lg text-black font-semibold mt-2">
            It's Property is very Unique and Modern. All property is very Demand full
          </p>
        </div>
        <div>
          <Filters onFilterChange={applyFilters} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {
              filteredProperties.slice(0, visibleProperties).map(properties => (
                <PropertyCard
                  key={properties._id}
                  properties={properties}   
                />
              ))
            }
          </div>
          {visibleProperties < filteredProperties.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-[#FF5A3C] text-white rounded-md hover:bg-[#FF7849] transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyArea;
