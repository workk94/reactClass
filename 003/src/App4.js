import { useState } from 'react';

function App4() {
  // 날씨 데이터
  //오전 오후 상태에따른 날씨 정보 => state
  /* let a  ={
         time:"오전",
         info:"맑음",
         image: "http://dksjfkdfjdk"
    };*/

  const [weather, setWeather] = useState(null);

  const weatherData = {
    Morning: {
      info: 'Sunny',
      image:
        'https://cc-prod.scene7.com/is/image/CCProdAuthor/sun-illustration_P3a_690x724?$pjpeg$&jpegSize=200&wid=690', // Sunny image
    },
    Afternoon: {
      info: 'Cloudy',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObvcIrKExMfpdmCN3RB1Zg00jdKrkEIIlRA&s', // Cloudy image
    },
  };
  //
  const handleMoring = () => {
    //alert('dkfdjfkjdf');
    // 오전정보
    setWeather({
      time: 'Morning',
      info: 'Sunny',
      image:
        'https://cc-prod.scene7.com/is/image/CCProdAuthor/sun-illustration_P3a_690x724?$pjpeg$&jpegSize=200&wid=690',
    });
  };

  const hanleAfternoon = () => {
    //alert('dkfkf@@@@');
    //오후정보
    setWeather({
      time: 'Afternoon',
      info: 'Cloudy',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObvcIrKExMfpdmCN3RB1Zg00jdKrkEIIlRA&s',
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1> 날씨 </h1>
      <h2> 현재시간 : {weather && weather.time} </h2>
      <h3> 날씨 : {weather && weather.info}</h3>
      <img
        src={weather && weather.image}
        style={{ width: '150px', height: '150px', margin: '10px' }}
      />
      <button onClick={handleMoring}>오전</button>
      <button onClick={hanleAfternoon}>오후</button>
    </div>
  );
}
export default App4;
