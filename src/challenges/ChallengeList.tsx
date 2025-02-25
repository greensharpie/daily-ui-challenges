import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import '../styles/ChallengeList.css'

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
    <div className="home-page">
      <div className="challenge-list-container">
        <h2>Daily UI Challenges</h2>
        <ul className="challenge-list">
          {paginatedChallenges.map((challenge) => (
            <li key={challenge.id}>
              <Link to={`/challenges/${challenge.id}`}>{challenge.title}</Link>
            </li>
          ))}
        </ul>
        <div className="pagination-controls">
          <Button
            title="Previous"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          />
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            title="Next"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          />
        </div>
      </div>
    </div>
  )
}

export default ChallengeList
