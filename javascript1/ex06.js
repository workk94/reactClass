// 함수

// 작성법  : 함수 선언식
function a() {
  console.log('function a');

  console.log('1. 수행한다');
  console.log('2. 수행한다');
  console.log('3. 수행한다');
  console.log('4. 수행한다');
  console.log('5. 수행한다');
}

// 함수 호출
a();

// 작성법 : 함수표현식
const b = function () {
  console.log('function b');
  console.log('1. 수행한다');
  console.log('2. 수행한다');
  console.log('3. 수행한다');
  console.log('4. 수행한다');
  console.log('5. 수행한다');
};

b();

// 함수 선언식, 함수 표현식 차이 !!!
// 함수 선언식은 작성된 위치에 상관없이 가장 먼저 해석된다( 호이스팅) , 실제 코드가 맨 위로 올라가는 것이 아니라 먼저 해석된다는 의미

// 함수 표현식은 작성도니 위치 다음에 호출해야 한다(호이스팅 되지 않음)
