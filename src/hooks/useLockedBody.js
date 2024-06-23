import { useEffect, useLayoutEffect, useState } from 'react';

export const useLockedBody = (ref, initiallyLocked = false) => {
  const [locked, setLocked] = useState(initiallyLocked);
  // handle side effects before render
  useLayoutEffect(() => {
    if (!locked) {
      return;
    }
    // save original body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    // lock body scroll
    document.body.style.overflow = 'hidden';

    // get the scrollBar width
    const root = ref.current; // or root
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;
    // prevent width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    // clean up
    return () => {
      document.body.style.overflow = originalOverflow;
      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);
  // update state when dependency changes
  useEffect(() => {
    if (locked !== initiallyLocked) {
      setLocked(initiallyLocked);
    }
  }, [initiallyLocked]);
  return [locked, setLocked];
};
