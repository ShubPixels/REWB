import React, { useState } from 'react';
import heroabout from "../images/hero_about.png";
import ourstoryimg from "../images/our_story.png";
import whatwedo1 from "../images/What_WE_1.png";
import whatwedo2 from "../images/What_WE_2.png";
import whatwedo3 from "../images/Custom-Built Solutions.png";
import whatwedo4 from "../images/manufacturing services.png";
import starperformer from "../images/Awards.jpg";
import rattanaward from "../images/DSC_0023.JPG";
import prideofIND from "../images/DSC_0022.JPG";
import IOBRD from "../images/DSC_0020.JPG";
import ctaaboutus from "../images/cta_about.png";

const AboutUs = () => {
  const services = [
    {
      id: 1,
      image: whatwedo1 , // Replace with actual image path
      title: {
        highlight1: "Waste",
        normal: "Management &",
        highlight2: "Scrap",
        ending: "Processing Machinery"
      },
      description: "We build the muscle behind recycling industries. Our hydraulic baling presses compact scrap metal into dense, transport-ready blocks. Shredders tear through tires, e-waste, and industrial byproducts. Hydraulic breaking machines dismantle outdated component and infrastructural wastes, while scrap cutting systems slice through thick steel like butter."
    },
    {
      id: 2,
      image: whatwedo2 , // Replace with actual image path
      title: {
        highlight1: "Industrial",
        normal: "Equipment &",
        highlight2: "Heavy",
        ending: "Machinery Solutions"
      },
      description: "Our industrial equipment division designs and manufactures robust machinery for demanding environments. From custom conveyor systems to specialized processing equipment, we engineer solutions that enhance productivity while reducing operational costs. Our machines are built to withstand harsh conditions and deliver consistent performance for years of reliable service."
    },
    {
      id: 3,
      image: whatwedo3 , // Replace with actual image path
      title: {
        highlight1: "Sustainable",
        normal: "Technologies for",
        highlight2: "Eco-friendly",
        ending: "Manufacturing"
      },
      description: "We pioneer green manufacturing technologies that reduce environmental impact without compromising performance. Our energy-efficient systems minimize power consumption while maximizing output. From water recycling systems to emissions control solutions, we help industries transition to more sustainable operational models that meet increasingly stringent environmental regulations."
    },
    {
      id: 4,
      image: whatwedo4 , // Replace with actual image path
      title: {
        highlight1: "Automation",
        normal: "Systems &",
        highlight2: "Smart",
        ending: "Factory Integration"
      },
      description: "Embracing Industry 4.0, we develop advanced automation systems that transform traditional factories into smart manufacturing facilities. Our solutions include robotic integration, IoT-enabled equipment monitoring, and AI-driven process optimization. These systems increase production efficiency, reduce human error, and provide valuable data analytics for continuous improvement."
    }
  ];
  const awards = [
    {
      id: 1,
      image: starperformer, // Replace with actual award image
      title: "'Star Performer'"
    },
    {
      id: 2,
      image: rattanaward , // Replace with actual award image
      title: "'National Rattan Award'"
    },
    {
      id: 3,
      image: prideofIND , // Replace with actual award image
      title: "'Pride Of India'"
    },
    {
      id: 4,
      image: IOBRD , // Replace with actual award image
      title: "'IOBRD-2007'"
    }
  ];
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission - could connect to your API or mailing service
    console.log('Email submitted:', email);
    // Reset form after submission
    setEmail('');
    // You could add success notification here
  };


  return (
    <>
    {/* hero */}     
    <div className="relative w-full h-32 md:h-40 mt-24 lg:h-48 bg-cyan-50 overflow-hidden">
        {/* Image Background - Using placeholder since we can't import actual images */}
        <div>
          <img
          src={heroabout} 
          className="absolute w-full inset-0 bg-gray-600" 
          aria-label="Industrial recycling facility with worker"
          />
        </div>
        
        {/* Overlay with text */}
        <div className="relative h-full flex items-center px-4 md:px-8 lg:px-16">
          <div className="w-full md:text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Leading the Future: Innovating Sustainability for a Cleaner,{' '}
              <span className="text-emerald-400">Greener World.</span>
            </h1>
          </div>
        </div>
    </div>

    <div className="w-full bg-cyan-50 py-10 px-4 md:px-8 lg:px-16">


      {/* nav and our story*/}
      <div className=" container mx-auto bg-gray-50 py-8 md:py-12">
        <div className="mx-auto px-4">
          {/* Navigation */}
          <div className="mb-4 text-sm">
            <span className="text-gray-400">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-emerald-500">About Us</span>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-emerald-500">Story</span>
              </h2>
              
              <p className="text-gray-700 mb-6">
                Established in 1991, we have engineered over 600 unique machines, ranging 
                from compact equipment to large-scale industrial machinery. With a client 
                base that includes top MNCs and government entities worldwide, we prioritize 
                quality, simplicity, and durability in all our products.
              </p>
              
              <p className="text-gray-700">
                Our offerings encompass cutting-edge solutions for recycling, waste 
                management, and heavy-duty industrial machinery. Driven by innovation and 
                the latest technology, we are committed to delivering superior engineering 
                solutions that exceed client expectations.
              </p>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div>
                  <img
                  src={ourstoryimg}
                  className="w-full h-64 bg-gray-300" 
                  aria-label="Industrial facility with large silos and manufacturing building"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* vision mission */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Vision Section */}
          <div className="bg-slate-700 text-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold mr-2">Our <span className="text-teal-400">Vision</span></h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-teal-400">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-200">
              To be the world's leading provider of advanced engineering solutions, specializing in machinery that
              promotes sustainability and operational excellence.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-blue-100 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold mr-2">Our <span className="text-teal-500">Mission</span></h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-teal-500">
                <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.384 1.651 1.459 1.651 3.281 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.822 1.134-2.897 1.65-3.281V1.875z" />
                <path d="M12 16.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
              </svg>
            </div>
            <p className="text-gray-700">
              To engineer innovative and sustainable solutions for waste management and industrial applications,
              providing reliable and efficient machinery to enhance operational efficiency for our clients worldwide.
            </p>
          </div>

          {/* Quality and Sustainability Section */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">
                <span className="text-teal-500">Quality</span> and <span className="text-teal-500">Sustainability</span>
              </h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-teal-500 ml-2">
                <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700">
              Our Philosophy is simple: Build machines that last. We prioritize durability and build quality, ensuring
              each machine we produce withstand the test of time and environment. This emphasis on quality has
              landed us with multiple MNC's & government projects overseas, and are recognized as top
              manufacturer and exporter by government of India.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-blue-50 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose <span className="text-teal-500">Us</span> ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-teal-200 p-4 rounded-lg mb-4 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-teal-700">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">
                <span className="text-teal-500">Tailored</span> Solutions
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-amber-200 p-4 rounded-lg mb-4 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-amber-600">
                  <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 1113.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                  <path fillRule="evenodd" d="M9.75 15.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V16.5a.75.75 0 01.75-.75zm4.5 0a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">
                <span className="text-teal-500">Innovation</span> In User<br />Experience
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-200 p-4 rounded-lg mb-4 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-700">
                  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">
                <span className="text-teal-500">SME</span> Partnership
              </h3>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 p-4 rounded-lg mb-4 w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-teal-700">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">
                <span className="text-teal-500">Commitment</span> to Safety
              </h3>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700">
              We are not just another manufacturer; we are your partner in industrial efficiency
              and sustainability. Our user-friendly machines simplify operations and boost
              productivity. Choose us for reliability, sustainability, and excellence.
            </p>
          </div>
        </div>
      </div>

      {/* what we do */}
      <div className="container mx-auto mt-14">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-4xl font-bold text-center">
            What We <span className="text-teal-500">Do</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-2 inline-block text-gray-700">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col space-y-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-slate-700 rounded-lg overflow-hidden shadow-lg ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex flex-col md:flex-row`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img 
                  src={service.image} 
                  alt={`${service.title.highlight1} ${service.title.highlight2}`}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 p-6 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-teal-400">{service.title.highlight1}</span> {service.title.normal} <span className="text-teal-400">{service.title.highlight2}</span> {service.title.ending}
                </h3>
                <p className="text-gray-200">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* awards */}
      <div className="w-full bg-cyan-50 py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-teal-500">Achievements</span>
          </h2>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div 
                key={award.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Award Image */}
                <div className="p-4 bg-white">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-48 object-contain mx-auto"
                  />
                </div>
                
                {/* Award Title */}
                <div className="p-4 bg-cyan-50 text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
    
      {/* explore cta */}
      <div className="w-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src= {ctaaboutus} // Replace with your actual industrial background image
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-slate-800/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
          <div className="max-w-3xl mx-auto text-center text-white">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build <span className="text-teal-400">Beyond</span> Ordinary
            </h2>
            
            {/* Subheading */}
            <p className="text-xl mb-12">
              At Rangani Engineering, we engineer legacies. Let's build yours!
            </p>
            
            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <div className="w-full md:w-auto md:flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email Address"
                    className="w-full p-3 text-gray-800 bg-transparent border-b-2 border-white focus:border-teal-400 outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>
            </form>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-teal-500 text-white font-medium rounded hover:bg-teal-600 transition-colors duration-300">
                Explore Our Machines
              </button>
              <button className="px-8 py-3 bg-slate-800 text-white font-medium rounded hover:bg-slate-700 transition-colors duration-300">
                Start Your Custom Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
      
  );
};

export default AboutUs;
