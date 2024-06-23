import { useRef } from 'react';
import { useLockedBody } from './hooks/useLockedBody';

const UseLockedBody = () => {
  const ref = useRef();
  // call the hook which returns, current value and the toggler function
  const [locked, setLocked] = useLockedBody(ref);
  return (
    <div style={{ height: '200vh' }} id="abc" ref={ref}>
      <button onClick={() => setLocked(!locked)}>
        {locked ? 'unlock scroll' : 'lock scroll'}
      </button>
    </div>
  );
};

export default UseLockedBody;
