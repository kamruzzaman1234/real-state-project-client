import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const PropartyCard = ({ proparty }) => {
  const { _id, image, name, price, location, bedrooms, bathrooms, square_ft } = proparty;
  

  // Function to handle the image click and cycle through the images
  

  return (
    <div className="proparty-card border p-4 shadow-md rounded-lg">
      <div className="proparty-image-container">
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-cover cursor-pointer"
        />
      </div>
      <div className="proparty-details mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-lg font-bold">$ {price}</p>
        <div className="flex space-x-4">
          <p>🛏️ {bedrooms} Beds</p>
          <p>🛁 {bathrooms} Baths</p>
         <div>
          
         </div>
         
        </div>
        <div className="flex justify-end">
            <Link to={`/bookingProperty/${_id}`} className="">
                <FaArrowAltCircleRight className="text-[22px]
                 font-bold text-[#FF5A3A]"></FaArrowAltCircleRight>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PropartyCard;
