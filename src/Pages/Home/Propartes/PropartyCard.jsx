import { useState } from "react";

const PropartyCard = ({ proparty }) => {
  const { id, image, title, price, location, bed, bath, square_ft } = proparty;
  

  // Function to handle the image click and cycle through the images
  

  return (
    <div className="proparty-card border p-4 shadow-md rounded-lg">
      <div className="proparty-image-container">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover cursor-pointer"
        />
      </div>
      <div className="proparty-details mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-lg font-bold">{price}</p>
        <div className="flex space-x-4">
          <p>🛏️ {bed} Beds</p>
          <p>🛁 {bath} Baths</p>
          <p>📐 {square_ft} Sq Ft</p>
        </div>
      </div>
    </div>
  );
};

export default PropartyCard;
