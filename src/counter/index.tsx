import React, { useState } from 'react';
import './Counter.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


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
    <Container>
      <div>
        Count: {currectCount}
      </div>
      <Button variant="outlined" color="secondary" onClick={() => setCount(count)}>Reset</Button>
      <Button variant="outlined" color="primary" onClick={() => setCount(prevCount => prevCount - 1)}>{subtractText}</Button>
      <Button variant="outlined" color="primary" onClick={() => setCount(prevCount => prevCount + 1)}>{addText}</Button>
    </Container>
  )
}