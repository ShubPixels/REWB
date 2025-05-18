import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import productsData from "./ProductData"; 
import { Link } from "react-router-dom";

// Import Product Images
import product1 from "../images/Group 9245.png";
import product2 from "../images/Group 9246.png";
import product3 from "../images/Group 9247.png";
import product4 from "../images/Group 9247.png";
import TabComponent from "../Components/TabComponent";
import DisplayComponent from "../Components/DisplayComponent";

const ProductPage = () => {
  const { productName } = useParams(); // Get product name from URL
  const formattedProductName = productName.replace(/-/g, " ");// Convert URL-friendly name back to normal
  const product = productsData[productName]; // Get product details from data file


  return (
    <div>
      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-black">{formattedProductName}</h1>
      <p className="mt-4 text-gray-700">
        This is the details page for {formattedProductName}. More information about this product will be displayed here.
      </p>
      </div>
      
      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12  flex flex-wrap lg:flex-nowrap gap-8">
        {/* Image Slider */}
        <div className="w-full lg:w-1/2">
          {/* <img src={product.image} className="w-full h-auto object-cover rounded-lg" /> */}
          <Swiper navigation={true} modules={[Navigation]} className="rounded-lg shadow-lg">
            {[product.image[0], product.image[1], product.image[2]].map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Product ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-gray-600 text-lg mb-4">
           {product.description}
          </p> */}
          {/* <p className="text-2xl font-semibold text-cyan-500 mb-6">$4,999</p> */}
          <DisplayComponent className="pb-4" name={product.name} tagline={product.tagline}/>
          <TabComponent description={product.description} specifications={product.specifications}/>
          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition">
              Get a Quote
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {/* <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Specifications</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <li><strong>Model:</strong> HP-500</li>
          <li><strong>Capacity:</strong> 500 Tons</li>
          <li><strong>Voltage:</strong> 220V / 380V</li>
          <li><strong>Material:</strong> Stainless Steel</li>
          <li><strong>Weight:</strong> 1200kg</li>
          <li><strong>Warranty:</strong> 2 Years</li>
        </ul>
      </section> */}

       {/* Section Header */}
     {/* Section Header */}
     <section className="bg-cyan-50 py-16 px-4 md:px-12">
      <div className="container mx-auto">
        {/* Section 1: More from the Category */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            More from the <span className="text-teal-500">Category</span>
          </h2>
          <a href="#" className="text-teal-500 font-semibold hover:underline">View all →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Cards */}
          {[
            "PET Bottle Baling Press",
            "Continuous Baler Machine",
            "Shredder Machine",
            "Jumbo Scrap Baling Press",
          ].map((title, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 transition hover:shadow-lg">
              <div className="h-40 bg-white flex justify-center items-center rounded-md">
                <img src={`/path/to/image-${index}.jpg`} alt={title} className="h-full object-contain" />
              </div>
              <h3 className="text-lg font-semibold mt-4">{title}</h3>
              <p className="text-sm text-gray-500">Text</p>
              <button className="mt-4 bg-teal-500 text-white py-2 w-full rounded-md flex items-center justify-center gap-2 transition hover:bg-teal-600">
                📖 Learn more
              </button>
            </div>
          ))}
        </div>

        {/* Section 2: Other Categories */}
        <div className="flex justify-between items-center mt-12 mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Other <span className="text-teal-500">Categories</span>
          </h2>
          <a href="#" className="text-teal-500 font-semibold hover:underline">View all →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category Cards */}
          {["Special Purpose Machines", "Industrial Machines"].map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 transition hover:shadow-lg">
              <div className="h-40 bg-gray-300 rounded-md">
                <img src={`/path/to/category-${index}.jpg`} alt={category} className="h-full w-full object-cover rounded-md" />
              </div>
              <h3 className="text-lg font-semibold mt-4">{category}</h3>
              <button className="mt-4 bg-teal-500 text-white py-2 w-full rounded-md flex items-center justify-center gap-2 transition hover:bg-teal-600">
                📖 Learn more
              </button>
            </div>
          ))}

          {/* Contact Us Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between transition hover:shadow-lg">
            <p className="text-lg font-bold">
              Got something in your <span className="text-teal-500">MIND</span>? <br />
              Let's work <span className="text-teal-600 font-bold">Together!!</span>
            </p>
            <button className="mt-6 bg-teal-500 text-white py-2 w-full rounded-md transition hover:bg-teal-600">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>



      
    </div>
  );
};

export default ProductPage;
