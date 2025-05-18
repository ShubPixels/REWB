import { useState } from "react";

export default function TabComponent(props) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    
    { id: "applications", label: "Applications" },
  ];

  return (
    <div className="w-full max-w-3xl p-4 border mb-2 rounded-lg shadow-md bg-white">
      {/* Tab Headers */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            } focus:outline-none`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "description" && (
          <div>
            <p className="text-gray-700">
              {props.description}
            </p>
            <h3 className="mt-4 font-semibold">Benefits</h3>
            
          </div>
        )}
        {activeTab === "specifications" && <p>{props.specifications}</p>}
        {activeTab === "applications" && <p>Applications content here...</p>}
      </div>
    </div>
  );
}
