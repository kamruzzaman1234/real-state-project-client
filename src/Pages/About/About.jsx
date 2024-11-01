import React from 'react';
import { Link } from 'react-router-dom';
import CoreValues from './CorsValue';
import OurTeam from './OurTeam';
import CompanyArea from './CompanyArea';
import ContactArea from './ContactArea';

const About = () => {
  return (
    <div className="mt-10 py-20">
      {/* Heading */}
     <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto">
     <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#FF5A3A]">About Us</h1>
        <p className="text-lg text-black font-semibold mt-2">
          Experienced and Trusted Real Estate Company
        </p>
      </section>

      {/* Company Overview */}
      <section className="p-8 rounded-lg my-10 shadow-lg  bg-slate-700 ">
        <CompanyArea></CompanyArea>
      </section>

      {/* Mission and Vision */}
      <section className=" p-8 rounded-lg bg-[#FF5A3A] shadow-lg my-10">
      <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white tracking-wide">Our Mission & Vision</h1>
          <p className="text-white text-lg mt-4">We strive to lead the real estate industry in Bangladesh</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide the highest standard of property and ensure customer satisfaction. We prioritize customer needs and aim to deliver top-quality services that meet their expectations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to be the leading real estate company in Bangladesh, setting an example of excellence in quality, professionalism, and customer service. We aspire to be a name synonymous with trust and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className=" bg-slate-700 p-8 rounded-lg shadow-lg my-10">
            <CoreValues></CoreValues>
      </section>

      {/* Team Members */}
      <section className=" bg-[#FF5A3A] p-8 rounded-lg shadow-lg my-10">
            <OurTeam></OurTeam>
      </section>

      {/* Contact Information */}
      <section className="bg-slate-700 p-8 rounded-lg shadow-lg my-6">
            <ContactArea></ContactArea>
      </section>
     </div>
    </div>
  );
};

export default About;
