import { Button } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const timeRef = useRef(null);

  console.log(timeRef);

  const incrementCounter = () => {
    clearInterval(timeRef.current);
    timeRef.current = setInterval(() => {
      setCounter(prevCount => prevCount + 1);
    }, 1000);
  };

  const decrementCounter = () => {
    clearInterval(timeRef.current);
    timeRef.current = setInterval(() => {
      setCounter(prevCount => prevCount - 1);
    }, 1000);
  };

  const stopCounter = () => {
    clearInterval(timeRef.current);
  };

  return (
    <div>
      <div>{counter}</div>
      <Button onClick={incrementCounter}>Increment</Button>
      <Button onClick={decrementCounter}>Decrement</Button>
      <Button onClick={stopCounter}>Stop</Button>
    </div>
  );
};

export default Counter;
