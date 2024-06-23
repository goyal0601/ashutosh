import {  useCallback, useRef } from 'react';

export const useDebounceImmediate = (cb, delay, immediate = true) => {
    const time = useRef();


    const debounce = useCallback(function () {
        let args = arguments;

        let callNow = immediate && !time.current;

        
        clearTimeout(time.current);

        if(!immediate) {
            time.current = setTimeout(()=> {
                time.current = null;
                cb.call(this,...args);
            }, delay);
        }

        if(callNow) {
            cb.call(this,...args);
        }

    }, [immediate, delay, cb])


    return debounce;
  };
