import React, { useState } from "react";

const Buttons = () => { 
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
    <div>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-20 right-6">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-200"
        >
          📞
        </button>
      </div>

      {/* WhatsApp Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-36 right-6 bg-white shadow-lg border border-gray-300 rounded-lg w-64 p-4 z-10">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-800">Chat Support</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-gray-500 hover:text-gray-800">✖</button>
          </div>
          
          <div className="h-40 overflow-y-auto border rounded p-2 bg-gray-100">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 p-2 rounded ${msg.sender === "bot" ? "bg-gray-200 text-gray-800" : "bg-cyan-500 text-white text-right"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="mt-2 flex">
            <input
              type="text"
              className="flex-1 border rounded p-2 text-sm"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-3 py-2 rounded ml-2"
              onClick={handleSendMessage}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Back-to-Top Button */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
        className="fixed bottom-6 right-6 bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-cyan-600 transition-all duration-200">
        ⬆
      </button>
    </div>
  );
};

export default Buttons;
