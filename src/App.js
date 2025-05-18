import React, { useState } from "react";
import Footer from "./Components/Footer";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import NAVBAR from "./Components/Navbar";
import { Routes, Route } from "react-router-dom"; // ✅ Correct import
import "swiper/css";
import "swiper/css/autoplay";
import Buttons from "./button";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import CategoryPage from "./pages/CategoriesPage";

const App = () => {  // ✅ Fixed Function Definition
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([{ text: "How can I help you?", sender: "bot" }]);

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setMessages([...messages, { text: userMessage, sender: "user" }]);
      setUserMessage("");
    }
  };

  return (
    <>
      <NAVBAR />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category-page" element={<CategoryPage />} />
        {/* <Route path="/Scrap Baling Press" element={<ProductPage />} /> */}
        <Route path="/products/:productName" element={<ProductPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Buttons /> {/* ✅ Add Floating Buttons */}
      <Footer />
    </>
  );
}

export default App;