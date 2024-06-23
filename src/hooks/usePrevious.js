import { useEffect, useRef } from "react";

export const usePrevious = (newValue) => {
    const previousValue = useRef();

    useEffect(()=>{
        previousValue.current = newValue;
    },[newValue]);

    return previousValue.current;
}