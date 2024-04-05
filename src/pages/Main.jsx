
import { useState, useEffect } from "react"
import SideMenu from "../components/SideMenu"
import Header from "./Header.jsx"
import "./Main.css"
import Home from "./Home.jsx"


export default function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);
 
  const handleToggleActive = () =>{
    setActive(!active)
  }

  const fetchData = () => {

    fetch("http://localhost:5173/api/gamesData.json")
    .then(res=>res.json())
    .then(data=>{
      setGames(data)
    })
    .catch(e=>console.log(e.message))
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    
        <main>
            <SideMenu active={active} />
            <div className={`banner ${active ? 'active' : undefined}`}>
              <Header toggleActive={handleToggleActive} />
              <div className="container-fluid">
              <Home games={games} />
              </div>
            </div>
        </main>
       
  
  )
}
