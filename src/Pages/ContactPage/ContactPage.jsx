import React from 'react';

const ContactPage = () => {
  return (
    <div className="mt-10 py-20 bg-slate-200">
      <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto">
        
        {/* Page Title */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#FF5A3A]">Contact Us</h1>
          <p className="text-gray-600 mt-4">We’d love to hear from you! Please fill out the form below or contact us through the following ways.</p>
        </section>

        {/* Main Contact Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Contact Form */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#FF5A3A] mb-6">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-600">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block mb-2 text-gray-600">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button className="w-full bg-[#FF5A3A] text-white px-4 py-2
               rounded-md hover:bg-[#FF5A3A] transition">Send Message</button>
            </form>
          </div>
          
          {/* Contact Details & Map */}
          <div className="space-y-8">
            {/* Office Location */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#FF5A3A]">Our Office</h2>
              <p className="text-gray-600 mb-4">123 Real Estate Street, Suite 500<br/>City, Country 12345</p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090214!2d144.95373631544695!3d-37.81720984202186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771e7b4508e8c9!2s123%20Real%20Estate%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1633735652856!5m2!1sen!2sus" 
                className="w-full h-56 rounded-lg" 
                allowFullScreen="" 
                loading="lazy" 
                title="Office Location"></iframe>
            </div>

            {/* Contact Info */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
              <ul className="text-gray-600 space-y-4">
                <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                <li><strong>Email:</strong> contact@realestate.com</li>
                <li><strong>Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white shadow-lg p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">What is the process of buying a home?</h3>
              <p className="text-gray-600">The home-buying process typically involves searching for a property, getting financing, making an offer, and closing the sale. We guide you through every step.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Do I need a real estate agent?</h3>
              <p className="text-gray-600">Yes, having a real estate agent helps ensure that you get the best deal possible and navigate the complexities of real estate transactions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How do I get a mortgage?</h3>
              <p className="text-gray-600">We work with reputable lenders to help you secure financing. Contact us to learn more about mortgage options.</p>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="text-pink-600 hover:text-pink-800"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" className="text-blue-700 hover:text-blue-900"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
