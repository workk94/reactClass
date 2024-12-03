//반복문 - while문

let energy = 100;

while (energy > 0) {
  console.log('하고 싶은 파트부터 공부한다');
  console.log('쉬운거부터 시작하면서 늘려간다');
  console.log('큰 것은 작은 조각으로 나눠서 생각해본다');

  let value = Math.floor(Math.random() * 20); // 0 ~ 19
  energy = energy - value; // energy -= value;
}

console.log('에너지 소진 완료');
