import React from "react";
import rewblogo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img src={rewblogo} alt="Logo" className="w-10 h-10 md:w-14 md:h-14" />
              <h1 className="text-lg md:text-2xl font-bold text-white">
                RANGANI
                <span className="text-cyan-500">  ENGINEERING</span>
              </h1>
          <p className="text-gray-400">
            Rangani Engineering PVT. LTD, the emerging manufacturing and trading firm.
          </p>
        </div>
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h4 className="text-xl font-bold mb-4">Company</h4>
          <ul className="text-gray-400">
            <li>
              <a href="#home" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#products" className="hover:underline">Products</a>
            </li>
            <li>
              <a href="#about-us" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <ul className="text-gray-400">
            <li>Email: vatanrangani4620@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-6">
        <p>&copy; 2024, Rangani Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
