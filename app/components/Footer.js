"use client";

// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="container mx-auto text-lg">
          <p>&copy; {new Date().getFullYear()} Fitness Tracker App</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  