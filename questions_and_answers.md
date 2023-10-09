1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer : A 
Explanation: Here greeting is an object which is an empty object. when consoling we see in the console tab an empty object)


2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}
sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer : C 
Explanation: Here create a function name sum and props is a and b return in function pass the value as one is number and 1 is string. Number and string adding we see "12"

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: B
Explanation: here we see a variable where 4 food and add another food and last we see 5 fruits.

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer : B 
Explanation: Here call a function name sayHi and props is name and function return with an template string and console call the function.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer : C 
Explanation: Where create count variable which is 0. and declare an array with four index which is 0, 1, 2, 3. now nums arary foreach method num is pass an array function and if statement where count = count + 1;