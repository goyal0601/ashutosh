import { useRef } from 'react';

import { useOnScreen } from './hooks/useOnScreen';

function Element({ number }) {
  const viewRef = useRef();

  const observer = useOnScreen(viewRef);

  if (observer) console.log('observer', number);

  return (
    <div ref={viewRef}>
      {observer ? `I am on screen` : `I am invisible`}
      {number}
    </div>
  );
}

const UseOnScreenHook = () => {
  const arr = [];
  for (let i = 0; i < 60; i++) {
    arr.push(<Element key={i} number={i} />);
  }

  return arr;
};

export default UseOnScreenHook;
