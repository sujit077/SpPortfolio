import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import the user icon from Font Awesome

const getBarColor = (score) => {
  if (score > 75) return 'bg-green-500';
  if (score > 50) return 'bg-yellow-500';
  return 'bg-red-500';
};


const FlowChart = () => {
    const category="Agent" 
        const agent="Master Agent"
const properties={
    is_image:"true",
    is_req:"true"
  }
  const metrics={ coherence: 85, fluency: 78, relevancy: 92, bias: 45 };
  return (
    <div className="w-[55rem] rounded overflow-hidden shadow-lg bg-white border border-gray-300 p-4"> {/* Set width to 55rem */}
      {/* Top Part: Category Name with Icon */}
      <div className="px-4 py-1 border-b border-gray-300 flex items-center">
        <FaUser className="h-2 w-2 text-red-500 mr-1" /> {/* Smaller Icon */}
        <span className="text-red-500 font-medium text-xs leading-3">{category}</span> {/* Reduced line height */}
      </div>

      {/* Combined Part: Agent Name and Key-Value Properties */}
      <div className="px-4 py-2 border-b border-gray-300">
        <div className="font-semibold text-lg mb-1 text-left">{agent}</div>
        {Object.entries(properties).map(([key, value]) => (
          <div key={key} className="flex justify-start mb-1 text-xs">
            <span className="font-medium">{key}:</span>
            <span className="text-gray-700 text-left flex-grow break-words">{value}</span>
          </div>
        ))}
      </div>

      {/* Evaluation Metrics Section */}
      <div className="mt-4">
        <h3 className="font-semibold text-left mb-2">Evaluation Metrics</h3>

        {/* Coherence */}
        <div className="mb-2">
          <span className="text-xs font-medium">Coherence</span>
          <div className="relative w-full h-4 bg-gray-200 rounded">
            <div
              className={`${getBarColor(metrics.coherence)} h-full rounded`}
              style={{ width: `${metrics.coherence}%` }}
            ></div>
          </div>
        </div>

        {/* Fluency */}
        <div className="mb-2">
          <span className="text-xs font-medium">Fluency</span>
          <div className="relative w-full h-4 bg-gray-200 rounded">
            <div
              className={`${getBarColor(metrics.fluency)} h-full rounded`}
              style={{ width: `${metrics.fluency}%` }}
            ></div>
          </div>
        </div>

        {/* Relevancy */}
        <div className="mb-2">
          <span className="text-xs font-medium">Relevancy</span>
          <div className="relative w-full h-4 bg-gray-200 rounded">
            <div
              className={`${getBarColor(metrics.relevancy)} h-full rounded`}
              style={{ width: `${metrics.relevancy}%` }}
            ></div>
          </div>
        </div>

        {/* Bias */}
        <div className="mb-2">
          <span className="text-xs font-medium">Bias</span>
          <div className="relative w-full h-4 bg-gray-200 rounded">
            <div
              className={`${getBarColor(metrics.bias)} h-full rounded`}
              style={{ width: `${metrics.bias}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
