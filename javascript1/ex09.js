const snack = {
  name: '새우깡',
  price: 1500,
};
//객체의 속성 출력
console.log(snack.name);
console.log(snack['price']);

//객체를 구조분해 할당 사용하기
let { name, price } = snack;
console.log(name);
console.log(price);

let { name: n, price: p } = snack;
console.log(n);
console.log(p);
