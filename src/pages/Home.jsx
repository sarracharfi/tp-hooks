import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Home() {
  const [compteur, setCompteur] = useState(0);
  const [secondes, setSecondes] = useState(0);
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const intervalle = setInterval(() => setSecondes(s => s + 1), 1000);
    return () => clearInterval(intervalle);
  }, []);

  useEffect(() => {
    document.title = `Compteur : ${compteur}`;
  }, [compteur]);

  return (
    <div
      style={{
        padding: 12,
        borderRadius: 8,
        backgroundColor: theme === "clair" ? "#f9f9f9" : "#222",
        color: theme === "clair" ? "#000" : "#fff",
      }}
    >
      <h1>Page d’accueil</h1>
      <p>Thème actuel : {theme}</p>
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>Augmenter</button>
      <button onClick={() => setCompteur(0)} style={{ marginLeft: 8 }}>
        Réinitialiser
      </button>
      <p>Temps écoulé : {secondes} secondes</p>
      <button onClick={() => navigate("/user/123")} style={{ marginTop: 12 }}>
        Aller à la page de l’utilisateur 123
      </button>
    </div>
  );
}
