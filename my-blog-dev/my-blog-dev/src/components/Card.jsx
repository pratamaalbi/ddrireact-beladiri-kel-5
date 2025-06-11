import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ post, darkMode }) => {
  return (
    <div className={`bg-white p-6 rounded-3x1 shadow-md ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''} transition-colors duration-300`}>
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h2 className="text-xl font-blod text gray-800 dark:text-gray-200 transition-colors duration-300">{post.title}</h2>
      <p className="text-sm text-gray-500 mb-2 dark:text-gray-400 transition-colors duration-300">{post.date}</p>
      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{post.excerpt}</p>
      <Link to={`/newsdetail/${post.id}`}>
        <p className="text-sm text-red-800 hover:underline dark:text-white-200 transition-colors duration-300">Read More</p>
      </Link>
    </div>
  );
};

export default Card;
