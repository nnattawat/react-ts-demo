import React from 'react';
import logo from './logo.svg';
import Counter from './counter';
import './App.css';

function App() {
  return (
    <div>
        <Counter addText="increase" count={2} />
    </div>
  );
}

export default App;
