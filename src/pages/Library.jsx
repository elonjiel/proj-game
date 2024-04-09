import React from 'react'
import "./Library.css"
import GameCard from '../components/GameCard'

export default function Library({games, reference}) {
  return (
    <section id="library" className="library" ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>Library</h1>
          </div>
          <div className="row">
            {games.length === 0 ? (
                <h2>Your Library is empty</h2>
              ) : (
                games.map(game => <GameCard key={game._id} game={game} />)
              )
            }
          </div>
        </div>
    </section>
  )
}

