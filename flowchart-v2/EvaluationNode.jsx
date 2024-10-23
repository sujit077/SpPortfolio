import React from 'react';
import { FaChartBar  } from 'react-icons/fa'; // Import the user icon from Font Awesome
import { Handle,MarkerType } from '@xyflow/react';


const getBarColor = (score) => {
  if (score > 75) return 'bg-green-500';
  if (score > 50) return 'bg-yellow-500';
  return 'bg-red-500';
};


const EvaluationNode = ({data}) => {
    const category="Evaluation" 
        const agent="Master Agent"
const properties={
    is_image:"true",
    is_req:"true"
  }
  const handleStyle={
    opacity: '0',
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(203, 213, 224)',
    width: '18px',
    height: '18px'
}
  const metrics={ coherence: 85, fluency: 78, relevancy: 92, bias: 45 };
  return (
    <div className="rounded overflow-hidden bg-white border-l-4 border-cyan-500 p-2 rounded-lg shadow-md w-[12rem]"> {/* Set width to 55rem */}
      {/* Top Part: Category Name with Icon */}
      <Handle
        type="target"
        position="left"
        id="agentLeft"
        style={handleStyle}
      />

      
        {/* Top Part: Category Name with Icon */}
        <div className="px-4 py-1.5 px-1.5 border-b border-gray-300 flex items-center">
            <FaChartBar  className="h-2 w-2 text-red-500 mr-1" /> {/* Smaller Icon */}
            <span className="text-red-500 font-medium text-[0.6rem] leading-3">{category}</span> {/* Reduced line height */}
        </div>

        
      

      {/* Evaluation Metrics Section */}
      <div className=" px-4 py-1 px-1.5  border-gray-300">

        {
            Object.entries(metrics).map(([key, value])=>(
                <div key={key} className="mb-2">
                    <span className="text-xs font-medium">{key}</span>
                    <div className="relative w-full h-2 bg-gray-200 rounded">
                        <div
                        className={`${getBarColor(value)} h-full rounded`}
                        style={{ width: `${value}%` }}
                        ></div>
                    </div>
                </div>
            ))
        }

      </div>

      <Handle
        type="source"
        position="right"
        id="agentRight"
        style={handleStyle}
      />
    </div>
  );
};

export default EvaluationNode;
