import { useState } from 'react';

function App5() {
  const [weather, setWeather] = useState({
    time: 'Morning',
    info: 'Sunny',
    image:
      'https://cc-prod.scene7.com/is/image/CCProdAuthor/sun-illustration_P3a_690x724?$pjpeg$&jpegSize=200&wid=690', // Placeholder sunny image
  });

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

  const toggleWeather = () => {
    // 새로운 시간 값을 결정
    let newTime;
    if (weather.time === 'Morning') {
      newTime = 'Afternoon'; // Morning에서 Afternoon으로 변경
    } else {
      newTime = 'Morning'; // Afternoon에서 Morning으로 변경
    }

    // 새로운 상태 객체 생성
    const newWeather = {
      time: newTime, // 변경된 시간
      info: weatherData[newTime].info, // 새로운 시간에 맞는 정보
      image: weatherData[newTime].image, // 새로운 시간에 맞는 이미지
    };

    // Handler to switch between morning and afternoon weather
    /*
    const toggleWeather = () => {
        setWeather((prevWeather) => {
            const newTime = prevWeather.time === 'Morning' ? 'Afternoon' : 'Morning';
            return {
                time: newTime,
                info: weatherData[newTime].info,
                image: weatherData[newTime].image,
            };
        });
    };
    */
    // 상태 업데이트
    setWeather(newWeather);
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
      <button onClick={toggleWeather}>{weather.time}</button>
    </div>
  );
}

export default App5;
