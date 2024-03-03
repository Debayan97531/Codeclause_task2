// components/Header.js
"use client";
// components/Header.js

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-3xl font-bold">Fitness Tracker</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-blue-800 text-xl pr-4">Home</a></li>
          <li><a href="/about" className="text-white hover:text-blue-800 text-xl pr-4">About</a></li>
          <li><a href="/terms" className="text-white hover:text-blue-800 text-xl">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

