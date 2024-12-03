// state 변화될 때 부가적인 코드를 작성하려면 useEffect를 사용해야됨
//useEffect (()=>{}. [count]);
//useEffect (()=>{}. [count, text]);
//useEffect (()=>{}. [text]);
//useEffect (()=>{}. [count]);

import { useEffect, useState } from 'react';
function App3() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('count 변화됨');
  }, [count]);
  const handleOnCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      현재카운드 : {count}
      <button onClick={handleOnCount}>+1</button>
    </div>
  );
}

export default App3;
