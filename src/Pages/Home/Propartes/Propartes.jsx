import { useEffect, useState } from "react";
import PropartyCard from "./PropartyCard";

const Propartes = () => {
  const [proparty, setProparty] = useState([]);
  const [visibleProparties, setVisibleProparties] = useState(6); // Initial number of properties to display

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProparty(data);
        console.log("Proparties Data is", data);
      });
  }, []);

  // Function to load more properties
  const loadMore = () => {
    setVisibleProparties((prevVisible) => prevVisible + 6); // Show 6 more properties on each click
  };

  return (
    <div className="my-20">
      <div className="text-center">
        <h4 className="text-[18px] text-[#FF5A3C] font-semibold">Our Properties</h4>
        <h2 className="text-[28px] text-black font-semibold">Our Featured Properties</h2>
      </div>
      <div className="grid grid-cols-1 mt-16 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {proparty.slice(0, visibleProparties).map((proparty) => (
          <PropartyCard key={proparty.id} proparty={proparty} />
        ))}
      </div>
      {visibleProparties < proparty.length && (
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
  );
};

export default Propartes;
