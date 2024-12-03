// 배열
// 배열요소에 접근해야 값을 얻을 수 있다.

let food = ['초밥', '짜장면', '짬뽕'];

console.log(food[0]);
console.log(food[1]);
console.log(food[2]);

for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

// 콜백함수, 익명함수, function(){} 화살표 함수 () => {}
food.forEach(function (item) {
  console.log(item);
});

food.forEach((item) => {
  console.log(item);
});

food.forEach((item) => console.log(item));
