import { useCallback, useRef } from 'react';

export const useThrottle = (
  fn,
  wait,
  option = { leading: true, trailing: true }
) => {
  const timerId = useRef();
  const lastArgs = useRef();

  const throttle = useCallback(
    function (...args) {
      const { trailing, leading } = option;

      const waitFunc = () => {
        if (trailing && lastArgs.current) {
          fn.apply(this, lastArgs.current);
          lastArgs.current = null;
          timerId.current = setTimeout(waitFunc, wait);
        } else {
          timerId.current = null;
        }
      };

      if (!timerId.current && leading) {
        fn.apply(this, args);
      } else {
        lastArgs.current = args;
      }

      if (!timerId.current) {
        timerId.current = setTimeout(waitFunc, wait);
      }
    },
    [fn, wait, option]
  );
  return throttle;
};
