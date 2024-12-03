import { useState } from 'react';

function App4() {
  const [count, setCount] = useState(1); // state 변수 만들고 초기값 세팅

  // 플러스 버튼 클릭했을 때  count state 변수 증가

  // 마이너스 버튼 클릭했을 때 count state 변수 감소

  const handleOnClickPlus = () => {
    setCount(count + 1);
  };

  const handleOnClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      현재값 : {count} <br />
      <button onClick={handleOnClickPlus}>+</button>
      <button onClick={handleOnClickMinus}>-</button>
    </div>
  );
}

export default App4;
