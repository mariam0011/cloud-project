// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [view, setView] = useState('home');  // Default view is "home"

  const handleSelectView = (view) => {
    setView(view);  // Update the view when a button is clicked
  };

  return (
    <div>
      <Header onSelectView={handleSelectView} />
      <Body view={view} />
    </div>
  );
}

export default App;
