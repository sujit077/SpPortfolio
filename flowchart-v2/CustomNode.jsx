import React from 'react';
import { Handle, Position } from '@xyflow/react';

const CustomNode = ({ data }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 shadow-md min-w-[200px]">
      {/* Node Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="font-bold text-lg">{data.title}</div>
        
      </div>

      {/* Metrics */}
      <div className="mb-4">
        {data.metrics.map((metric, index) => (
          <div key={index} className="text-xs">
            <strong>{metric.label}:</strong> {metric.value}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="relative pt-1 mb-3">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${data.progress}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
              data.progress < 50 ? 'bg-yellow-400' : 'bg-green-500'
            }`}
          />
        </div>
        <div className="text-sm text-right font-semibold">
          {data.progress}% done
        </div>
      </div>

      {/* Handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="bg-gray-600"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="bg-gray-600"
      />
    </div>
  );
};

export default CustomNode;
