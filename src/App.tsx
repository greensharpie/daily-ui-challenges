import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate
} from 'react-router-dom'
import ChallengeList from './components/ChallengeList'
import Challenge001 from './challenges/001/src/index'
import Challenge002 from './challenges/002/src/index'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<ChallengeList />} />
        <Route path="/challenges/:challengeId" element={<ChallengePage />} />
      </Routes>
    </Router>
  )
}

const ChallengePage: React.FC = () => {
  const { challengeId } = useParams()

  const challenges: Record<string, React.FC> = {
    '001': Challenge001,
    '002': Challenge002
  }

  const ChallengeComponent = challenges[challengeId || '']

  return ChallengeComponent ? <ChallengeComponent /> : <Navigate to="/" />
}

export default App
