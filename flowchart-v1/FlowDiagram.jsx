import React, { useEffect, useState } from 'react';
import {ReactFlow,  Background, Controls ,MarkerType} from '@xyflow/react';
import AgentNode from './AgentNode';
import ToolNode from './ToolNode';
import DataSourceNode from './DataSourceNode';
import '@xyflow/react/dist/style.css';
import ConnectionLine from './ConnectionLine';

const nodeTypes = {
  agentNode: AgentNode,
  toolNode: ToolNode,
  dataSourceNode: DataSourceNode,
};

const FlowDiagram = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // Fetch JSON data from data.json file
    const fetchData = async () => {
      const response = await fetch('/src/data.json'); // Update the path accordingly
      const data = await response.json();
      setNodes(data.nodes);
      setEdges(data.edges);
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        style={{ background: '#f0f4f8' }}
        connectionLineComponent={ConnectionLine}
      >
        <Background color="#ccc" gap={10} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;