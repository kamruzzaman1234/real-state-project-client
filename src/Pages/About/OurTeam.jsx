import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    imgSrc: 'https://i.ibb.co.com/n6QnkWg/Ellipse-82.png', // Replace with actual team member image URL
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    name: 'Jane Smith',
    position: 'Chief Operating Officer',
    imgSrc: 'https://i.ibb.co.com/d5hFTKg/Ellipse-81-3.png', // Replace with actual team member image URL
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    name: 'Michael Lee',
    position: 'Head of Marketing',
    imgSrc: 'https://i.ibb.co.com/P41CtSc/Ellipse-81-1.png', // Replace with actual team member image URL
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    name: 'Sarah Kim',
    position: 'Lead Developer',
    imgSrc: 'https://i.ibb.co.com/J7v4nVQ/IMG-20240321-125615-removebg-preview.png', // Replace with actual team member image URL
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
];

const OurTeam = () => {
  return (
    <div className=" py-16">
      <div className="">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">Meet Our Team</h2>
          <p className="text-lg text-white mt-4">The professionals behind our success</p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              {/* Team Member Image */}
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              {/* Team Member Name */}
              <h3 className="text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
              {/* Team Member Position */}
              <p className="text-gray-500 text-center mb-6">{member.position}</p>
              {/* Social Icons */}
              <div className="flex justify-center space-x-6">
                <a href={member.social.twitter} target="_blank" rel="noreferrer">
                  <svg className="w-6 h-6 text-blue-400 hover:text-blue-600 transition-colors duration-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.99 9.99 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.867 9.867 0 01-3.127 1.196 4.918 4.918 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.914 4.914 0 001.523 6.573A4.902 4.902 0 01.96 9.57v.063a4.92 4.92 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.925 4.925 0 004.604 3.417 9.87 9.87 0 01-6.102 2.105c-.397 0-.79-.023-1.175-.068a13.96 13.96 0 007.557 2.212c9.053 0 14.001-7.496 14.001-13.986 0-.213-.005-.426-.014-.637A9.936 9.936 0 0024 4.557z" />
                  </svg>
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                  <svg className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors duration-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.79 0 0 .785 0 1.75v20.495C0 23.215.79 24 1.77 24h20.46c.98 0 1.77-.785 1.77-1.755V1.75C24 .785 23.21 0 22.23 0zm-13.08 20.444H5.542V9.073h3.608v11.37zM7.345 7.694c-1.148 0-2.078-.932-2.078-2.078 0-1.148.93-2.078 2.078-2.078s2.078.93 2.078 2.078c0 1.147-.93 2.078-2.078 2.078zm14.65 12.75h-3.606v-5.663c0-1.349-.027-3.084-1.877-3.084-1.878 0-2.166 1.466-2.166 2.978v5.769H9.739V9.073h3.463v1.553h.048c.482-.914 1.663-1.877 3.424-1.877 3.659 0 4.334 2.41 4.334 5.54v6.155z" />
                  </svg>
                </a>
                <a href={member.social.facebook} target="_blank" rel="noreferrer">
                  <svg className="w-6 h-6 text-blue-700 hover:text-blue-900 transition-colors duration-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.595 0 0 .587 0 1.31v21.38C0 23.413.595 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.92c-1.504 0-1.796.715-1.796 1.764v2.312h3.59l-.467 3.622h-3.123V24h6.12c.73 0 1.325-.587 1.325-1.31V1.31C24 .587 23.405 0 22.675 0z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
