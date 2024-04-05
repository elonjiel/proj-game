
import "./GameCard.css"
import GameRating from "./GameRating.jsx"

export default function GameCard( {game} ) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
       <div className="game-card">
        <img src={game.img} alt={game.title} className="img-fluid" />
            <a href="#" className="like">
                <i className="bi bi-heart-fill"/>
            </a>
            <div className="game-feature">
                <span className="game-type">{game.level}</span>
                <GameRating rating={game.rating} />
            </div>
            <div className="game-title mt-4 mb-3">{game.title}</div>
            <div className="game-price">
                {
                    game.discount !=0 && (
                        <>
                            <span className="discount">
                                <i>{game.discount * 100}%</i>
                            </span>
                            <span className="prev-price">
                                ${game.price.toFixed(2)}
                            </span>
                        </>
                    )}
                    <span className="current-price">
                        ${((1 - game.discount) * game.price).toFixed(2)}
                    </span>
            </div>
            <a href="#" className="add-bag">
                <i className="bi bi-bag-plus-fill"></i>
            </a>
       </div>
    </div>
  )
}

