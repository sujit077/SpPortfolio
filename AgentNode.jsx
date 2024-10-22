import React from 'react';
import { Handle } from '@xyflow/react';

const AgentNode = ({ data }) => {
  return (
    <div className="bg-green-100 p-4 shadow-md rounded-md border border-green-400 w-48">
      <Handle
        type="target"
        position="left"
        id="agentLeft"
        style={{ background: '#555' }}
      />
      <div className="font-bold text-lg text-center mb-2 text-green-800">{data.label}</div>
      <p className="text-sm text-gray-700 text-center">{data.description}</p>
      <Handle
        type="source"
        position="right"
        id="agentRight"
        style={{ background: '#555' }}
      />
      <Handle
        type="source"
        position="right"
        id="agentRight"
        style={{ background: '#555' }}
      />
      
    </div>
  );
};

export default AgentNode;
