import React, {useState} from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Main from "./pages/Main.jsx"
import "./App.css"


export const AppContext = React.createContext();


export default function App() {
    const [library, setLibrary] = useState ([])
    const [bag, setBag] = useState([])

    return (
        <>
        <AppContext.Provider value={{ library, setLibrary, bag, setBag }}> 
        <Main />
        </AppContext.Provider>
        </> 
    )
}
