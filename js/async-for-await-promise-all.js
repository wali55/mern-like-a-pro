const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const sleepWithPromise = (num) => {
  const p = new Promise((resolve) => {
    const start = Date.now();
    setTimeout(() => {
      resolve(new Date(start).toLocaleTimeString());
    }, num);
  });
  return p;
};

const syncWithPromise = async () => {
  const promises = [];
  //for (let index = 0; index < 5; index++) {
  for await (const index of [...new Array(5)].keys()) {
    console.log('sleeping: ', index, new Date().toLocaleTimeString());

    const startPromise = sleepWithPromise(index * 1000);

    const promise2 = startPromise.then((start) => {
      const numIsPrime = isPrime(index);
      console.log(
        'prime: ',
        index,
        numIsPrime,
        start,
        new Date().toLocaleTimeString()
      );

      console.log('index executed', index, new Date().toLocaleTimeString());
      return { start, index, numIsPrime, now: new Date().toLocaleTimeString() };
    });
    promises.push(promise2);
  }
  const result = await Promise.all(promises);
  console.log('looping done', result);
};

(async () => {
  await syncWithPromise();
})().then(() => console.log('done'));

console.log('last line');
