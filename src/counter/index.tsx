import React, { useReducer } from 'react';
import './Counter.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import reducer, { INCREMENT, DECREMENT, RESET} from './CounterReducer';

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

  const [state, dispatch] = useReducer(reducer, { count });

  return (
    <Container>
      <div>
        Count: {state.count}
      </div>
      {/* For simplicity I don't create an actionCreator e.g. reset(0), decrement() */}
      <Button variant="outlined" color="secondary" onClick={() => dispatch({ type: RESET, count })}>Reset</Button>
      <Button variant="outlined" color="primary" onClick={() => dispatch({ type: DECREMENT})}>{subtractText}</Button>
      <Button variant="outlined" color="primary" onClick={() => dispatch({ type: INCREMENT})}>{addText}</Button>
    </Container>
  )
}