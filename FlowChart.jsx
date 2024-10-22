import React, { useState } from 'react';
import {ReactFlow, addEdge, Background, Controls, MarkerType } from '@xyflow/react';
import CustomNode from './CustomNode';
import '@xyflow/react/dist/style.css';

// Define custom node types
const nodeTypes = {
  customNode: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    position: { x: 100, y: 100 },
    data: {
      title: 'Social notifications',
      status: 'To do',
      metrics: [
        { label: '4 issues', value: '' },
        { label: 'Avg sessions per week', value: '641.45' }
      ],
      progress: 50,
    },
  },
  {
    id: '2',
    type: 'customNode',
    position: { x: 400, y: 200 },
    data: {
      title: 'AI model for song recommendations',
      status: 'In progress',
      metrics: [
        { label: '4 issues', value: '' },
        { label: 'Avg session duration', value: '26.15 mins' }
      ],
      progress: 34,
    },
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#4ade80', strokeWidth: 2 },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: '#ef4444', strokeWidth: 2, strokeDasharray: '4 4' },
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

const FlowChart = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <div className="w-full h-screen bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
