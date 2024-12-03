// 마운트될 때
// 언마운트 될 때

/*

useEffect(()=>{ return ()=>{}}, [])
*/

import { useEffect } from 'react';

const Even3 = () => {
  useEffect(() => {
    let id = setInterval(() => {
      console.log('!');
    }, 1000);

    return () => {
      console.log('언마운트!!');
      clearInterval(id);
    };
  }, []);

  return <div>짝수이군요</div>;
};

export default Even3;
