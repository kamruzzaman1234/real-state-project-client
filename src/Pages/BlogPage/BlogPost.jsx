import React, { useState } from 'react';

const BlogPost = () => {
  const blogsPerPage = 6; // Number of blogs to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const blogs = [...]; // Your blogs array

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get current blogs
  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600">{blog.description}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">By {blog.author} on {blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {[...Array(totalPages).keys()].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700"
              } rounded`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;