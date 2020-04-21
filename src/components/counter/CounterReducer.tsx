interface State {
  count: number
}
const initialState: State = {
  count: 0
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

interface IncrementAction {
  type: typeof INCREMENT
}
interface DecrementAction {
  type: typeof DECREMENT
}
interface ResetAction {
  type: typeof RESET,
  count: number
}

export type Action = IncrementAction | DecrementAction | ResetAction;

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: action.count };
    default:
      throw new Error();
  }
}
