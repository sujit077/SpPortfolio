import React from 'react';
import { Handle } from '@xyflow/react';

const DataSourceNode = ({ data }) => {
  return (
    <div className="bg-orange-100 p-4 shadow-md rounded-md border border-orange-400 w-48">
      <Handle
        type="target"
        position="left"
        id="dataSourceLeft"
        style={{ background: '#555' }}
      />
      <div className="font-bold text-lg text-center mb-2 text-orange-800">{data.label}</div>
      <p className="text-sm text-gray-700 text-center">{data.sourceType}</p>
    </div>
  );
};

export default DataSourceNode;