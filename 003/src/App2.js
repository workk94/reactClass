import { useState } from 'react';

function App2() {
  // 이름이 바뀌면 바뀐 이름이 보여지도록 하자 (이름 변수를 state 변수로 만들면 된다)
  const [name, setName] = useState('홍길동'); // state 변수 이름 name, state 변수를 변화시키는 함수 (이 함수를 통해서만 state 변수의 값을 변화시킬 수 있다)

  // 이벤트 핸들러 함수
  const handleOnChange = (e) => {
    //alert('dfsdfj');
    console.log(e.target.value);
    //state 변수 값 변화시키기
    setName(e.target.value);
  };

  return (
    <div>
      <div>이름입력</div>
      <input type='text' onChange={handleOnChange}></input>

      <div>출력이름</div>
      <div>{name}</div>
    </div>
  );
}

export default App2;
