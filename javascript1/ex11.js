const acornStudent = ['이상민', '소병학', '송병화', '송수빈'];
let newArry = [];
for (let i = 0; i < acornStudent.length; i++) {
  let item = acornStudent[i];
  let newItem = '<div>' + item + '</div>';
  newArry.push(newItem); // newArry[i] = newItem;
}
console.log(acornStudent);
console.log(newArry);

let newArry2 = acornStudent.map(function (item) {
  return '<li>' + item + '</li>';
});
console.log(newArry2);
