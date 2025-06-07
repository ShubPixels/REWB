// ProductPage.jsx

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "./ProductData";
import { categories } from "../Components/CategoryData";
import TabComponent from "../Components/TabComponent";
import DisplayComponent from "../Components/DisplayComponent";

const ProductPage = () => {
  const { productName } = useParams();

  // This hook scrolls the user to the top on navigation, which is good UX.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productName]);

  // Find the product based on the URL parameter.
  const product = productsData[productName];

  // --- FIX: Guard Clause ---
  // If the product doesn't exist for the given URL, render a "Not Found" component immediately
  // and stop any further code from executing. This prevents the crash.
  if (!product) {
    return (
      <div className="bg-white pt-28">
        <div className="container mx-auto p-6 pt-10 text-center">
          <h1 className="text-3xl font-bold">Product not found</h1>
          <p className="mt-2 text-gray-600">The product you are looking for does not exist.</p>
          <Link
            to="/"
            className="text-teal-500 hover:underline mt-4 inline-block"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    );
  }

  // --- All logic below this point will only run if the product was found ---

  const currentProductCategory = product.category;
  
  const relatedProducts = Object.keys(productsData)
    .filter(
      (key) =>
        productsData[key].category === currentProductCategory &&
        key !== productName
    )
    .map((key) => ({
      key,
      ...productsData[key],
    }))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const otherCategories = categories.filter(
    (cat) => cat.name !== currentProductCategory
  );

  return (
    <div className="bg-white pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* We can now safely access product properties */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {product.name}
        </h1>
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 h-80 md:h-[500px]">
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <DisplayComponent
              className="pb-4"
              name={product.name}
              tagline={product.tagline}
            />
            <TabComponent
              description={product.description}
              specifications={product.specifications}
            />
            <div className="flex gap-4 mt-6">
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition">
                Get a Quote
              </button>
              <button className="border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-cyan-50 py-16 px-4 md:px-12">
        <div className="container mx-auto">
          {/* Section 1: More from the Category */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              More from{" "}
              <span className="text-teal-500">{currentProductCategory}</span>
            </h2>
            <Link to="/products" className="text-teal-500 font-semibold hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.key}
                className="bg-white rounded-lg shadow-md p-4 transition hover:shadow-lg flex flex-col"
              >
                <img
                  src={relatedProduct.image[0]}
                  alt={relatedProduct.name}
                  className="h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
                <p className="text-sm text-gray-500 flex-grow">{relatedProduct.tagline}</p>
                <Link
                  to={`/product/${relatedProduct.key}`}
                  className="mt-4 bg-teal-500 text-white py-2 w-full rounded-md flex items-center justify-center gap-2 transition hover:bg-teal-600 text-center"
                >
                  📖 Learn more
                </Link>
              </div>
            ))}
          </div>

          {/* Section 2: Other Categories */}
          <div className="flex justify-between items-center mt-12 mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Other <span className="text-teal-500">Categories</span>
            </h2>
            <Link to="/products" className="text-teal-500 font-semibold hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md p-4 transition hover:shadow-lg flex flex-col"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold flex-grow">{category.name}</h3>
                <Link
                  to={`/category-page?category=${category.slug}`}
                  className="mt-4 bg-teal-500 text-white py-2 w-full rounded-md flex items-center justify-center gap-2 transition hover:bg-teal-600"
                >
                  📖 Learn more
                </Link>
              </div>
            ))}
            {/* Contact Us Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between transition hover:shadow-lg">
              <p className="text-lg font-bold">
                Got something in your <span className="text-teal-500">MIND</span>? <br />
                Let's work{" "}
                <span className="text-teal-600 font-bold">Together!!</span>
              </p>
              <Link
                to="/contact"
                className="mt-6 bg-teal-500 text-white py-2 w-full rounded-md transition hover:bg-teal-600 text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;