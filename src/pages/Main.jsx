
import React, { useState, useEffect, useRef, useContext } from "react"
import App, { AppContext } from "../App.jsx"
import SideMenu from "../components/SideMenu"
import Header from "./Header.jsx"
import "./Main.css"
import Home from "./Home.jsx"
import Categories from "./Categories.jsx"
import Library from "./Library.jsx"
import Bag from "./Bag.jsx"


export default function Main() {
  const { library, bag } = useContext(AppContext)
  const [active, setActive] = useState(false)
  const [games, setGames] = useState([])

  const homeRef = useRef()
  const categoriesRef = useRef()
  const libraryRef = useRef()
  const bagRef = useRef()

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "bag",
      ref: bagRef,
      active: false,
    },

  ]

  const handleToggleActive = () => {
    setActive(!active)
  }

  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove("active")
      if(section.ref.current.id === target) {
        section.ref.current.classList.add("active")
        // console.log(section.ref.current)
      }
      return section
    })

  }

  const fetchData = () => {

    fetch("http://localhost:5173/api/gamesData.json")
    .then(res=>res.json())
    .then(data=>{
      setGames(data)
    })
    .catch(e=>console.log(e.message))
  }

  useEffect( () => {
    fetchData()
  }, [])

  return (
    
        <main>
            <SideMenu active={active} sectionActive={handleSectionActive}/>
            <div className={`banner ${active ? 'active' : undefined}`}>
              <Header toggleActive={handleToggleActive} />
              <div className="container-fluid">
                {games && games.length >0 && (
                  <>
                   <Home games={games} reference={homeRef}/>
                   <Categories games={games} reference={categoriesRef}/>
                   <Library games={library} reference={libraryRef}/>
                   <Bag games={bag} reference={bagRef} />
                  </>
              
                )}
             
             
             
              </div>
            </div>
        </main>
       
  
  )
}
