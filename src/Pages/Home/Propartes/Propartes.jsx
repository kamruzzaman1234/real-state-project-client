import { useEffect, useState } from "react";
import PropartyCard from "./PropartyCard";

const Propartes = () => {
 
  const [propartyValue, setPropartyValue] = useState([]);
  const [visibleProparties, setVisibleProparties] = useState(6);

  
  useEffect(()=>{
   try {
     fetch("https://real-state-project-server-omega.vercel.app/proparties")
     .then(res=> res.json())
     .then(data=>{
       setPropartyValue(data)
     })
   } catch (error) {
    console.log(er)
   }
  },[])

  

  
  const loadMore = () => {
    setVisibleProparties((prevVisible) => prevVisible + 6);
  };

  return (
    <div className="my-20">
      <div className="text-center">
        <h4 className="text-[18px] text-[#FF5A3C] font-semibold">Our Properties</h4>
        <h2 className="text-[28px] text-black font-semibold">Our Featured Properties</h2>
      </div>
      
   
      <div className="grid grid-cols-1 mt-16 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {propartyValue.slice(0, visibleProparties).map((property) => (
          <PropartyCard key={property._id} property={property} />
        ))}
      </div>
      
      
      {visibleProparties < propartyValue.length && (
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
