console.log('first');

const strInput = prompt('input the number as an array');

const strNumbers = strInput.split(',');

const numbers = strNumbers.map((number) => parseInt(number));

/*
let sum = 0;

for (let number of numbers) {
    sum += number;
}
*/

let initialValue = 0;

const sum = numbers.reduce((prev, curr) => prev = prev + curr, initialValue);

console.log(sum);