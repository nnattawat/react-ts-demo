import React, { useReducer, useEffect } from 'react';
import './Counter.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import reducer, { INCREMENT, DECREMENT, RESET} from './CounterReducer';

interface CounterProp {
  count: number;
  subtractText?: string;
  addText?: string;
  onChange?(count: number): void;
}

export default function Counter({
  count = 0,
  subtractText = 'subtract',
  addText = 'add',
  onChange = () => { }
}: CounterProp) {

  const [state, dispatch] = useReducer(reducer, { count });

  useEffect(() => {
    onChange(state.count);
  }, [state.count])

  return (
    <Container>
      <div className="count-result">
        Count: {state.count}
      </div>
      <div className="count-controller">
        {/* For simplicity I don't create an actionCreator e.g. reset(0), decrement() */}
        <Button variant="contained" onClick={() => dispatch({ type: RESET, count })}>Reset</Button>
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: DECREMENT})}>{subtractText}</Button>
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: INCREMENT})}>{addText}</Button>
      </div>
    </Container>
  )
}
