import { useEffect, useState } from 'react';

export const useHasFocus = () => {
  const [focus, setFocus] = useState(document.hasFocus());
  useEffect(() => {
    const onFocus = () => setFocus(true);
    const onBlur = () => setFocus(false);

    window.addEventListener('focus', onFocus, false);
    window.addEventListener('blur', onBlur, false);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  return focus;
};

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
