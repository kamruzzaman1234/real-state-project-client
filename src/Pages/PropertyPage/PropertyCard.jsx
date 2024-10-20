import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Map from './Map';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";

const PropertyCard = ({ properties }) => {
  // Destructure all necessary properties from the 'properties' object
  const { _id,name, images = [], image, bedrooms, bathrooms, location, price, description, latitude = 0, longitude = 0 } = properties;
  
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => setIsFavorited(!isFavorited);

  // Responsive settings for the image carousel
  const responsive = {
    large: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    medium: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    small: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Image Carousel */}
      <Carousel responsive={responsive} showDots={true}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              src={image || {image}}
              alt={`Property Image ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          ))
        ) : (
          <img
            src={image}
            alt="Placeholder Image"
            className="w-full h-64 object-cover"
          />
        )}
      </Carousel>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{location}</p>
        <p className="text-[#FF5A3A] font-bold text-lg mb-4">${price}</p>
        <div className="flex space-x-4">
          <p>🛏️ {bedrooms} Beds</p>
          <p>🛁 {bathrooms} Baths</p>
          
         
        </div>
        <p className="text-gray-700">{description.slice(0, 100)}...</p>

        {/* Favorite Button */}
        {/* <Map latitude={latitude} longitude={longitude} propertyName={name} /> */}
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

export default PropertyCard;
