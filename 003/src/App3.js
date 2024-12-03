import './App3.css';
import { useState } from 'react';
// 리엑트 라이브러리 = 리엑트 훅

function App3() {
  const images = [
    'https://img.insight.co.kr/static/2024/05/29/700/img_20240529094418_qapy79ll.webp',
    'https://cf.asiaartistawards.com/news/21/2024/05/2024052720483581659_1.jpg',
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjNfMjcy%2FMDAxNzEzODUyMzM0Mjc4.wT6jo7CmNUDIRdz4ZKzPSksssl2k-U7ZYAC9sNDdoSAg.uguLV78HQVtq7Ki5uWokYt5HjKEZy8Ue0eILyhRqbwAg.PNG%2Fimage.png&type=sc960_832',
  ];

  // 인덱스를 관리할 state 변수만들기
  //구조분해할당
  const [currentIdx, setCurrentIdx] = useState(0);

  //이벤트 핸들러함수(다음 클릭했을때)
  const handleNextBtn = () => {
    //alert('asdfadsf');

    // urrentIdx state 변수의 값을 1증가
    setCurrentIdx((a) => {
      // a : 변경되기전의 state 변수의 값

      // 현재 state : 2  0,1, 2
      if (a === images.length - 1) {
        return 0;
      } else {
        return a + 1;
      }
    });
  };

  const handlePreBtn = () => {
    //state 변수의 값 (현재 index)을 1감소시킨다
    // setCurrentIdx((bb) => {
    //   // bb => 현재 state값을 저장한 매개변수
    //   return bb - 1;
    // });

    setCurrentIdx((cc) => {
      if (cc === 0) {
        return images.length - 1; // 마지막 index 반환되도록
      } else {
        return cc - 1;
      }
    });
  };

  return (
    <div className='App3'>
      <div>갤러리 만들기 </div>
      <div className='Gallery'>
        <div className='galleryImg'>
          <img src={images[currentIdx]} alt='드라마이미지' />
        </div>
        <div className='preBtn' onClick={handlePreBtn}>
          이전
        </div>
        <div className='NextBtn' onClick={handleNextBtn}>
          다음
        </div>
      </div>
    </div>
  );
}

export default App3;
