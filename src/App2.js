import { useState } from 'react';
import './App.css';
import UseAsyncHook from './UseAsyncHook';
import UseDebounceNew from './UseDebounceNew';
import UseIdleHook from './UseIdleHook';
import UsePreviousHook from './UsePreviousHook';
import MatchineCoding from './matchineCoding/MatchineCoding';

function App() {
  const [showTab, setShowTab] = useState('matchine');

  return (
    <div>
      {showTab === 'hooks' && (
        <>
          Use Previous hook
          <UsePreviousHook />
          Use Idle Hook
          <UseIdleHook />
          Use Async
          <UseAsyncHook />
          Use debounce
          <UseDebounceNew />
        </>
      )}
      {showTab === 'matchine' && <MatchineCoding />}
    </div>
  );
}

export default App;
