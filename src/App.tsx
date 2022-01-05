import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../src/api/hooks/index';

import './App.css';
import { scoreBoardType } from './types';

function App() {
  const [scoreBoard, setScoreBoard] = useState<scoreBoardType>();

  const getScoreBoardData = async () => {
    const data = await api.getScoreBoard();
    setScoreBoard(data.data.data);
  };
  useEffect(() => {
    getScoreBoardData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            console.log(scoreBoard);
          }}
        >
          data
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
