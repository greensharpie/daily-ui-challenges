import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from './Button'

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
      <Button
        title="Prev"
        disabled={!prevChallenge}
        onClick={() => navigate(`/challenges/${prevChallenge}`)}
      />
      <Button title="Home" onClick={() => navigate('/')} />
      <Button
        title="Next"
        disabled={!nextChallenge}
        onClick={() => navigate(`/challenges/${nextChallenge}`)}
      />
    </div>
  )
}

export default ChallengeNavigation
