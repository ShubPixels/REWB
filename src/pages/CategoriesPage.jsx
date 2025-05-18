import React, { useState } from 'react';
import wastemanageimg from "../images/bluemach.png";
import industrialimg from "../images/Cold Shearing Machine.jpg";
import specialpurpimg from "../images/Pipe Sizing and Guaging Machine.jpg";
import productsData from './ProductData';
import manufacimagequ from "../images/Illustration.png";
import { Link } from "react-router-dom";


const ProductsPage = () => {
  // State to track which category is active
  const [activeCategory, setActiveCategory] = useState(0); // Default to first category
  // State to track animation
  const [animating, setAnimating] = useState(false);

  // Product categories data
  const categories = [
    { id: 0, name: 'Waste Management', image: wastemanageimg , count: 11 ,
      products: [
        "triple-action-scrap-baling-press",
        "double-action-scrap-baling-press",
        "pet-bottle-baling-press",
        "continuous-paper-baler-machine",
        "continuous-baler-machine",
        "continuous-scrapper-machine",
        "shredder-machine",
        "jumbo-scrap-baling-press",
        "car-baler-machine",
        "bid-breaking-machine",
        "scrap-shearing-machine-(kechi)"
      ]
    },
    { id: 1, name: 'Industrial Machines', image: industrialimg , count: 5 ,
      products: [
        "ring-rolling-machine",
        "cold-shearing-machine",
        "heavy-duty-lathe-machine",
        "number-punching-machine",
        "sheet-slitting-machine"
      ]
    },
    { id: 2, name: 'Special Purpose Machines', image: specialpurpimg , count: 6 ,
      products: [
        "di-pipe-breaking-machine",
        "pipe-hydrotest-machine",
        "big-pipe-gauging-and-sizing-machine",
        "hydraulic-press-(customized)",
        "sheet-plate-bending-machine",
        "manual-paper-baling-machine"
      ]
    },
    { id: 3, name: 'Manufacturing Services', image: specialpurpimg , count: 0 }
  ];

  // Sample category descriptions
  const categoryDescriptions = [
    "Client needed a high-capacity pipe bending machine for oil & energy infrastructure projects across Denmark. Established in 1991, we have engineered over 600 unique machines, ranging from compact equipment to large-scale industrial machinery. With a client base that includes top MNCs and government entities worldwide, we prioritize quality, simplicity, and durability in all our products.",
    "Our industrial machines combine durability with cutting-edge technology, designed for continuous operation in demanding environments. Each machine is built to withstand industrial rigors while maintaining precision performance.",
    "Our special purpose machines are custom-engineered solutions designed to address unique manufacturing challenges. These specialized machines help improve efficiency and solve production bottlenecks across various industries.",
    ""
  ];

  // Handle category change with animation
  const handleCategoryChange = (index) => {
    if (index === activeCategory) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(index);
      setAnimating(false);
    }, 300);
  };
  

  // Generate products based on the active category's count
  const generateProducts = (categoryId) => {
    // const count = categories[categoryId].count;
    return categories[categoryId].products.map((productKey, i) => ({
      id: i + 1,
      name: productsData[productKey].name, // Correctly accessing the name
      productImage: productsData[productKey].image[0]
      // productsData[tripleaction].name
      // Replace this with actual category images if needed
    }));
  };

  // Service features for Manufacturing Services category
  const serviceFeatures = [
    {
      icon: "📋",
      title: "Custom Manufacturing Excellence",
      description: "Specialized in producing machinery to client-provided designs, ensuring precision and adherence to specifications."
    },
    {
      icon: "🔄",
      title: "Collaborative Design Refinement",
      description: "Provide proactive input on design feasibility, material selection, and operational efficiency. Flexible approach to client-driven revisions while maintaining project timelines."
    },
    {
      icon: "📈",
      title: "Scalability for Diverse Industries",
      description: "Tailored solutions for construction, energy, and environmental technology sectors."
    },
    {
      icon: "🌐",
      title: "Global Delivery & Support",
      description: "Seamless logistics for international clients, ensuring compliance with regional standards. Example: EU-certified manufacturing for the Denmark project."
    },
    {
      icon: "🏭",
      title: "End-to-End Production Capabilities",
      description: "Full lifecycle support: Prototyping, testing, fabrication, assembly, and quality assurance. Equipped with advanced CNC machining, welding, and automation integration."
    }
  ];

  // Case study for Manufacturing Services
  const caseStudy = {
    title: "Denmark Project: A Case Study",
    challenge: "Client needed a high-capacity pipe bending machine for oil & energy infrastructure projects across Denmark.",
    solution: "Manufactured the machine per client's design, incorporating critical upgrades for durability and safety. Enabled oil operations in locations where bent pipes were essential.",
    outcome: "On-time delivery and seamless integration into client operations. Established a long-term partnership with continued collaboration."
  };

  return (
    <div className="bg-cyan-50 py-8">
      <div className="container mx-auto mt-32 px-4 bg-cyan-50">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Our <span className="text-emerald-500">Products</span>
        </h2>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                activeCategory === index 
                  ? 'border-3 border-emerald-500 shadow-lg' 
                  : 'border bg-white hover:border-emerald-300'
              }`}
              onClick={() => handleCategoryChange(index)}
            >
              <div className="aspect-square w-full bg-white flex shadow-lg items-center justify-center p-2">
                <div className="w-full h-32  flex items-center justify-center">
                    <img src= {category.image}/>
                </div>
              </div>
              <div className="p-2 bg-white">
                <h3 className="font-bold text-center text-sm md:text-base">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Content based on active category */}
        <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
          {activeCategory !== 3 ? (
            // Regular product category display (first 3 categories)
            <div>
              {/* Category Description */}
              <div className=" p-6 rounded-lg  mb-8 border shadow-lg bg-white border-gray-100">
                <p className="text-gray-600 text-[clamp(1rem,2vw,1.25rem)]">{categoryDescriptions[activeCategory]}</p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {generateProducts(activeCategory).map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 transform hover:scale-102 cursor-pointer"
                  >
                    <Link
                      key={product.id} 
                      to={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex flex-col items-center text-center text-gray-700 hover:text-teal-500 transition"
                    
                    >
                    <div className="p-4 flex flex-col h-full">
                      <div className="h-48  mb-4 flex items-center justify-center">
                       <img src= {product.productImage}/>
                      </div>
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{product.name}</h3>
                        <button className="text-emerald-500 text-sm hover:underline">More</button>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Manufacturing Services display (4th category)
            <div>
              {/* Vision Statement and Service Features in one card */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 mb-8 overflow-hidden">
                {/* Vision Statement */}
                <div className="p-6 text-center border-b border-gray-100">
                  <h3 className="text-2xl font-bold">
                    "<span className="text-emerald-500">Your Vision</span>, Our <span className="text-emerald-500">Expertise</span> – Built to <span className="text-emerald-500">Perfection</span>"
                  </h3>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceFeatures.map((feature, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 transform hover:scale-102 cursor-pointer"
                      >
                        <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                        <h4 className="font-bold mb-2 text-center">
                          {index % 2 === 0 ? (
                            feature.title
                          ) : (
                            <>
                              <span className="text-emerald-500 text-[clamp(1rem,2vw,1.25rem)]">{feature.title.split(' ').slice(0, -1).join(' ')} </span>
                              <span className="text-[clamp(1rem,2vw,1.25rem)]">{feature.title.split(' ').slice(-1)}</span>
                            </>
                          )}
                          </h4>
                        <ul className="text-gray-600 text-[clamp(1rem,2vw,1.25rem)]">
                          {feature.description.split('. ').map((point, i) => point && (
                            <li key={i} className="mb-1 flex items-start">
                              <span className="mr-2 text-emerald-500">•</span>
                              <span>{point}.</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study as separate card */}
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

              {/* Call to Action as separate card */}
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Bring Your Industrial <span className="text-emerald-500">Vision</span><br />
                    to Life – Let's Build the Future<br />
                    <span className="text-emerald-500">Together</span>
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Contact us today to discuss your custom machinery needs or request a quote!
                  </p>
                  
                  <button className="bg-emerald-500 text-white py-3 px-6 rounded-md font-medium hover:bg-emerald-600 transition-colors mb-8">
                    Get in touch →
                  </button>
                  
                  {/* Abstract 3D shapes image */}
                  <div className="mx-auto max-w-xs">
                    <div className="w-full h-32  rounded-md flex items-center justify-center">
                     <img src= {manufacimagequ}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;