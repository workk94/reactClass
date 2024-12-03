// 마운트 될 때
// 언마운트 될 때
//=> useEffect
import { useEffect } from 'react';
const Even2 = () => {
  // 마운트 될 때
  //마운트 될 때 콜백함수의 리턴으로 함수를 반환함

  useEffect(() => {
    console.log('hi');

    return () => {
      console.log('언마운트 bye~~');
    };
  }, []);
  return <div>짝수이군요</div>;
};

export default Even2;
