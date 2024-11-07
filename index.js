debugger;
let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
debugger;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] ** 3;
  }
debugger;
console.log(sum); // 1158411

// Через цикл for of
debugger;
sum = 0;
debugger
for (let num of numbers){
    num = num ** 3;
    sum += num;
} 
debugger
console.log(sum); // 1158411