import React from 'react';
import { Handle } from '@xyflow/react';

const ToolNode = ({ data }) => {
  return (
    <div className="bg-blue-100 p-4 shadow-md rounded-md border border-blue-400 w-48">
      <Handle
        type="target"
        position="left"
        id="toolLeft"
        style={{ background: '#555' }}
      />
      <div className="font-bold text-lg text-center mb-2 text-blue-800">{data.label}</div>
      <p className="text-sm text-gray-700 text-center">{data.properties}</p>
      <Handle
        type="source"
        position="right"
        id="toolRight"
        style={{ background: '#555' }}
      />
      
    </div>
  );
};

export default ToolNode;
