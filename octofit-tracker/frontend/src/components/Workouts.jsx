import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { DataView } from './Activities.jsx'

const workoutsApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('workouts', workoutsApiUrl).then(setWorkouts).catch((error) => setError(error.message)) }, [])
  return <DataView title="Workout library" kicker="GUIDANCE / SUGGESTIONS" error={error}><div className="workout-grid">{workouts.map((workout) => <article className="workout-card" key={workout._id}><span className="type-pill">{workout.type}</span><h2>{workout.title}</h2><p>{workout.description}</p><footer><span>{workout.difficulty}</span><strong>{workout.durationMinutes} min</strong></footer></article>)}</div></DataView>
}

export default Workouts