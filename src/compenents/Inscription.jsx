import React, { useState } from 'react';
import '../assets/style/Inscription.css';   // <-- importer le style

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
  });

  // Gérer le changement des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    alert("Inscription réussie 🎉");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Formulaire d'Inscription</h2>
        <form onSubmit={handleSubmit}>
          {/* Champ Nom */}
          <div>
            <label>Nom :</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Email */}
          <div>
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label>Mot de passe :</label>
            <input
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              required
            />
          </div>

          {/* Bouton */}
          <div>
            <button type="submit">S'inscrire</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
