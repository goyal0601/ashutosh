import { useState } from 'react';
import './App.css';
import UseAsyncHook from './UseAsyncHook';
import UseDebounceNew from './UseDebounceNew';
import UseIdleHook from './UseIdleHook';
import UsePreviousHook from './UsePreviousHook';
import MatchineCoding from './matchineCoding/MatchineCoding';
import UseResizeHook from './UseResizeHook';
import UseOnScreenHook from './UseOnScreenHook';
import UseOnClickOutsideHook from './UseOnClickOutsideHook';
import UseCopyHook from './UseCopyHook';
import UseLockedBody from './UseLockedBody';

function App() {
  const [showTab, setShowTab] = useState('hooks');

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
          Use resize
          <UseResizeHook />
          {/* Use Onscreen Hook
          <UseOnScreenHook /> */}
          Use OnCLick Outside Hook
          <UseOnClickOutsideHook />
          Use copy hook
          <UseCopyHook />
          Use locked body
          <UseLockedBody />
        </>
      )}
      {showTab === 'matchine' && <MatchineCoding />}
    </div>
  );
}

export default App;
