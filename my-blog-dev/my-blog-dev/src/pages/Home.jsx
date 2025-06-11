import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { posts } from "../data/posts";
import Navbar from '../components/Navbar';

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const categories = ['all', ...new Set(posts.map(post => post.category))];
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Periksa local storage untuk preferensi tema saat pertama kali dimuat
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    } else if (storedTheme === 'light') {
      setDarkMode(false);
    } else {
      // Jika tidak ada preferensi, periksa preferensi sistem
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Perbarui atribut HTML dan local storage ketika darkMode berubah
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredPost = posts.filter(post => {
    const matchTitle = post.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || post.category === category;
    return matchTitle && matchCategory;
  });

  const handleCategory = (e) => setCategory(e.target.value);
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors duration-300">OLAHRAGA COMBAT SPORT TERKINI</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg transition-colors duration-300">
              OLAHRAGA COMBAT SPORT
            </p>
          </header>

          <section className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <input
              type="search"
              id="search"
              aria-label="Cari film berdasarkan judul"
              placeholder="Cari barita olahraga..."
              value={search}
              onChange={handleChange}
              className={`w-full max-w-md px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 transition ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
            />

            <select
              id="category"
              value={category}
              onChange={handleCategory}
              aria-label="Filter berdasarkan kategori"
              className={`w-full max-w-xs px-5 py-3 border border-gray-300 rounded-xl shadow-sm cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-400 transition ${darkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat === "all" ? "Semua Kategori" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPost.length > 0 ? (
              filteredPost.map(post => <Card key={post.id} post={post} darkMode={darkMode} />)
            ) : (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-400 text-xl transition-colors duration-300">yang anda cari tidak ditemukan.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
