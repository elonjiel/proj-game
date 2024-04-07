import React from 'react'
import GameCard from "../components/GameCard.jsx"
import GameSwiper from "../components/GameSwiper.jsx"
import "./Home.css"

export default function Home({games, reference}) {
  return (
    <section id="home" className="home active" ref={reference}>
        <div className="container-fluid">
            <div className="row">
                <GameSwiper games={games}/>
            </div>
            <div className="row mb-2 mt-1">
                <div className="col-lg-6 ">
                    <h6 className="section-title">Games on promotion</h6>
                </div>
                <div className="col-lg-6 d-flex justify-content-end align-items-center">
                    <a href="#" className="view-more">
                    View More Games <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="row">
                {games.slice(0, 4).map(game => (
                    <GameCard key={game._id} game={game} />
                 ))}
            </div>
        </div>
    </section>
  )
}

