import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { DataView } from './Activities.jsx'

const usersApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('users', usersApiUrl).then(setUsers).catch((error) => setError(error.message)) }, [])
  return <DataView title="Student directory" kicker="PEOPLE / OVERVIEW" error={error}><div className="profile-grid">{users.map((user) => <article className="profile-card" key={user._id}><div className="avatar">{user.name?.slice(0, 1)}</div><div><h2>{user.name}</h2><p>{user.email}</p><span>Grade {user.grade}</span></div><strong>{user.points}<small> pts</small></strong></article>)}</div></DataView>
}

export default Users