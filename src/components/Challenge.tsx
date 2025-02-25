import React, { JSX } from 'react'
import { useParams } from 'react-router-dom'
import Challenge001 from '../challenges/001/src/index'
// import Challenge002 from '../challenges/002/src/index'

const Challenge = () => {
  const { challengeId } = useParams<{ challengeId?: string }>()

  const challengeComponents: { [key: string]: JSX.Element } = {
    '001': <Challenge001 />
    // "002": <Challenge002 />,
  }

  if (!challengeId) {
    console.log('No challengeId found')
    return <h1>Challenge not found</h1>
  }

  if (!challengeComponents[challengeId]) {
    console.log(`No component found for ${challengeId}`)
    return <h1>Challenge not found</h1>
  }

  return challengeComponents[challengeId]
}

export default Challenge
