import React from 'react';
import './App.css';
import FocusInput from './components/Foucusinout';
import Count from './components/Count2';
import DocTitleUpdateOne from './components/DoctitleUpdateOne'
import DocTitleUpdateTwo from './components/DoctitleUpdateTwo'

function App() {
  
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <DocTitleUpdateOne />
      <DocTitleUpdateTwo />
    </div>
  );
}

export default App;