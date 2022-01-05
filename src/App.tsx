import React from 'react';

import './App.css';
import Layout from './Layout';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto',
        height: '100vh',
      }}
    >
      <Layout />
    </div>
  );
}

export default App;
