import React from 'react';
import Counter from './components/counter';
import './App.css';

function App() {
  return (
    <div>
        <Counter
          addText="increase"
          count={2}
          onChange={count => console.log(`New count: ${count}`)}
        />
    </div>
  );
}

export default App;
