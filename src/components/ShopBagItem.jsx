import React, { useContext } from 'react'
import "./ShopBagItem.css"
import { AppContext } from '../App'

export default function ShopBagItem({game, index}) {

    const {bag, setBag} = useContext(AppContext)

    const handleRemoveFromBag = (game) => {
        setBag(bag.filter(item => item._id !== game._id))
    }
  return (
    <tr className="shop-bag-item">
        <th scope="row">{index+1}</th>
        <td>
            <img src={game.img} alt="Game Image" className="img-fluid"/>
        </td>
        <td>{game.title}</td>
        <td>${game.price.toFixed(2)}</td>
        <td>{game.discount * 100}%</td>
        <td>${((1 - game.discount) * game.price).toFixed(2)}</td>
        <td>
            <a href="#" onClick={() => handleRemoveFromBag(game)}>
                <i className="bi bi-trash"></i>
            </a>
        </td>
    </tr>
  )
}

 