// File: CategoriesPage.jsx

import React, { useState, useEffect, useRef } from 'react';
import wastemanageimg from "../images/bluemach.png";
import industrialimg from "../images/Cold Shearing Machine.jpg";
import specialpurpimg from "../images/Pipe Sizing and Guaging Machine.jpg";
import productsData from './ProductData';
import manufacimagequ from "../images/Illustration.png";
import { Link, useLocation } from "react-router-dom";

const ProductsPage = () => {
  const location = useLocation();
  const categoriesRef = useRef(null);

  // The categories array remains the same
  const categories = [
    { id: 0, name: 'Waste Management', image: wastemanageimg, count: 11,
      products: [
        "triple-action-scrap-baling-press", "double-action-scrap-baling-press", "pet-bottle-baling-press",
        "continuous-paper-baler-machine", "continuous-baler-machine", "continuous-scrapper-machine",
        "shredder-machine", "jumbo-scrap-baling-press", "car-baler-machine", "bid-breaking-machine",
        "scrap-shearing-machine-(kechi)"
      ]
    },
    { id: 1, name: 'Industrial Machines', image: industrialimg, count: 5,
      products: [
        "ring-rolling-machine", "cold-shearing-machine", "heavy-duty-lathe-machine",
        "number-punching-machine", "sheet-slitting-machine"
      ]
    },
    { id: 2, name: 'Special Purpose Machines', image: specialpurpimg, count: 6,
      products: [
        "di-pipe-breaking-machine", "pipe-hydrotest-machine", "big-pipe-gauging-and-sizing-machine",
        "hydraulic-press-(customized)", "sheet-plate-bending-machine", "manual-paper-baling-machine"
      ]
    },
    { id: 3, name: 'Manufacturing Services', image: specialpurpimg, count: 0 }
  ];

  // --- FIX: The missing categoryDescriptions array is re-added here ---
  const categoryDescriptions = [
    "Client needed a high-capacity pipe bending machine for oil & energy infrastructure projects across Denmark. Established in 1991, we have engineered over 600 unique machines, ranging from compact equipment to large-scale industrial machinery. With a client base that includes top MNCs and government entities worldwide, we prioritize quality, simplicity, and durability in all our products.",
    "Our industrial machines combine durability with cutting-edge technology, designed for continuous operation in demanding environments. Each machine is built to withstand industrial rigors while maintaining precision performance.",
    "Our special purpose machines are custom-engineered solutions designed to address unique manufacturing challenges. These specialized machines help improve efficiency and solve production bottlenecks across various industries.",
    ""
  ];

  const getInitialCategory = () => {
    const categoryName = location.state?.category;
    if (categoryName) {
      const index = categories.findIndex(cat => cat.name === categoryName);
      return index !== -1 ? index : null;
    }
    return null;
  };

  const [activeCategory, setActiveCategory] = useState(getInitialCategory);
  const [isContentVisible, setIsContentVisible] = useState(getInitialCategory() !== null);

  useEffect(() => {
    if (activeCategory !== null) {
      categoriesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      const timer = setTimeout(() => {
        setIsContentVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeCategory]);

  const handleCategoryChange = (index) => {
    if (index === activeCategory) return;
    if (isContentVisible) {
      setIsContentVisible(false);
      setTimeout(() => {
        setActiveCategory(index);
      }, 300);
    } else {
      setActiveCategory(index);
    }
  };

  const generateProducts = (categoryId) => {
    return categories[categoryId].products.map((productKey, i) => ({
      id: i + 1,
      name: productsData[productKey].name,
      productImage: productsData[productKey].image[0]
    }));
  };

  const serviceFeatures = [
    { icon: "📋", title: "Custom Manufacturing Excellence", description: "Specialized in producing machinery to client-provided designs, ensuring precision and adherence to specifications." },
    { icon: "🔄", title: "Collaborative Design Refinement", description: "Provide proactive input on design feasibility, material selection, and operational efficiency. Flexible approach to client-driven revisions while maintaining project timelines." },
    { icon: "📈", title: "Scalability for Diverse Industries", description: "Tailored solutions for construction, energy, and environmental technology sectors." },
    { icon: "🌐", title: "Global Delivery & Support", description: "Seamless logistics for international clients, ensuring compliance with regional standards. Example: EU-certified manufacturing for the Denmark project." },
    { icon: "🏭", title: "End-to-End Production Capabilities", description: "Full lifecycle support: Prototyping, testing, fabrication, assembly, and quality assurance. Equipped with advanced CNC machining, welding, and automation integration." }
  ];

  const caseStudy = {
    title: "Denmark Project: A Case Study",
    challenge: "Client needed a high-capacity pipe bending machine for oil & energy infrastructure projects across Denmark.",
    solution: "Manufactured the machine per client's design, incorporating critical upgrades for durability and safety. Enabled oil operations in locations where bent pipes were essential.",
    outcome: "On-time delivery and seamless integration into client operations. Established a long-term partnership with continued collaboration."
  };


  // The rest of the component's JSX remains the same
  return (
    <div className="bg-cyan-50 py-8">
      <div className="container mx-auto mt-32 px-4 bg-cyan-50">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our <span className="text-emerald-500">Products</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-lg">
            Rangani Engineering Pvt Ltd designs and builds four complementary lines to keep factories productive and sustainable: waste-management equipment that cuts disposal costs, 
            industrial presses and handling systems for daily production, tailor-made special-purpose machines for unique processes, and end-to-end manufacturing services. 
            Explore each category to see how our practical solutions can fit your operation.
        </p>

        <div ref={categoriesRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryChange(index)}
              className={`
                group cursor-pointer rounded-lg overflow-hidden
                transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                ${
                  activeCategory === index
                    ? 'border-2 border-emerald-500 shadow-lg'
                    : 'border border-gray-200 hover:border-emerald-300'
                }
              `}
            >
              <div className="relative w-full aspect-square bg-white">
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-auto whitespace-nowrap">
                  <div
                    className={`
                      px-4 py-2 rounded-full shadow-md
                      transition-all duration-300 ease-in-out
                      ${
                        activeCategory === index
                          ? 'bg-emerald-900 border-emerald-1000'
                          : `bg-white/20 backdrop-blur-sm border-white/30
                            group-hover:bg-white/60 group-hover:border-blue-400/70 group-hover:shadow-lg`
                      }
                    `}
                  >
                    <h3
                      className={`
                        font-bold text-center text-sm md:text-base
                        transition-colors duration-300
                        ${
                          activeCategory === index
                            ? 'text-white'
                            : 'text-black'
                        }
                      `}
                    >
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`transition-opacity duration-300 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          {activeCategory !== null && (
            <>
              {activeCategory !== 3 ? (
                <div>
                  <div className="p-6 rounded-lg mb-8 border shadow-lg bg-white border-gray-100">
                    <p className="text-gray-600 text-[clamp(1rem,2vw,1.25rem)]">{categoryDescriptions[activeCategory]}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {generateProducts(activeCategory).map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 transform hover:scale-105"
                      >
                        <Link
                          to={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block group"
                        >
                          <div className="relative">
                            <div className="h-48 flex items-center justify-center p-4">
                              <img src={product.productImage} alt={product.name} className="max-h-full max-w-full object-contain" />
                            </div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-auto whitespace-nowrap">
                              <div
                                className="
                                  px-4 py-2 rounded-full shadow-md
                                  bg-white/20 backdrop-blur-sm border border-white/30
                                  transition-all duration-300 ease-in-out
                                  group-hover:bg-white/60
                                  group-hover:border-blue-400/70
                                  group-hover:shadow-lg
                                "
                              >
                                <h3 className="font-semibold text-black text-sm">
                                  {product.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 mb-8 overflow-hidden">
                    <div className="p-6 text-center border-b border-gray-100">
                      <h3 className="text-2xl font-bold">
                        "<span className="text-emerald-500">Your Vision</span>, Our <span className="text-emerald-500">Expertise</span> – Built to <span className="text-emerald-500">Perfection</span>"
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceFeatures.map((feature, index) => (
                          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 transform hover:scale-102 cursor-pointer">
                            <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                            <h4 className="font-bold mb-2 text-center text-[clamp(1rem,2vw,1.25rem)]">{feature.title}</h4>
                            <ul className="text-gray-600 text-sm list-disc list-inside">
                                {feature.description.split('. ').map((point, i) => point && <li key={i}>{point}</li>)}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      <span>{caseStudy.title.split(':')[0]}</span>
                      <span className="text-emerald-500">: {caseStudy.title.split(':')[1]}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="text-3xl text-red-500 mb-3">🎯</div>
                        <h4 className="font-bold mb-2">Challenge:</h4>
                        <p className="text-sm text-gray-700">{caseStudy.challenge}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl text-blue-500 mb-3">🔧</div>
                        <h4 className="font-bold mb-2">Solution:</h4>
                        <p className="text-sm text-gray-700">{caseStudy.solution}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl text-yellow-500 mb-3">🏆</div>
                        <h4 className="font-bold mb-2">Outcome:</h4>
                        <p className="text-sm text-gray-700">{caseStudy.outcome}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-100">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4">Bring Your Industrial <span className="text-emerald-500">Vision</span> to Life</h3>
                      <p className="text-gray-700 mb-6">Contact us today to discuss your custom machinery needs or request a quote!</p>
                      <button className="bg-emerald-500 text-white py-3 px-6 rounded-md font-medium hover:bg-emerald-600 transition-colors mb-8">
                        <Link to="/contact" className="hover:text-white hover:underline">Get in touch →</Link>
                      </button>
                      <div className="mx-auto max-w-xs">
                        <div className="w-full h-32 rounded-md flex items-center justify-center">
                          <img src={manufacimagequ} alt="Manufacturing Services Illustration"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;