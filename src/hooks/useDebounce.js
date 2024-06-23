import {  useRef } from 'react';

export const useDebounce = (cb, delay) => {
    const time = useRef();


    const debounce = function () {
        
        if(time.current) {
            clearTimeout(time.current);
        }
        time.current = setTimeout(()=> {
            cb(...arguments);
        }, delay);
    }


    return debounce;
  };
