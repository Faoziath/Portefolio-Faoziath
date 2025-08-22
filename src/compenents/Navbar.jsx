import { Link } from "react-router-dom";
import "../assets/style/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/apropos">À propos</Link></li>
        <li><Link to="/Inscription">Inscription</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
     
      
      
      </ul>
    </nav>
  );
}

export default Navbar;
