// App.js
import React from 'react';
import FlowChart from './FlowChart';
import FlowDiagram from './FlowDiagram';
import { Handle,MarkerType } from '@xyflow/react';


const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <h1>XYFlow Example</h1>
      {/* <FlowChart /> */}
      <FlowDiagram />
    </div>
  );
};

export default App;
