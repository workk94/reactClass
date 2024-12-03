import './App.css';
import { useState } from 'react';

function App() {
  let a = 10;

  // 일반변수는 값이 변화되도 화면을 다시 그리지 않는다
  // state 변수 변수의 값이 바뀌면 화면을 다시 그린다, (state 변수의 값에 반응하다!!)

  //state 변수 만들기

  const [count, setCount] = useState(10); // state 변수의 초기값 설정, 배열을 반환함 // 1. count(state 변수), 2. state변수를 변화시킬수 있는 메서드

  // a라는 변수의 값을 증가
  const funca = () => {
    a += 1;
    console.log(a);
  };

  const funcb = () => {
    //state변수 증가하기
    //반드시 setCount 함수를 통해서 state변수의 값 바꾸기
    //setCount(count + 1); // 매개변수 : 값, 콜백함수
    setCount(15);
  };

  // 이전의 state 변수의 활용하면서 값을 설정할 때는 콜백함수 사용
  const funcc = () => {
    // state값을 변화시키는 setState 함수를 호출할 때
    //매개변수로 콜백함수를 사용할 수 있다
    // 콜백함수가 반환하는 값으로 state 변수 값이 바뀐다
    // 변경되기 전(현재)의 state 값을 제공받는다
    setCount((preCount) => {
      return preCount + 1;
    });
  };

  return (
    <div className='App'>
      <div>변수값 : {a}</div>
      <div>state변수 증가하기 : {count}</div>
      <button onClick={funca}>일반변수증가</button>
      <button onClick={funcb}>state변수증가하기</button>
      <button onClick={funcc}>state변수증가하기2</button>
    </div>
  );
}

export default App;
