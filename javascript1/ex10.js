//map 매열 매서드
// 배열의 내용을 변화시킨 새로운 배열을 반환함

let students = ['kim', 'lee', 'park', 'woo'];

// let student = ["<div>kim</div>, <div>lee</div>, <div>park</div>, <div>woo</div>"];

//콜백함수
//students.map(() => {});
//student.map(function(){});
let newStudents = students.map((item) => {
  return '<div>' + item + '</div>';
});

console.log(students);
console.log(newStudents);
