import React from 'react';

const CompanyArea = () => {
  return (
    <div className=" py-16">
      <div className="">
        {/* Section Title */}
        <div className="text-center text-white mb-12">
          <h2 className="text-5xl font-bold  text-[#FF5A3A]">Why Choose Easy Housing?</h2>
          <p className="text-lg text-white mt-4">
            10 years of experience in the real estate market, delivering exceptional services to our clients.
          </p>
        </div>

        {/* Company Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Area */}
          <div>
            <h3 className="text-3xl font-semibold text-[#FF5A3A] mb-6">What We Offer</h3>
            <p className="text-white mb-6">
              At Easy Housing, we take pride in delivering high-standard real estate solutions. Our team of professionals is committed to providing our clients with exceptional service, tailored to their individual needs. Whether you're buying, selling, or renting, we make the process seamless.
            </p>
            <p className="text-white mb-6">
              With a deep understanding of the real estate market in Bangladesh, we combine our expertise with innovative tools to deliver the best results. We provide personalized solutions and offer expert advice to make informed decisions.
            </p>
            
            {/* Highlighted Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <div className="bg-blue-500 text-white p-4 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Expert Advice</h4>
                  <p className="text-gray-500">Receive guidance from real estate experts with in-depth knowledge.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <div className="bg-green-500 text-white p-4 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Personalized Solutions</h4>
                  <p className="text-gray-500">Tailored property solutions to match your needs and budget.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image Area */}
          <div className="relative">
            <img
              src="https://i.ibb.co.com/YQ8hr5w/pexels-essow-k-251295-936722.jpg" // Replace with your company image
              alt="Company Area"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Decorative Element */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rounded-full opacity-20 transform translate-x-[-50%] translate-y-[-50%]"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompanyArea;
