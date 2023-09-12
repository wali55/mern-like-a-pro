console.log('async file loaded');

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const sleepWithSetTimeout = (num, callback) => {
  const start = Date.now();
  console.log('start: ', new Date().toTimeString());
  setTimeout(() => {
    callback(new Date(start).toTimeString(), num);
  }, num * 1000);
};

const setTimeoutCallbackFunction = (start, number) => {
  const numIsPrime = isPrime(number);
  console.log(
    'isPrime: ',
    number,
    ' result: ',
    numIsPrime,
    ' start ',
    start,
    ' end ',
    new Date().toTimeString()
  );
};

const syncWithSetTimeout = () => {
  for (let index = 0; index < 10; index++) {
    console.log('looping:\t', index, '\t', new Date().toTimeString());
    sleepWithSetTimeout(index, setTimeoutCallbackFunction);
  }
  console.log('syncWithSetTimeout done');
};

syncWithSetTimeout();

console.log('done');
