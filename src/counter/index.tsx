import React, { useReducer } from 'react';
import './Counter.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import reducer, { ActionType} from './CounterReducer';

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
      <Button variant="outlined" color="secondary" onClick={() => dispatch({ type: ActionType.Reset })}>Reset</Button>
      <Button variant="outlined" color="primary" onClick={() => dispatch({ type: ActionType.Decrement})}>{subtractText}</Button>
      <Button variant="outlined" color="primary" onClick={() => dispatch({ type: ActionType.Increment})}>{addText}</Button>
    </Container>
  )
}