interface State {
  count: number
}

export enum ActionType {
  Increment,
  Decrement,
  Reset
}

interface Action {
  type: ActionType,
}

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.Increment:
      return {count: state.count + 1};
    case ActionType.Decrement:
      return {count: state.count - 1};
    case ActionType.Reset:
      return {count: 0};
    default:
      throw new Error();
  }
}