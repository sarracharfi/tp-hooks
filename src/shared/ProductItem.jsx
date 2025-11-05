import React from "react";

const ProductItem = React.memo(function ProductItem({ produit, onSelect }) {
  console.log("Rendu :", produit.nom);
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 8,
        border: "1px solid #ccc",
        borderRadius: 6,
        marginBottom: 8,
      }}
    >
      <span>{produit.nom} — {produit.prix} €</span>
      <button onClick={() => onSelect(produit.id)}>Sélectionner</button>
    </li>
  );
});

export default ProductItem;
