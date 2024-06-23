// Sum of a given length currying
function sum(...args) {
  let storage = [...args];

  if (storage.length === 4) {
    return storage.reduce((acc, val) => acc + val, 0);
  } else {
    return function temp(...args2) {
      storage.push(...args2);
      if (storage.length === 4) {
        return storage.reduce((acc, val) => acc + val, 0);
      } else return temp;
    };
  }
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1)(2)(3)(4));
console.log(sum(1)(2, 3)(4));

//
//
//

// Sum with last empty args currying
function sumWithEmptyArg(...args) {
  let storage = [...args];

  if (args.length === 0) {
    return 0;
  } else {
    return function temp(...args2) {
      storage.push(...args2);
      if (args2.length === 0) {
        return storage.reduce((acc, val) => acc + val, 0);
      } else return temp;
    };
  }
}

console.log(sumWithEmptyArg(1, 2, 3, 4)(5)());
console.log(sumWithEmptyArg(1)(2)(3)(4)());
console.log(sumWithEmptyArg(1)(2, 3)(4)());

//
//
//

// remembers previous value and returns the sum
function sum_of_number() {
  let sum = 0;

  return function (val = 0) {
    sum = val + sum;
    return sum;
  };
}

const sum_number = sum_of_number();

console.log(sum_number(5));
console.log(sum_number(8));
console.log(sum_number(7));
console.log(sum_number(6));
console.log(sum_number(0));

// breaking array into chunks

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 4;

function changeToChunk(input, chunkSize) {
  const newArray = [];
  let newValue = [];

  for (var i = 0; i < input.length; i++) {
    if (newValue.length < chunkSize) {
      newValue.push(input[i]);
    } else if (newValue.length === chunkSize) {
      newArray.push(newValue);
      newValue = [input[i]];
    }
  }

  if (newValue.length > 0) {
    newArray.push(newValue);
  }

  return newArray;
}

console.log(changeToChunk(input, chunkSize));

function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    fulfilled = false,
    rejected = false,
    called = false,
    value;

  function resolve(v) {
    fulfilled = true;
    value = v;

    if (typeof onResolve === 'function') {
      // for async
      console.log('inside resolve');
      onResolve(value);
      called = true;
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

    if (typeof onReject === 'function') {
      onReject(value);
      called = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (fulfilled && !called) {
      // for sync
      console.log('inside then');
      called = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const promise1 = new PromisePolyFill((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(2);
  }, 1000);
  console.log(3);
});

promise1.then(res => {
  console.log(res);
});

const examplePromise = new PromisePolyFill((resolve, reject) => {
  resolve(2);
});

examplePromise.then(res => console.log(res)).catch(err => console.error(err));

PromisePolyFill.resolve = val =>
  new PromisePolyFill(function executor(resolve, reject) {
    resolve(val);
  });

PromisePolyFill.reject = val =>
  new PromisePolyFill(function executor(resolve, reject) {
    reject(val);
  });

const pipe = obj => {
  return function (...args) {
    for (let key in obj) {
      console.log(obj);
      if (typeof obj[key] === 'function') {
        let value = obj[key];
        obj[key] = value(...args);
      } else {
        obj[key] = pipe(obj[key])(...args);
      }
    }
    return obj;
  };
};

let test = {
  a: {
    b: (a, b, c) => a + b + c
  },
  e: 1,
  f: true
};

console.log(pipe(test)(1, 1, 1));
