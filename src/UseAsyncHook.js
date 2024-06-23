import { useEffect } from 'react';
import { useAsync } from './hooks/useAsync';

const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5 ? resolve('Success') : reject('Error');
    }, 1000);
  });
};

function UseAsyncHook() {
  const [value, status, error, refetch] = useAsync(asyncFunction, false);

  useEffect(()=> {
    document.addEventListener('keypress', refetch);
    return () => {
        document.removeEventListener('keypress', refetch);
    }
  });

  return (
    <div>
      <div>status : {status}</div>
      <div>error: {error}</div>
      <div>value: {value}</div>
    </div>
  );
}

export default UseAsyncHook;
