import React from 'react';
import { Handle ,MarkerType} from '@xyflow/react';
import { FaUser } from 'react-icons/fa';
import { FiTool } from "react-icons/fi";



const ToolNode = ({ data }) => {
  const label = data?.label || 'No Label';
  const properties = data?.properties || {};
  const handleStyle={
        opacity: '0',
        backgroundColor: 'rgb(255, 255, 255)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(203, 213, 224)',
        width: '18px',
        height: '18px'
  }

  return (
    <div className=" rounded overflow-hidden bg-white border-l-4 border-blue-500 p-2 rounded-lg shadow-md w-[12rem]">
        <Handle
        type="target"
        position="left"
        id="agentLeft"
        style={handleStyle}
      />

      
        {/* Top Part: Category Name with Icon */}
        <div className="px-4 py-1.5 px-1.5 border-b border-gray-300 flex items-center">
            <FiTool className="h-2 w-2 text-red-500 mr-1" /> {/* Smaller Icon */}
            <span className="text-red-500 font-medium text-[0.6rem] leading-3">Tool</span> {/* Reduced line height */}
        </div>

        {/* Combined Part: Agent Name and Key-Value Properties */}
        <div className="px-4 py-1.5 px-1.5  border-gray-300"> {/* Added padding for combined section */}
            <div className="font-semibold text-lg mb-1 text-left">{data.label}</div> {/* Agent Name */}
            {Object.entries(data.properties).length>0 && Object.entries(data.properties).map(([key, value]) => (
            <div key={key} className="flex justify-start mb-1 text-xs"> {/* Ensure left alignment */}
                <span className="font-medium">{key}:</span>
                <span className="mx-1 text-gray-700 text-left flex-grow break-words ">{value}</span> {/* Left-aligned Value */}
            </div>
            ))}
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

export default ToolNode;
