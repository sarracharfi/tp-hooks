import { useMemo, useRef, useState, useCallback } from "react";
import ProductItem from "../shared/ProductItem.jsx"; // Import correct

// Liste des produits
const PRODUITS = [
  { id: 1, nom: "Clavier", prix: 80 },
  { id: 2, nom: "Souris", prix: 40 },
  { id: 3, nom: "Écran", prix: 220 },
  { id: 4, nom: "Casque", prix: 120 },
];

export default function Products() {
  const [prixMin, setPrixMin] = useState(0);
  const champRef = useRef(null);

  // Filtrage et tri des produits
  const produitsFiltres = useMemo(() => {
    const tries = [...PRODUITS].sort((a, b) => a.prix - b.prix);
    return tries.filter(p => p.prix >= prixMin);
  }, [prixMin]);

  // Gestion de la sélection d'un produit
  const gererSelection = useCallback((id) => {
    alert("Produit sélectionné : " + id);
  }, []);

  return (
    <div>
      <h1>Liste des produits</h1>
      <label>
        Prix minimum :{" "}
        <input
          ref={champRef}
          type="number"
          value={prixMin}
          onChange={e => setPrixMin(Number(e.target.value || 0))}
        />
      </label>
      <button
        onClick={() => champRef.current && champRef.current.focus()}
        style={{ marginLeft: 8 }}
      >
        Focus sur le champ
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        {produitsFiltres.map(p => (
          <ProductItem key={p.id} produit={p} onSelect={gererSelection} />
        ))}
      </ul>
      <p>Nombre d’articles affichés : {produitsFiltres.length}</p>
    </div>
  );
}
