import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { DataView } from './Activities.jsx'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('teams').then(setTeams).catch((error) => setError(error.message)) }, [])
  return <DataView title="Team roster" kicker="COMMUNITY / GROUPS" error={error}><div className="team-grid">{teams.map((team) => <article className="team-card" key={team._id}><div className="team-symbol">✦</div><h2>{team.name}</h2><p>{team.members?.length || 0} active members</p><div className="team-line"><span>Captain</span><strong>{team.captain?.name || team.captain || 'Assigned'}</strong></div></article>)}</div></DataView>
}

export default Teams