import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <Link className="brand" to="/">
            <img className="brand-mark" src="/octofitapp-small.png" alt="" />
            <span>OctoFit <small>TRACKER</small></span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/users">People</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/teams">Teams</NavLink>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
            <NavLink to="/workouts">Workouts</NavLink>
          </nav>
          <div className="status-dot"><span /> API online</div>
        </header>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <section className="home-view">
      <div className="eyebrow">MERGINGTON HIGH / FITNESS OPERATIONS</div>
      <h1>Small steps.<br /><em>Stronger teams.</em></h1>
      <p className="home-copy">Track movement, celebrate consistency, and keep every student moving forward.</p>
      <div className="home-links">
        <Link className="primary-action" to="/activities">Log activity <span>→</span></Link>
        <Link className="quiet-action" to="/leaderboard">View leaderboard</Link>
      </div>
      <div className="home-ribbon">
        <span>05</span><strong>connected views</strong>
        <span>∞</span><strong>ways to move</strong>
        <span>01</span><strong>shared goal</strong>
      </div>
    </section>
  )
}

export default App
