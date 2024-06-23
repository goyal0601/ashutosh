import { useState } from "react";
import { usePrevious } from "./hooks/usePrevious";


function UsePreviousHook() {

const [value, setValue] = useState(1);

const previousValue = usePrevious(value);

  return (
    <div>
    <div>previous value: {previousValue}</div>
    <div>Current Value: {value}</div>
      <button onClick={()=> setValue(prev=> prev+1)}>Click</button>
    </div>
  );
}

export default UsePreviousHook;
