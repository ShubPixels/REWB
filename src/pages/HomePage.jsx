import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import BalingPressMachines from "../images/PHOTO EDIT 6.png";
import ScrapShearingMachine from "../images/PHOTO EDIT 7.png";
import ForgingRingRollingMachines from "../images/PHOTO EDIT 21.png";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import TLDR from "../images/tldr.jpg";
import FadeInSection from "./Fadeinsection";
import ImageCarousel from '../Components/ImageCarousel';
import { EffectCoverflow, Navigation } from "swiper/modules";
import slide_image_1 from "../images/PHOTO EDIT 22.png";
import slide_image_2 from "../images/PHOTO EDIT 23.png";
import slide_image_3 from "../images/PHOTO EDIT 24.png";
import slide_image_4 from "../images/PHOTO EDIT 25.png";
import slide_image_5 from "../images/PHOTO EDIT 6.png";
import slide_image_6 from "../images/PHOTO EDIT 7.png";
import slide_image_7 from "../images/PHOTO EDIT 21.png";
import worldmap from "../images/world map.png";
import wastemanageimg from "../images/bluemach.png";
import industrialimg from "../images/Cold Shearing Machine.jpg";
import specialpurpimg from "../images/Pipe Sizing and Guaging Machine.jpg";
import productsData from './ProductData';
import toyota from "../images/toyota.png";
import tata from "../images/tata.png";
import pepsi from "../images/pepsi.png";
import mahindra from "../images/mahindra.png";
import essar from "../images/essar.png";
import bajaj from "../images/bajaj.png";
import laval from "../images/laval.png";
import slide1 from "../images/Group 9245.png";
import slide2 from "../images/Group 9246.png";
import slide3 from "../images/Group 9247.png";

const RotatingSphere = () => {
  const globeRef = useRef();
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });
  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial wireframe color="cyan" />
    </mesh>
  );
};

const WireframeGlobe = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <RotatingSphere />
      <lineSegments>
        <edgesGeometry args={[new THREE.SphereGeometry(2.1, 32, 32)]} />
        <lineBasicMaterial color="cyan" />
      </lineSegments>
    </Canvas>
  );
};

const useCountUp = (start, end, duration) => {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, start, end, duration]);
  return [count, ref];
};

const services = [
  {
    title: "Waste Management",
    description:
      "We build the muscle behind recycling industries. Our hydraulic baling presses compact scrap metal into dense, transport-ready blocks. Shredders tear through tires, e-waste, and industrial byproducts.",
    image: wastemanageimg,
  },
  {
    title: "Industrial Machines",
    description:
      "When heavy-duty precision matters, we deliver. Our ring rolling machines shape metal rings for wind turbines and ship propellers.",
    image: industrialimg,
  },
  {
    title: "Special Purpose Machines",
    description:
      "If it doesn’t exist, we invent it. Over 600 unique machines stand as proof. Clients bring us raw concepts—a specialized cutter for aerospace alloys, or a hybrid machine to streamline complex workflows.",
    image: specialpurpimg,
  },
  {
    title: "Manufacturing Services",
    description:
      "Specialize in producing machinery to client-provided designs, ensuring precision and adherence to specifications.",
    image: slide_image_5,
  },
];

const HomePage = () => {
  const partnerLogos = [toyota, tata, pepsi, mahindra, essar, bajaj, laval];
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);
  const [clients, clientsRef] = useCountUp(0, 6000, 2000);
  const [countries, countriesRef] = useCountUp(0, 15, 1500);
  const [years, yearsRef] = useCountUp(0, 30, 1500);
  const testimonials = [
    {
      id: 1,
      name: "Rahul Mehta",
      designation: "Operations Manager",
      company: "Toyota",
      logo: toyota,
      text: "We needed a reliable and efficient metal processing machine, and they exceeded our expectations. The machine they provided has not only streamlined our operations but also significantly reduced our waste output. The durability and build quality are truly remarkable.",
      image: TLDR,
    },
    {
      id: 2,
      name: "Ally Masi",
      designation: "Director of Industries Events Marketing",
      company: "Tata",
      logo: tata,
      text: "We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling have increased audience engagement.",
      image: TLDR,
    },
    {
      id: 3,
      name: "Ally Masi",
      designation: "Director of Industries Events Marketing",
      company: "Bajaj",
      logo: bajaj,
      text: "We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling have increased audience engagement.",
      image: TLDR,
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    state: "",
    city: "",
    category: "General Inquiry",
    message: "",
    terms: false,
  });

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.company || !formData.country || !formData.state || !formData.city) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (!formData.terms) {
      setFormError("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSuccess("Your message has been sent successfully!");
        setFormError("");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          state: "",
          city: "",
          category: "General Inquiry",
          message: "",
          terms: false,
        });
      } else {
        setFormError("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setFormError("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY <= lastScrollY);
      setIsTopButtonVisible(currentScrollY > 300);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-cyan-50">
      <FadeInSection>
        <section className="widthforherosec bg-cyan-50 mx-auto flex flex-wrap marginTPforhersec items-center pt-6 px-4 md:px-8">
          <div className="w-full md:w-1/2 text-center md:text-left py-8">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-800 leading-tight mb-4">
              REIMAGINING WASTE, <br />
              REENGINEERING <span className="text-teal-500">THE FUTURE</span>
            </h1>
            <p className="text-gray-600 text-[clamp(1rem,2vw,1.25rem)] mb-6">
              Empowering Industries with Advanced Engineering Solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="border-2 border-teal-500 text-teal-500 px-6 py-2 rounded-lg font-medium hover:bg-teal-500 hover:text-white transition">
                Learn More
              </button>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:opacity-80 transition">
                Watch Video
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex pl-3 marginTPforhersec justify-center md:justify-end">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              slidesPerView={1}
              className="max-w-full"
            >
              {[slide1, slide2, slide3].map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Hero Slide ${index + 1}`} className=" object-contain rounded-lg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="bg-cyan-50 py-12 marginTP px-4 md:px-8">
          <div className=" mx-auto flex flex-wrap justify-center items-center  md:gap-24">
            {partnerLogos.map((logo, idx) => (
              <img key={idx} src={logo} alt={`Partner ${idx}`} className="h-12 md:h-16 object-contain" />
            ))}
          </div>
        </section>
      </FadeInSection>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-teal-500 text-white p-6 rounded-2xl shadow-lg gap-8">
        <div className="w-full md:w-1/3 flex">
          <img src={worldmap} alt="World Map" className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
            <h2 className="text-3xl font-bold">Get your personalized quote today!</h2>
            <button className="bg-white text-teal-500 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-gray-100">
              Get a Quote
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold">6000+</p>
              <p className="text-sm">Unique Clients</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold">15+ Countries</p>
              <p className="text-sm">Worldwide Reach</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold">30+ Years</p>
              <p className="text-sm">Experience</p>
            </div>
          </div>
        </div>
      </div>

      <FadeInSection>
        <section className="bg-cyan-50 py-12 ">
          <h2 className="text-center text-4xl sm:text-5xl font-bold mb-12 sm:mb-16">
            Our Wide <span className="text-teal-500">Range of Services</span>
          </h2>
          <div className="container mx-auto px-4 sm:px-8 lg:px-4 flex flex-col sm:flex-row justify-center gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg w-[360px] p-6 sm:p-8 lg:p-10 transition-transform hover:scale-105"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4">{service.description}</p>
                <a href="#" className="text-teal-500 font-semibold hover:underline mb-3 sm:mb-4 block">
                  SEE MORE →
                </a>
                <div className="overflow-visible rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-scale-down transition-transform duration-300 hover:scale-150"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      <div className="container mx-auto">
        <ImageCarousel />
      </div>

      <FadeInSection>
        <section className="bg-cyan-50 py-12 px-4 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              Experiences <span className="text-teal-500">That Matter</span>
            </h2>
            <div className="flex flex-wrap justify-center">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white shadow-lg rounded-lg m-4 max-w-md p-6"
                >
                  <p className="text-lg mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}'s image`}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm">{testimonial.designation}</p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="h-8" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button className="mx-2 px-4 py-2 bg-teal-500 text-white rounded-full shadow hover:bg-teal-600">
                ❮
              </button>
              <button className="mx-2 px-4 py-2 bg-teal-500 text-white rounded-full shadow hover:bg-teal-600">
                ❯
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="bg-cyan-50 py-16 px-4 md:px-12">
          <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Connect <span className="text-teal-500">With Us</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name*"
                  className="input-style"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email*"
                  className="input-style"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="input-style"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name*"
                  className="input-style"
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country*"
                  className="input-style"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State*"
                  className="input-style"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City*"
                  className="input-style"
                />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="input-style"
                >
                  <option>Select Category</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="input-style md:col-span-2 h-24"
                />
                <div className="flex items-center md:col-span-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-600">
                    Agree to our terms and conditions
                  </label>
                </div>
                {formError && (
                  <p className="text-red-500 text-sm md:col-span-2">{formError}</p>
                )}
                {formSuccess && (
                  <p className="text-green-500 text-sm md:col-span-2">{formSuccess}</p>
                )}
                <button
                  onClick={handleSubmit}
                  className="bg-teal-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-teal-600 transition md:col-span-2"
                >
                  Submit Now →
                </button>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Happy to Help</h3>
              <p className="text-gray-600 mb-6">
                24/7 service support and technical assistance. Visit our office for more insights.
              </p>
              <div className="flex items-center bg-teal-500 text-white p-4 rounded-lg shadow-md mb-4">
                <span className="material-icons mr-4">email</span>
                <div>
                  <p className="text-sm">EMAIL US</p>
                  <p className="text-lg font-bold">vatanrangani4620@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center bg-teal-500 text-white p-4 rounded-lg shadow-md mb-4">
                <span className="material-icons mr-4">phone</span>
                <div>
                  <p className="text-sm">TALK TO US</p>
                  <p className="text-lg font-bold">+91-9925036495</p>
                </div>
              </div>
              <div className="text-gray-700">
                <h4 className="font-bold mb-2">Address:</h4>
                <p>E-30, Electronic Estate, G. I. D. C., Sector - 26, Gandhinagar - 382 028, Gujarat, India.</p>
                <a href="#" className="text-teal-500 font-semibold mt-2 inline-block hover:underline">
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default HomePage;