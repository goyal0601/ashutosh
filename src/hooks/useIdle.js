import { useEffect, useRef, useState } from "react";

export const useIdle = (delay) => {
    const [isIdle, setIsIdle] = useState(false);
    const time = useRef();

    useEffect(()=> {
        setTime();
        return () => {
            cleanup();
        }
    })

    const resetTimer = () => {
        clearTimeout(time.current);
        goActive();
    }

    const startTimer = () => {
        time.current = setTimeout(()=> {
            setIsIdle(true);
        },[delay]);
    }

    const goActive = () => {
        setIsIdle(false);
        startTimer();
    }

    const setTime = () => {
        document.addEventListener("mousemove", resetTimer);
        document.addEventListener("mousedown", resetTimer);
        document.addEventListener("keypress", resetTimer);
        document.addEventListener("DOMMouseScroll", resetTimer);
        document.addEventListener("mousewheel", resetTimer);
        document.addEventListener("touchmove", resetTimer);
        document.addEventListener("MSPointerMove", resetTimer);
        //edge case
        //if tab is changed or is out of focus
        window.addEventListener("blur", startTimer);
        window.addEventListener("focus", resetTimer);
    }

    const cleanup = () => {
        document.removeEventListener("mousemove", resetTimer);
        document.removeEventListener("mousedown", resetTimer);
        document.removeEventListener("keypress", resetTimer);
        document.removeEventListener("DOMMouseScroll", resetTimer);
        document.removeEventListener("mousewheel", resetTimer);
        document.removeEventListener("touchmove", resetTimer);
        document.removeEventListener("MSPointerMove", resetTimer);
        //edge case
        //if tab is changed or is out of focus
        window.removeEventListener("blur", startTimer);
        window.removeEventListener("focus", resetTimer);

        // memory leakage
        clearTimeout(time.current);
    }


    return isIdle;

}