import { useState } from 'react';


export default function RepetitionExercise({ name, isVisible }) {


    // visibility state
    if (isVisible) {
        // counter state
        const [counter, setCounter] = useState(0);

        const addRep = () => {
            setCounter(counter + 1);
        }

        const resetReps = () => {
            setCounter(0);
        }

        return (
            <>
                <h3>{name}</h3>
                <h1>{counter}</h1>
                <button onClick={addRep}>Add Rep</button>
                <button onClick={resetReps}>Reset</button>
            </>

        );
    }


}