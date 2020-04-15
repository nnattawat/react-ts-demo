import React, { useState } from 'react';
import './Counter.css';

interface CounterProp {
  count?: number;
  subtractText?: string; 
  addText?: string;
}

export default function Counter(props: CounterProp) {
  const {
    count = 0,
    subtractText = 'subtract',
    addText = 'add'
  } = props;

  const [currectCount, setCount] = useState(count);

  return (
    <div>
      Count: {currectCount}
      <button onClick={() => setCount(count)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>{subtractText}</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>{addText}</button>
    </div>
  )
}