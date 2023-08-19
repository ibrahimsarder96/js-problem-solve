// 1. Write a function that can print any random number between any two given numbers (including them).
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNumber(1, 10));

// 2. How can you order roll numbers of students in your class sequentially
const students = ["Ibrahim", "John", "Shamim", "Prantik", "Allby"];
let res = students.sort();
console.log(res);