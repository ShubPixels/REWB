// File: TabComponent.jsx

import { useState } from "react";

export default function TabComponent(props) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "applications", label: "Applications" },
  ];

  // This function dynamically renders the specifications based on their data type
  const renderSpecifications = (specs) => {
    // Case 1: If specs is just a string, render it in a paragraph.
    if (typeof specs === 'string') {
      return <p className="text-gray-700">{specs}</p>;
    }

    // Case 2: If specs is an array...
    if (Array.isArray(specs) && specs.length > 0) {
      // ...and its first item is a string, render a bulleted list.
      if (typeof specs[0] === 'string') {
        return (
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {specs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      }

      // ...and its first item is an object, render a full table.
      if (typeof specs[0] === 'object' && specs[0] !== null) {
        const headers = Object.keys(specs[0]);
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map(header => (
                    <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {specs.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {headers.map(header => (
                      <td key={`${rowIndex}-${header}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    // Fallback for empty or unrecognized formats
    return <p className="text-gray-700">No specifications available.</p>;
  };

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
            <p className="text-gray-700">{props.description}</p>
          </div>
        )}
        
        {activeTab === "specifications" && renderSpecifications(props.specifications)}

        {activeTab === "applications" && (
          <div>
            <p className="text-gray-700">{props.applications}</p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="px-4 pb-4">
        <p className="text-xs text-gray-500 italic">*Numbers may vary*</p>
      </div>
    </div>
  );
}