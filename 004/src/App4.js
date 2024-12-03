import Viewer from './Viewer';

import './App3.css';
import Controller from './Controller';
import { useState } from 'react';

function App4() {
  const [count, setCount] = useState(0);

  // state 변수는 Viewer 자식 컴포넌트에게 props로 전달
  // state 변화시키는 함수는 Controller 자식컴포넌트에게 props 전달
  const handleCount = (value) => {
    setCount(value + count);
  };

  return (
    <div className='App3'>
      <h3> Simple counter</h3>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller handleCount={handleCount} />
      </section>
    </div>
  );
}

export default App4;
