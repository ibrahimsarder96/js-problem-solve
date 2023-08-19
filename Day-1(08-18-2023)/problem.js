// 1. Write a function that can print any random number between any two given numbers (including them).
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNumber(1, 10));

// 2. How can you order roll numbers of students in your class sequentially
const rooNumber = [20, 22, 1, 4, 6, 8, 2, 7];
console.log(rooNumber.sort(function(a,b){
  return a - b;
}))

// 3. How can you order names of students in your class sequentially?
const students = ["Ibrahim", "John", "Shamim", "Prantik", "Allby"];
let res = students.sort();
console.log(res);

// 4. Write a function that can tell us whether an year is a leap year or not.

function inLeapYear(year){
  if((year % 400 === 0) || ((year % 100 === 0) && (year % 4 !== 0))){
    console.log(`${year} is a Leap Year`);
  }
  else{
    console.log(`${year} is not a Leap Year`);
  }
}
inLeapYear(2028);

// 5. How would you determine the number of vowels in a sentence?

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence){
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function(value){
    if(vowels.includes(value)){
      count++;
    }
  });
  return count;
}
console.log(countVowels('I love Programming. I am a Software Engineer my Future plan'));