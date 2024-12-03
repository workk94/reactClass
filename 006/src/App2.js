import { useState } from 'react';
import Even2 from './Even2';
function App2() {
  const [count, setCount] = useState(1);
  const handleOnClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      현재카운트 : {count}
      <button onClick={handleOnClick}>+1</button>
      {count % 2 == 0 && <Even2 />}
    </div>
  );
}

export default App2;
