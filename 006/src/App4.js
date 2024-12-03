import { useState } from 'react';
import Even3 from './Even3';
function App4() {
  const [count, setCount] = useState(1);

  const handleOnCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      현재카운드 : {count}
      <button onClick={handleOnCount}>+1</button>
      {count % 2 == 0 && <Even3 />}
    </div>
  );
}

export default App4;
