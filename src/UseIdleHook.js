import { useIdle } from './hooks/useIdle';

function UseIdleHook() {
  const isIdle = useIdle(4000);
  return <div className="App">User is {isIdle ? 'Idle' : 'Not Idle'}</div>;
}

export default UseIdleHook;
