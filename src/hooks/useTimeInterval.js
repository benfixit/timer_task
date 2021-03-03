import { useEffect, useRef } from 'react';

function useTimeInterval(callback, delay = 1000){
    const preservedCallback = useRef();

    useEffect(() => {
        preservedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function timerFxn() {
            preservedCallback.current();
        }

        let intervalId = setInterval(timerFxn, delay);

        return () => clearInterval(intervalId)
    }, [delay])
}

export default useTimeInterval;