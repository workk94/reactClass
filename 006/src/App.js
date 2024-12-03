import './App.css';
import Even from './Even';
import { useState } from 'react';
//컴포넌트 마운트 : 화면에서 처음 표시될 때
//컴포넌트 언마운트 : 화면에서 컴포넌트가 사라질 때
function App() {
  const [count, setCount] = useState(1);
  const handleOnClick = () => {
    setCount(count + 1);
  };
  return (
    <div className='App'>
      현재숫자 : {count}
      <div>
        <button onClick={handleOnClick}>+1</button>
      </div>
      {count % 2 == 0 && <Even />}
    </div>
  );
}

export default App;
