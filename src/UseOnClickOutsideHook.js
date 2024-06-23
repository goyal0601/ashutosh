import { useRef } from 'react';
import { useOnClickOutside } from './hooks/useOnClickOutside';

function UseOnClickOutsideHook() {
  const clickRef = useRef();

  const onClickOutside = () => {
    console.log('clickedOutside');
  };

  useOnClickOutside(clickRef, onClickOutside);
  return (
    <div ref={clickRef} style={{ height: '100px', width: '400px' }}>
      <div>User is clicking outside</div>
    </div>
  );
}

export default UseOnClickOutsideHook;
