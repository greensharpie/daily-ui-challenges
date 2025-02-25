import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const challenges = ['001', '002', '003', '004', '005', '006']

const ChallengeNavigation = () => {
  const { challengeId } = useParams()
  const navigate = useNavigate()

  const currentIndex = challenges.indexOf(challengeId || '')
  const prevChallenge = challenges[currentIndex - 1]
  const nextChallenge = challenges[currentIndex + 1]

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px'
      }}
    >
      <button
        disabled={!prevChallenge}
        onClick={() => navigate(`/challenges/${prevChallenge}`)}
      >
        Previous Challenge
      </button>
      <button onClick={() => navigate('/')}>Back to All Challenges</button>
      <button
        disabled={!nextChallenge}
        onClick={() => navigate(`/challenges/${nextChallenge}`)}
      >
        Next Challenge
      </button>
    </div>
  )
}

export default ChallengeNavigation
