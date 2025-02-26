import { useState } from 'react'
import './App.css'
// import HomeScreen from './components/HomeScreen'
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import YogaExercise from './components/YogaExercise';


function App() {

  // const [seeHome, setSeeHome] = useState(true);
  const [seePushups, setSeePushups] = useState(false);
  const [seeRunning, setSeeRunning] = useState(false);
  const [seeYoga, setSeeYoga] = useState(false);

  const togglePushups = () => {
    setSeePushups(true)
    setSeeRunning(false)
    setSeeYoga(false)
  }

  const toggleRunning = () => {
    setSeeRunning(true)
    setSeePushups(false)
    setSeeYoga(false)
  }

  const toggleYoga = () => {
    setSeeYoga(true)
    setSeeRunning(false)
    setSeePushups(false)
  }

  return (
    <>
      {/* <HomeScreen isVisible={seeHome} /> */}
      <h1>Get Moving!</h1>
      <p>Choose an exercise: </p>

      {/* buttons */}
      <button onClick={togglePushups}>
        Pushups
      </button>

      <button onClick={toggleRunning}>
        Running
      </button>

      <button onClick={toggleYoga}>
        Yoga
      </button>

      <RepetitionExercise name="Pushups" isVisible={seePushups} />
      <DurationExercise name="Running" isVisible={seeRunning} />
      <YogaExercise name="Yoga" isVisible={seeYoga} />

    </>
  )
}

export default App