
import React from 'react';
import '../assets/style/Accueil.css';
import Apropos from './Apropos';
import Contact from './Contact';
import Inscription from './Inscription';
import Navbar from './Navbar';

function Accueil() {
  return (
    <>
    
      <Apropos />

      <h1>Qui suis je?</h1>
      {/* Section principale */}
      <div className="accueil-container">
        <div className="accueil-grid">
          {/* Colonne gauche : Nom + Titre */}
          <div className="accueil-left">
            <h1>ABOUDOU ALI Faoziath</h1>
            <h2>Développeuse Web – Spécialiste React JS</h2>
          </div>

          {/* Colonne droite : Texte professionnel */}
          <div className="accueil-right">
            <p>
              Je suis une développeuse web passionnée par les technologies front-end, spécialisée en <strong>React JS</strong>. 
              Avec un solide savoir-faire en développement d’interfaces modernes et interactives, je crée des expériences utilisateurs fluides et intuitives.
            </p>

            <p>
              En plus de mes compétences techniques, je suis passionnée par <strong>l’AgriTech</strong> et le numérique. 
              Je possède également une expertise en <strong>graphisme</strong>, avec la maîtrise de Photoshop, Canva et Figma, ce qui me permet de combiner créativité et développement pour réaliser des projets complets et attractifs.
            </p>

            <p>
              Mon objectif est de transformer les idées en solutions digitales concrètes et performantes. 
              N’hésitez pas à parcourir mon portfolio pour découvrir mes projets ou à me contacter pour collaborer sur vos prochains challenges numériques.
            </p>
          </div>
        </div>
      </div>

      {/* Autres sections */}
      
      <Contact />
      <Inscription />
    </>
  );
}

export default Accueil;
