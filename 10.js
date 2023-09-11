/*
const arr = [1, 2, 3];
console.log(arr.length);


console.log(Array.from('wali'));



const arr = [1, 2, 3];

console.log(arr instanceof Array);


const isGreater = (x) => x > 20;

const arr = [12, 34, 23, 10, 15];

const result = arr.map(isGreater);

console.log(result);


const arr = [1, 2, 3, 4];

const initialValue = 0;

const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue * currentValue,
  initialValue
);

console.log(sumWithInitial);


const arr1 = [23, 43, 256, 23, 56];

let index = 2

console.log(arr1.at(index));

index = -2;

console.log(arr1.at(index));


const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

const arr3 = arr1.concat(arr2);

console.log(arr3);


const arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.copyWithin(0, 3, 4));


const arr = ['a', 'b', 'c'];

const iterator1 = arr.entries();

console.log(iterator1.next().value);
console.log(iterator1.next().value);


const isBelow40 = (curr) => curr < 40;

const arr = [23, 24, 52, 16];

console.log(arr.every(isBelow40));


const arr = [1, 2, 3, 4];

console.log(arr.fill(0, 1, 3));


const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const result = words.filter((word) => word.length > 6);

console.log(result);


const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);


const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);



const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat(Infinity));


const arr1 = [1, 2, 3];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);


const array1 = ['a', 'b', 'c'];

array1.forEach((el) => console.log(el));


console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (x) => x + x));


const array1 = [1, 2, 3];

console.log(array1.includes(3));


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('camel'));
console.log(beasts.indexOf('wali'));


console.log(Array.isArray([1, 2]));
console.log(Array.isArray('wali'));


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join(' '));
console.log(elements.join('-'));


const array1 = ['a', 'b', 'c'];

const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}


const array1 = [1, 4, 9, 16];

const map1 = array1.map((el) => el * 2);

console.log(map1);

console.log(Array.of(1, 'fo', true, null));


const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
console.log(plants);


const animals = ['duck', 'goats', 'sheep'];

console.log(animals.push('chicken'));
console.log(animals);


const array1 = [1, 2, 3, 4];

const initialValue = 0;

const sum = array1.reduce((acc, curr) => acc + curr, initialValue);

console.log(sum);


const array1 = ['one', 'two', 'three'];

console.log(array1.reverse());


const array1 = ['car', 'bike', 'cycle'];

console.log(array1.shift());
console.log(array1);


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2, 4));
console.log(animals.slice(2));


const arr = [1, 2, 3, 4, 5];

console.log(arr.some((el) => el % 2 === 0));



const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();

console.log(months);


const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');

console.log(months);

months.splice(4, 1, 'May');

console.log(months);



console.log([1, 3].toLocaleString());


const months = ['Mar', 'Jan', 'Feb', 'Dec'];
const sortedMonths = months.toSorted();
console.log(sortedMonths); 


const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());


const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
console.log(array1);


const array1 = ['a', 'b', 'c'];

const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}
*/

const arr = [1, 2, 3, 4, 5];

console.log(arr.with(2, 6));
console.log(arr);