/*
const test = (f) => {
  const i = 10;
  console.log(f(i));
};

const test1 = (x) => {
  console.log(x);
};

test(test1);
*/

const test = new Promise((r) => r(10));