/*
function successCallback(result) {
    console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
    console.log(`Error generating audio file: ${error}`);
}

// createAudioFileAsync(audioSettings, successCallback, failureCallback);

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);


const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);


const p = doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);


const p = doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);


const listOfIngredients = [];

doSomething()
  .then((url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      })
  )
  .then(() => {
    console.log(listOfIngredients);
  });


const listOfIngredients = [];

doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });


doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {})
  ) // ignore if optional stuff fails, and proceed
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical Failure: ${error.message}`));


const doSomething = new Promise((resolve, reject) => {
  console.log('initial');

  resolve();
})
  .then(() => {
    throw new Error('something failed');

    console.log('do this');
  })
  .catch(() => {
    console.error('do that');
  })
  .then(() => {
    console.log('do this no matter what happened before');
  });


async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}


process.on('unhandledRejection', (reason, promise) => {
  // add code here to examine reason and promise values
});


Promise.all([func1(), func2(), func3()]).then(([result1(), result2(), result3()]) => {
    // use result1, result2 and result3
});


new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    })
  );
});
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handledFulfilledA, handledRejectedA)
  .then(handledFulfilledB, handledRejectedB)
  .then(handledFulfilledC, handledRejectedC);
