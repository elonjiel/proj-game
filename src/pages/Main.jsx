
import { useState } from "react"
import SideMenu from "../components/SideMenu"
import Header from "./Header.jsx"
import "./Main.css"


export default function Main() {
  const [active, setActive] = useState(false);
 
  const handleToggleActive = () =>{
    setActive(!active);
  };

  return (
    
        <main>
            <SideMenu active={active} />
            <div className={`banner ${active ? 'active' : undefined}`}>
            <Header toggleActive={handleToggleActive} />
            </div>
            
        </main>
       
  
  )
}
