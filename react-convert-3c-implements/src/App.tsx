import React from 'react';
import './App.css';

import { DisplayAllPossibleVariations } from './components/Demo'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayAllPossibleVariations />
      </header>
    </div>
  );
}

export default App;
