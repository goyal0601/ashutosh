// Execute promise in series

const asyncTask = i =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(i);
    }, 100 - i * 30)
  );

const promises = [asyncTask(1), asyncTask(2), asyncTask(3)];

const executeAsyncInSeries = promises => {
  const promise = promises.shift();

  promise.then(data => {
    console.log(data);
    if (promises.length > 0) executeAsyncInSeries(promises);
  });
};

executeAsyncInSeries(promises);

//
//
//

// Execute promise in parallel

const executeAsyncInParallel = (promises, cb) => {
  let promisesLeft = promises.length;
  let result = [];
  promises.forEach(promise => {
    promise.then(data => {
      result.push(data);
      promisesLeft = promisesLeft - 1;
      if (promisesLeft === 0) {
        cb(result);
      }
    });
  });
};

executeAsyncInParallel(promises, result => {
  console.log(result);
});

//
//
//
//

const wait = delay =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );

const retryPromises = (
  asyncFn,
  retries = 3,
  delay = 50,
  finalError = 'Failed Everytime'
) =>
  new Promise((resolve, reject) => {
    if (retries === 0) {
      return reject(finalError);
    }
    asyncFn()
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        wait(delay).then(() => {
          retryPromises(asyncFn, retries - 1, delay, finalError);
        });
      });
  });

// Promise in batch

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

function split(arr, limit) {
  let result = [];
  const splitToArray = arrayN => {
    if (arrayN.length === 0) {
      return result;
    } else {
      const newArray = arrayN.splice(0, limit);
      result.push(newArray);
      splitToArray(arrayN);
    }
  };
  splitToArray(arr);
  return result;
}

// split(arr1, 3);

const promiseInParallel = (promises, cb) =>
  new Promise((resolve, reject) => {
    let result = [];
    for (let promise of promises) {
      cb(promise, (status1, number) => {
        result.push(number);

        if (result.length === promises.length) {
          resolve(result);
        }
      });
    }
  });

const promiseInSeries = (promises, cb, result = []) =>
  new Promise((resolve, reject) => {
    if (promises.length === 0) resolve(result);
    const promise = promises.shift();
    const promiseData = promiseInParallel(promise, cb);
    promiseData.then(data => {
      result.push(data);
      promiseInSeries(promises, cb, result).then(resolve).catch(reject);
    });
  });

const mapLimit = (array, limit, cb) =>
  new Promise((resolve, reject) => {
    const splittedArray = split(array, limit);
    let results = promiseInSeries(splittedArray, cb);

    resolve(results);
  });

let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
  // i am async iteratee function
  // do async operations here
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    callback(null, num);
  }, 1000);
});
numPromise
  .then(result => console.log('success:' + result))
  .catch(() => console.log('no success'));

//
//
//

// Async promise in series

const mapLimitAsync = (array, cb, result = []) =>
  new Promise((resolve, reject) => {
    if (array.length === 0) return resolve(result);
    const promise = array.shift();
    cb(promise, (status1, number) => {
      result.push(number);
      mapLimitAsync(array, cb, result).then(resolve).catch(reject);
    });
  });

let numPromiseAsync = mapLimitAsync([1, 2, 3, 4, 5], function (num, callback) {
  // i am async iteratee function
  // do async operations here
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    callback(null, num);
  }, 1000);
});
numPromiseAsync
  .then(result => console.log('success:' + result))
  .catch(() => console.log('no success'));

//
//
//
//

// Filter Async

const filter = (promises, cb) =>
  new Promise((resolve, reject) => {
    let result = new Array(promises.length).fill(null);
    let executed = 0;
    promises.forEach((promise, index) => {
      cb(promise, (status, num) => {
        if (!status && num) {
          console.log(promise);
          result[index] = promise;
        }
        executed++;
        if (status) {
          reject();
        }
        if (executed === promises.length) {
          return resolve(result.filter(a => a));
        }
      });
    });
  });

let numPromiseAsyncFilter = filter([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(function () {
    if (num > 7) {
      callback(true);
    } else {
      callback(null, num !== 4);
    }
  }, 2000 - 20 * num);
});
numPromiseAsyncFilter
  .then(result => console.log('success:' + result))
  .catch(() => console.log('no success'));

// promise in priority

const promisesWithP = [
  { status: 'resolve', priority: 4 },
  { status: 'reject', priority: 1 },
  { status: 'resolve', priority: 2 },
  { status: 'reject', priority: 3 }
];

const resolveWithPriority = promises => new Promise((resolve, reject) => {});

resolveWithPriority(promisesWithP.sort((a, b) => a.priority - b.priority));
