import { useCopy } from './hooks/useCopy';

function UseCopyHook() {
  const [copiedText, copy] = useCopy();
  return (
    <button onClick={() => copy('Hello World!')}>
      {' '}
      "copiedText" :{copiedText}
    </button>
  );
}
export default UseCopyHook;
