import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

const activitiesApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('activities', activitiesApiUrl).then(setActivities).catch((error) => setError(error.message))
  }, [])

  return <DataView title="Activity log" kicker="MOVEMENT / RECENT" error={error}>
    <div className="table-responsive"><table className="table tracker-table"><thead><tr><th>Student</th><th>Type</th><th>Duration</th><th>Distance</th><th>Points</th></tr></thead><tbody>
      {activities.map((activity) => <tr key={activity._id}><td>{activity.user?.name || activity.user || 'Unknown student'}</td><td><span className="type-pill">{activity.type}</span></td><td>{activity.durationMinutes} min</td><td>{activity.distanceMiles ? `${activity.distanceMiles} mi` : '—'}</td><td className="points">+{activity.points}</td></tr>)}
    </tbody></table></div>
  </DataView>
}

function DataView({ title, kicker, error, children }) {
  return <section className="data-view"><div className="eyebrow">{kicker}</div><div className="view-heading"><h1>{title}</h1><span className="record-count">Live data</span></div>{error ? <div className="alert alert-warning">{error}</div> : children}</section>
}

export { DataView }
export default Activities