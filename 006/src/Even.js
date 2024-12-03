//Even 컴포넌트가 마운트 될 때 " Even  컴포넌트 마운툄  hi"
import { useEffect } from 'react';
const Even = () => {
  // useEffect (() => {}, []);
  useEffect(() => {
    console.log('Even 컴포넌트가 마운트 될 때   Even  컴포넌트 마운툄  hi');
  }, []); //컴포넌트가 마운트될 때  부가적인 코드를 작성할 수 있음, 콜백함수에 작성

  return <div>짝수이군요 !!!</div>;
};
export default Even;
