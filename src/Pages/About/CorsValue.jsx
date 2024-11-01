import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: 'Integrity & Trust',
      description: 'We operate with honesty and foster trust with our clients and partners.',
      imgSrc: 'https://i.ibb.co.com/jZDYt2G/integrity-icon-monochrome-simple-element-from-vector-40206629.jpg', // Replace with actual image URL
    },
    {
      title: 'Professionalism',
      description: 'Our team maintains the highest level of professionalism in every interaction.',
      imgSrc: 'https://i.ibb.co.com/M6fQ4r0/11126138.png', // Replace with actual image URL
    },
    {
      title: 'Customer Satisfaction',
      description: 'We prioritize our clients’ needs and ensure they are fully satisfied.',
      imgSrc: 'https://i.ibb.co.com/x69ycsn/6165577.png', // Replace with actual image URL
    },
    {
      title: 'Innovation',
      description: 'We bring new ideas to the real estate industry to create better experiences.',
      imgSrc: 'https://i.ibb.co.com/kK1zcwn/5063056.png', // Replace with actual image URL
    },
  ];

  return (
    <div className=" py-16">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#FF5A3A] tracking-wide">Our Core Values</h1>
          <p className="text-lg text-white mt-4 font-bold">
            The principles that guide our work and define who we are.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              {/* Image */}
              <img
                src={value.imgSrc}
                alt={value.title}
                className="w-20 h-20 mx-8 md:mx-12 lg:mx-auto mb-6 rounded-full shadow-lg"
              />
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {value.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
