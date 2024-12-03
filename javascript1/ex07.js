// 양치질 하기 함수

// 함수
//이름이 붙은 명령들의 모음(관련있는 코드 모아두기)
// 코드의 재사용성(중복코드 제거), 코드 분할

//매개변수, 반환값 (들어오는거, 나가는거)

function 양치질하기() {
  console.log('지약을 짠다');
  console.log('칫솔질을 한다');
  console.log('헹군다');
}

// 어떤 수까지의 합계
function printTentotal() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + i;
  }
  console.log(sum);
}

// 수입력 , 수까지 합 반환
function getTotal(su) {
  let sum = 0;
  for (let i = 1; i <= su; i++) {
    sum += i;
  }

  return sum;
}

양치질하기();
printTentotal();
let result = getTotal(10);
console.log(result);
