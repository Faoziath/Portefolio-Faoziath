import React from "react";

import "../assets/style/Apropos.css";

function Apropos() {
  const prenom = "Faoziath";
  const name = "ABOUDOU ALI";

  const passions = [
    "Programmation",
    "UI/UX",
    "Lecture",
    "Entrepreneuriat",
    "AgriTech",
  ];

  return (
    <div className="apropos-container">
      <div className="apropos-card">
        <div className="apropos-grid">
          {/* Colonne gauche */}
          <div className="apropos-left">
            <img
              src="public/PhotoPro.jpg"
              alt="Profil"
              className="profile-pic"
            />
            <h1 className="apropos-title">
              Bonjour, je suis <span>{name} {prenom}</span>
            </h1>
            <h2 className="apropos-subtitle">Développeuse React JS</h2>
          </div>

          {/* Colonne droite */}
          <div className="apropos-right">
            <p className="apropos-text">
              Je suis passionnée par <strong>l’AgriTech</strong> et j’ai aussi
              des compétences en <strong>graphisme</strong> (Photoshop, Canva)
              et en <strong>UI/UX Design avec Figma</strong>.
            </p>

            <h3 className="section-title">Mes Passions :</h3>
            <ul className="passion-list">
              {passions.map((passion, index) => (
                <li key={index} className="passion-item">
                  {passion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;




