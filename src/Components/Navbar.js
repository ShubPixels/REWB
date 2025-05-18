import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import rewblogo from "../images/logo.png";
import call from "../images/Vector.png";
import email from "../images/Vector 2.png";
import face from "../images/face.png";
import ins from "../images/insta.png";
import twi from "../images/twi.png";
import lindk from "../images/in.png";
import YT from "../images/youtube.png";
import threeAscarpbaling from "../images/3 Action Scrap Baling Press.png";
import twoAscrapbaling from "../images/2 action.png";
import petbottlingpress from "../images/PHOTO EDIT 22.png";
import Contpaperbaler from "../images/Manual Paper Baler Machine.jpg";
import Contbaler from "../images/Automatic  Continuous Baling Machine.jpg";
import Conscraper from "../images/Continuous Scrapping  automatic Scrapper Machine.jpg";
import shredder from "../images/Shredder Machine.jpg";
import jumboscrapbaling from "../images/Jumbo Scrap Baling Machine.jpg";
import bidbreaking from "../images/Bid Breaking Machine.jpg";
import carbalingmachine from "../images/Car Baling Machine.jpg";
import scrapshreaing from "../images/Scrap Shearing Machine (kechi).jpg";
import ringrolling from "../images/Ring Rolling Machine.jpg";
import coldshearing from "../images/Cold Shearing Machine.jpg";
import heavylathe from "../images/Heavy Duty Lathe Machine.jpg";
import numberpunch from "../images/Number Punching Machine.jpg";
import sheetslit from "../images/Sheet Slitting Machine.jpg";
import dipipe from "../images/DI - Pipe Breaking Machine.jpg";
import pipehydro from "../images/Pipe Hydrotest Machine.jpg";
import gauginsizing from "../images/Pipe Sizing and Guaging Machine.jpg";
import hydraulic_cus from "../images/Hydraulic Press (customized).jpg";
import sheetbending from "../images/Sheet Bending Machine.jpg";
import manualpaperbaler from "../images/Manual Paper Baler Machine.jpg";

const NAVBAR = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY <= lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      title: "Waste Management",
      image: [threeAscarpbaling, twoAscrapbaling, petbottlingpress, Contpaperbaler, Contbaler, Conscraper, shredder, jumboscrapbaling, bidbreaking, carbalingmachine, scrapshreaing],
      products: [
        "Triple Action Scrap Baling Press",
        "Double Action Scrap Baling Press",
        "PET Bottle Baling Press",
        "Continuous Paper Baler Machine",
        "Continuous Baler Machine",
        "Continuous Scrapper Machine",
        "Shredder Machine",
        "Jumbo Scrap Baling Press",
        "Car Baler Machine",
        "Bid Breaking Machine",
        "Scrap Shearing Machine (Kechi)"
      ]
    },
    {
      title: "Industrial Machines",
      image: [ringrolling, coldshearing, heavylathe, numberpunch, sheetslit],
      products: [
        "Ring Rolling Machine",
        "Cold Shearing Machine",
        "Heavy Duty Lathe Machine",
        "Number Punching Machine",
        "Sheet Slitting Machine"
      ]
    },
    {
      title: "Special Purpose Machines",
      image: [dipipe, pipehydro, gauginsizing, hydraulic_cus, sheetbending, manualpaperbaler],
      products: [
        "DI Pipe Breaking Machine",
        "Pipe Hydrotest Machine",
        "Big Pipe Gauging and Sizing Machine",
        "Hydraulic Press (Customized)",
        "Sheet  Plate Bending Machine",
        "Manual Paper Baling Machine"
      ]
    }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isNavVisible ? "translate-y-0" : "-translate-y-full"} bg-white shadow-md`}>
        <div className="bg-white py-2">
          <div className="container mx-auto flex flex-wrap justify-between text-sm px-4 md:px-8 text-gray-700">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <img src={call} alt="call" className="w-4 h-4" /> +12 345 6789 0
              </span>
              <span className="flex items-center gap-2">
                <img src={email} alt="email" className="w-4 h-4" /> example@email.com
              </span>
            </div>
            <div className="flex gap-4 items-center">
              {[YT, ins, face, lindk, twi].map((icon, idx) => (
                <a href="#" key={idx} className="hover:text-teal-500">
                  <img src={icon} alt={`Social ${idx}`} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={rewblogo} alt="Logo" className="w-10 h-10 md:w-14 md:h-14" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                RANGANI <br />
                <span className="text-teal-500">ENGINEERING</span>
              </h1>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
              <li><Link to="/" className="hover:text-teal-500">Home</Link></li>
              <li
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link to="/category-page" className="hover:text-teal-500 flex items-center cursor-pointer">Our Products ▾</Link>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-lg w-[700px] flex z-50">
                    <div className="w-1/3 bg-gray-100 p-4 rounded-l-lg">
                      <ul>
                        {categories.map((category, index) => (
                          <li
                            key={index}
                            onMouseEnter={() => setSelectedCategory(category)}
                            className={`p-3 cursor-pointer rounded-md transition ${selectedCategory?.title === category.title ? "bg-teal-500 text-white" : "hover:bg-orange-100"}`}
                          >
                            {category.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-2/3 bg-white p-4 rounded-r-lg">
                      <h3 className="text-teal-500 font-semibold mb-3">{selectedCategory?.title || categories[0]?.title}</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {selectedCategory?.products.map((product, idx) => (
                          <Link
                            key={idx}
                            to={`/products/${product.toLowerCase().replace(/\s+/g, "-")}`}
                            className="flex flex-col items-center text-center text-gray-700 hover:text-teal-500 transition"
                          >
                            <img src={selectedCategory.image[idx]} alt={product} className="w-16 h-16 object-contain" />
                            <span className="text-sm">{product}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li><Link to="/about" className="hover:text-teal-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-teal-500">Contact</Link></li>
            </ul>

            {/* Search Box */}
            <div className={`transition-all duration-300 border-2 border-teal-500 rounded-full flex items-center overflow-hidden ${isHovered ? "w-64" : "w-12 h-10"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {isHovered ? (
                <input type="text" placeholder="Search..." className="w-full px-4 py-2 outline-none text-gray-800" />
              ) : (
                <button className="flex items-center justify-center w-12 h-full bg-teal-500 text-white text-sm">🔍</button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden w-full bg-white shadow-lg rounded-lg px-4 pb-4 space-y-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-800 hover:text-teal-500">Home</Link>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full text-left text-gray-800 hover:text-teal-500">
                Our Products ▾
              </button>
              {isDropdownOpen && (
                <div className="pl-2 space-y-2">
                  {categories.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-teal-600 font-semibold">{category.title}</h4>
                      <ul className="pl-2">
                        {category.products.map((product, idx) => (
                          <li key={idx}>
                            <Link to={`/products/${product.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-teal-500">
                              {product}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-800 hover:text-teal-500">About Us</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-800 hover:text-teal-500">Contact</Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default NAVBAR;
