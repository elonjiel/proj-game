import { useState } from "react"
import "./SideMenu.css"
import NavListData from "../data/NavListData"
import NavListItem from "./NavListItem"


export default function SideMenu({active}) {

    const [navData, setNavData] = useState(NavListData)
  return (
    <div className={`side-menu ${active ? 'active' : undefined}`}>
        <a href="" className="logo">
        <i className="bi bi-controller"></i>
           <span className="brand">Play</span>
        </a>
        <ul className="nav">
        {
            navData.map(item => (
            <NavListItem key={item._id} item={item}/>
            ))
        }
        </ul>
        <ul className="social">
            <li>
                <a href="#">
                    <i className="bi bi-meta"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="bi bi-twitter-x"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="bi bi-youtube"></i>
                </a>
            </li>
            <li>
                <a href="#" className="share">
                    <i className="bi bi-share"></i>
                </a>
            </li>
        </ul>
    </div>
  )
}

