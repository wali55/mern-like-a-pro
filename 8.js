/*
function function1() {
    console.log(Date.now());
}

function1();


const now = function() {
    console.log(Date.now());
}

now();


const arrowFunction = () => {
  console.log('test');
};

arrowFunction();


const calculation = (num, fn) => {
  let result = 0;

  for (let i = 0; i < num; i++) {
    const temp = fn(i);
    result += temp;
  }

  return result;
};

const sum = calculation(10, (x) => x + x);
console.log(sum);


const square = (x) => x * x;
console.log(square(10));


const square = (x) => {
    const fn = function() {
        return x * x;
    }
    return fn;
}

console.log(square(10)());


console.log((function evaluateMe()  {
    console.log('this is test');
    return 'hello';
})());


function outer(x) {
    function inner(y) {
        return x + y;
    }
    return inner;
}

console.log(outer(10)(20));



var n = 10;

function change() {
  var n = 20;
}

console.log(n);


var M = { x: 10 }

function change() {
    M.x = 20;
}

change();

console.log(M);


function inputTypes1(obj) {
    console.log(obj)
}

inputTypes1({ name: 'MERN' });


function inputTypes2({ name }) {
  console.log(name);
}

inputTypes2({ name: 'MERN' });
*/

function inputTypes3() {
    console.log(arguments, arguments[0], arguments[1]);
}

inputTypes3(1, 2, 3, 4, 5, 6);