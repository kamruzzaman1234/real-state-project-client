import React, { useState } from 'react';

const BlogPage = () => {
  // Blog data (replace with API calls in a real app)
  const blogs = [
    {
      title: "The Future of Real Estate",
      description: "Explore how technology is reshaping the real estate industry...",
      date: "October 20, 2024",
      author: "John Doe",
      image: "https://i.ibb.co.com/KX52L26/pexels-jakubzerdzicki-27453972.jpg",
      category: "Trends",
    },
    {
      title: "Tips for First-Time Homebuyers",
      description: "Everything you need to know before buying your first home...",
      date: "October 18, 2024",
      author: "Jane Smith",
      image: "https://i.ibb.co.com/h8QnfCm/pexels-jakubzerdzicki-17797763.jpg",
      category: "Buying",
    },
    // Add more blog posts as needed
  ];

  // Featured and Recent Blogs
  const featuredBlogs = blogs.slice(0, 2);
  const recentBlogs = blogs.slice(0, 4);

  // State for Categories
  const categories = ["Buying", "Selling", "Investment", "Trends"];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterBlogs = () => {
    if (selectedCategory === 'All') {
      return blogs;
    }
    return blogs.filter(blog => blog.category === selectedCategory);
  };

  return (
    <div className="mt-10 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Featured Posts Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredBlogs.map((blog, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <span className="text-sm text-gray-500">By {blog.author} on {blog.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg ${selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}>
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}>
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterBlogs().map((blog, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <span className="text-sm text-gray-500">By {blog.author} on {blog.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ul>
              {recentBlogs.map((blog, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
            Subscribe for Updates
          </button>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
