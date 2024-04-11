import React, { useState } from "react"
import "./SideMenu.css"
import NavListData from "../data/NavListData"
import SocialListData from "../data/SocialListData"
import NavListItem from "./NavListItem.jsx"
import SocialListItem from "./SocialListItem.jsx"


export default function SideMenu({active, sectionActive}) {

    const [navData, setNavData] = useState(NavListData)
    const [socialData, setSocialData] = useState(SocialListData)

    const handleNavOnClick = (id, target) => {
        
        const newNavData = navData.map(nav=>{
            nav.active = false
            if( nav._id === id) nav.active = true
            return nav
        })

        setNavData(newNavData)
        sectionActive(target)
    }




  return (
    <div className={`side-menu ${active ? 'active' : undefined}`}>
        <a href="" className="logo">
        <i className="bi bi-controller"></i>
           <span className="brand">Game</span>
        </a>
        <ul className="nav ">
        {
            navData.map(item => (
            <NavListItem 
            key={item._id} 
            item={item} 
            navOnClick ={handleNavOnClick}/>
            ))
        }
        </ul>
        <ul className="social ">
        {
            socialData.map(item => (
                <SocialListItem
                key={item._id} 
                item={item} />
            ))
       }
        </ul>
    </div>
  )
}

