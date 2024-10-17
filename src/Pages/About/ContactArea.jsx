import React from 'react';

const ContactArea = () => {
  return (
    <div className=" py-16">
      <div className="">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#Ff5A3A]">Get in Touch</h2>
          <p className="text-white mt-2">We’re here to answer any questions you have. Feel free to reach out to us anytime.</p>
        </div>

        {/* Contact Information & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a6.5 6.5 0 00-6.5 6.5c0 5.25 6.5 12.75 6.5 12.75S18.5 13.75 18.5 8.5A6.5 6.5 0 0012 2zm0 8.75A2.25 2.25 0 119.75 8.5 2.25 2.25 0 0112 10.75z" />
                </svg>
              </div>
              <div className="ml-4 text-white">
                <h4 className="text-lg font-semibold">Our Location</h4>
                <p className="">Dhaka, Uttara</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-600 text-white p-3 rounded-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713L1.645 6.187c-.236-.142-.645-.071-.645.3V17.5A2.5 2.5 0 003.5 20h17a2.5 2.5 0 002.5-2.5V6.487c0-.371-.41-.441-.645-.3L12 12.713z" />
                  <path d="M12 11.287L22.354 4.76A2.5 2.5 0 0019.5 4h-15a2.5 2.5 0 00-2.854.76L12 11.287z" />
                </svg>
              </div>
              <div className="ml-4 text-white">
                <h4 className="text-lg font-semibold">Email Us</h4>
                <p className="">easyhouse@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-purple-600 text-white p-3 rounded-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.707 13.293l-2-2a1 1 0 00-1.414 1.414l1.293 1.293a8.014 8.014 0 01-6.364 6.364l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2.414-2.414a10.014 10.014 0 007.071-7.071l2.414-2.414a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 0z" />
                </svg>
              </div>
              <div className="ml-4 text-white">
                <h4 className="text-lg font-semibold">Call Us</h4>
                <p className="">+880 1234 567 890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="w-full bg-[#FF5A3A] text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
