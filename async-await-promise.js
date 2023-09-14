/*
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(new Date().toLocaleTimeString());
    } catch (error) {
      reject(error);
    }
  }, 5000);
});

console.log(p, new Date().toLocaleTimeString());

const myThen = (result) => console.log('myThen', result);

p.then(myThen);

console.log('result', p, new Date().toLocaleTimeString());
*/

const sleepWithPromise = (num) => {
  const p = new Promise((resolve) => {
    const start = Date.now();
    setTimeout(() => {
      resolve(new Date(start));
    }, num);
  });
  return p;
};

sleepWithPromise();