import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { posts } from '../data/posts';

const NewsDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id); 

  const [theme, setTheme] = useState("Light");

  const themeHandle = () => {
    setTheme(prev => (prev === "Light" ? "Dark" : "Light"));
  };

  useEffect(() => {
    if (theme === "Dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  if (!post) return <div className="p-4 text-red-500">Post not found</div>;

  return (
    <div className="bg-white dark:bg-gray-800 w-full min-h-screen p-4 mx-auto">
      <button 
        onClick={themeHandle} 
        className="bg-gray-800 text-white dark:bg-white dark:text-gray-800 px-4 py-2 mb-4"
      >
        {theme}
      </button>

      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full object-cover h-64 mb-4" 
      />

      <h1 className="text-xl text-gray-800 dark:text-white font-bold mb-2">
        {post.title}
      </h1>
      <p className="text-md text-gray-800 dark:text-gray-400">
        {post.content}
      </p>
    </div>
  );
};

export default NewsDetail;
