import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const challenges = [
  { id: '001', title: 'Sign-up Form' },
  { id: '002', title: 'Credit Card Checkout' },
  { id: '003', title: 'Landing Page' },
  { id: '004', title: 'Calculator UI' },
  { id: '005', title: 'User Profile' },
  { id: '006', title: 'Settings Page' }
]

const ITEMS_PER_PAGE = 2

const ChallengeList = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedChallenges = challenges.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )
  const totalPages = Math.ceil(challenges.length / ITEMS_PER_PAGE)

  return (
    <div>
      <h2>Daily UI Challenges</h2>
      <ul>
        {paginatedChallenges.map((challenge) => (
          <li key={challenge.id}>
            <Link to={`/challenges/${challenge.id}`}>{challenge.title}</Link>
          </li>
        ))}
      </ul>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        Previous
      </button>
      <span>
        {' '}
        Page {currentPage} of {totalPages}{' '}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default ChallengeList
