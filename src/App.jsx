import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accueil from './compenents/Accueil'
import Apropos from './compenents/Apropos'
import Navbar from './compenents/Navbar'
import Contact from './compenents/Contact';
import Inscription from './compenents/Inscription';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil/>} />   {/* Page d'accueil */}
        <Route path="/apropos" element={<Apropos />} /> {/* Page À propos */}
        <Route path="/Inscription" element={<Inscription/>} /> {/* Page Inscription */} 
        <Route path="/Contact" element={<Contact/>} /> {/* Page Contact */}   
      </Routes>
     </Router>    
    </>
  )
}

export default App
