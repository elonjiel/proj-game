import React, { useContext} from 'react'
import App, { AppContext } from '../App'
import "./Header.css"
import userImage from "../images/user.jpg"
export default function Header({toggleActive}) {

     const { library, bag } = useContext(AppContext) 
  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive}>
            <i className="bi bi-sliders"></i>
        </a>
        <div className="user-items">
            <a href="#" className="icon">
                <i className="bi bi-heart-fill"></i>
                <span className="like">{library.length}</span>
            </a>
            <a href="#" className="icon">
                <i className="bi bi-bag-fill"></i>
                <span className="bag">{bag.length}</span>
            </a>
            <div className="avatar">
                <a href="#">
                    <img src={userImage} alt="User Image" />
                </a>
                <div className="user">
                    <span>Elon Jiel</span>
                    <a href="#">View Profile</a>
                </div>
            </div>
        </div>
    </header>
  )
}

