import { useState } from 'react';

export default function YogaExercise({ name, isVisible }) {
    const yogaPoses = ["Downward Dog", "Child's Pose", "Mountain Pose", "Cat-Cow", "Warrior I", "Warrior II"]
    const [randomPose, setRandomPose] = useState(yogaPoses[1])

    const makeRandomPose = () => {
        let newNum = Math.floor((Math.random() * (yogaPoses.length)))
        setRandomPose(yogaPoses[newNum])
        console.log(newNum)
        return newNum
    }

    if (isVisible) {
        return (
            <>
                <h3>{name}</h3>
                <h1>{randomPose}</h1>
                <button onClick={makeRandomPose}>Change Pose</button>
            </>

        );
    }

}
