import { useReducer } from 'react';
import { reducer } from './reducer';
function App5() {
  const [state, dispatch] = useReducer(reducer, 0); // state 변수 만들고 초기값 세팅

  // 플러스 버튼 클릭했을 때  count state 변수 증가

  // 마이너스 버튼 클릭했을 때 count state 변수 감소

  const handleOnClickPlus = () => {
    //console.log('sfdsdf');

    dispatch({ type: 'increment' });
  };

  const handleOnClickMinus = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <div>
      현재값 : {state} <br />
      <button onClick={handleOnClickPlus}>+</button>
      <button onClick={handleOnClickMinus}>-</button>
    </div>
  );
}

export default App5;
