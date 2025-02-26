// video referenced: https://www.youtube.com/watch?v=jPo0mIcNZfM

import { useState, useEffect, useRef } from 'react';


export default function DurationExercise({ name, isVisible }) {
    const [timerOn, setTimerOn] = useState(false);
    const [passedTime, setPassedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (timerOn) {
            intervalIDRef.current = setInterval(() => {
                setPassedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIDRef.current);
        }
    })

    function startTimer() {
        setTimerOn(true);
        startTimeRef.current = Date.now() - passedTime;
    }

    function restartTimer() {
        setPassedTime(0);
        setTimerOn(false);
    }

    function formatTime() {
        // let hours = Math.floor(passedTime / (1000 * 60 * 60));
        let minutes = Math.floor(passedTime / (1000 * 60) % 60);
        let seconds = Math.floor(passedTime / (1000) % 60);
        let milliseconds = Math.floor((passedTime % 1000) / 10);

        // hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    if (isVisible) {
        return (
            <>
                <h3>{name}</h3>
                <h1>{formatTime()}</h1>
                <button onClick={startTimer}>Start</button>
                <button onClick={restartTimer}>Restart</button>
            </>

        );
    }

}