// action에 따라 state 값을 변화한다
// state 값을 변화시키는 코드
export function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}
