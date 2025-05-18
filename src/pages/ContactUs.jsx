import React from "react";
import FadeInSection from "./Fadeinsection";

const ContactUs = () => {
  return (
    <FadeInSection>
        <section className="bg-cyan-50 py-16 px-4 mt-20 md:px-12"> 
            <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row gap-8">
                
                {/* Contact Form */}
                <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Connect <span className="text-teal-500">With Us</span></h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name*" className="input-style" />
                    <input type="email" placeholder="Email*" className="input-style" />
                    <input type="text" placeholder="Phone" className="input-style" />
                    <input type="text" placeholder="Company Name*" className="input-style" />
                    <input type="text" placeholder="Country*" className="input-style" />
                    <input type="text" placeholder="State*" className="input-style" />
                    <input type="text" placeholder="City*" className="input-style" />
                    
                    <select className="input-style">
                    <option>Select Category</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                    </select>

                    <textarea placeholder="Your Message" className="input-style md:col-span-2 h-24" />
                    
                    {/* Terms and Conditions */}
                    <div className="flex items-center md:col-span-2">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm text-gray-600">Agree to our terms and conditions</label>
                    </div>
                    
                    {/* Submit Button */}
                    <button type="submit" className="bg-teal-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-teal-600 transition md:col-span-2">
                    Submit Now →
                    </button>
                </form>
                </div>

                {/* Contact Information */}
                <div className="w-full lg:w-5/12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Happy to Help</h3>
                <p className="text-gray-600 mb-6">
                    24/7 service support and technical assistance. Visit our office for more insights.
                </p>
                
                {/* Email Box */}
                <div className="flex items-center bg-teal-500 text-white p-4 rounded-lg shadow-md mb-4">
                    <span className="material-icons mr-4">email</span>
                    <div>
                    <p className="text-sm">EMAIL US</p>
                    <p className="text-lg font-bold">vatanrangani4620@gmail.com</p>
                    </div>
                </div>

                {/* Phone Box */}
                <div className="flex items-center bg-teal-500 text-white p-4 rounded-lg shadow-md mb-4">
                    <span className="material-icons mr-4">phone</span>
                    <div>
                    <p className="text-sm">TALK TO US</p>
                    <p className="text-lg font-bold">+91-9925036495</p>
                    </div>
                </div>

                {/* Address */}
                <div className="text-gray-700">
                    <h4 className="font-bold mb-2">Address:</h4>
                    <p>E-30, Electronic Estate, G. I. D. C., Sector - 26, Gandhinagar - 382 028, Gujarat, India.</p>
                    <a href="#" className="text-teal-500 font-semibold mt-2 inline-block hover:underline">Get Directions →</a>
                </div>
                </div>
            </div>
        </section>
        </FadeInSection>
  );
};

export default ContactUs;
