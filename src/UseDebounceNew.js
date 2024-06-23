import { useDebounce } from './hooks/useDebounce';
import { useDebounceImmediate } from './hooks/useDebounceImmediate';

function UseDebounceNew() {
  const getRandomNumber = name => {
    console.log(name);
  };

  const randomNumber = useDebounce(getRandomNumber, 3000);

  const getRandomName = () => {
    randomNumber('click1');
  }

  const randomImmFalse = useDebounceImmediate(getRandomNumber, 3000, false);
  const randomImmTrue = useDebounceImmediate(getRandomNumber, 3000, true);


  return <div>
    <button onClick={()=> getRandomName()}>click</button>
    <button onClick={()=> randomImmTrue('true')}>imm true</button>
    <button onClick={()=> randomImmFalse('false')}>imm false</button>
   </div>;
}

export default UseDebounceNew;
