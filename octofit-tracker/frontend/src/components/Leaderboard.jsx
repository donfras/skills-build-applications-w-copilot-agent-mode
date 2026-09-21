import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { DataView } from './Activities.jsx'

const leaderboardApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('leaderboard', leaderboardApiUrl).then(setEntries).catch((error) => setError(error.message)) }, [])
  return <DataView title="Leaderboard" kicker="COMPETITION / THIS MONTH" error={error}><div className="leader-list">{entries.map((entry, index) => <div className={`leader-row rank-${index + 1}`} key={entry._id}><span className="rank">{entry.rank || index + 1}</span><div><strong>{entry.user?.name || entry.user || 'Student'}</strong><small>Consistency champion</small></div><b>{entry.points}<small> pts</small></b></div>)}</div></DataView>
}

export default Leaderboard