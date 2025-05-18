import { useState } from "react";

export default function DisplayComponent(props) {

  return (
    <div className="w-full max-w-3xl p-4 mb-2 border rounded-lg shadow-md bg-white">
      {/* Tab Headers */}
      <div className="flex border-b">
        <h1>{props.name}</h1>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        
          <div>
            <p className="text-gray-700">
              {props.tagline}
            </p>
            <h3 className="mt-4 font-semibold">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Higher Scrap Selling Price</li>
              <li>Efficient Recycling</li>
              <li>Lower Transportation Costs</li>
              <li>Minimal Space Usage</li>
              <li>Ease of Material Handling</li>
            </ul>
          </div>
        
      </div>
    </div>
  );
}
