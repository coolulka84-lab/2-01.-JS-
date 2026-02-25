let a = 5;
let b = 10;
console.log(a * b);

let c = 15;
let d = 3;
console.log(c / d);

let e = 4;
let f = 7;
sum = e + f;
console.log(sum);

let number = 11;
console.log(number);

let itsTrue = number > 10;
console.log(itsTrue);

let text = "Java Script";
console.log(text);

let stringNumber = "100";
console.log(stringNumber);

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

const a1 = prompt("Введіть число");
const result = Number(a1);
let square = result ** 2;
console.log("Result:", square);

const b1 = prompt("Введіть перше число");
const num1 = Number(b1);
const b2 = prompt("Введіть друге число");
const num2 = Number(b2);
const resultB = (num1 + num2) / 2;
console.log("Середнє арифметичне: ", resultB);

let minute = prompt("Введіть кількість хвилин");
let seconds = Number(minute) * 60;
console.log("Кількість секунд: ", seconds);

let greeting = "Hello, ";
let userName;
userName = prompt("What is your name?");
let message = greeting + userName + "!";
document.writeln("<p>" + message + "</p>");
console.log(message);
