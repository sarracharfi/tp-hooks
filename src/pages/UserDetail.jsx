import { useParams, useNavigate } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Détails de l’utilisateur</h1>
      <p>Identifiant : {id}</p>
      <button onClick={() => navigate(-1)}>Retour</button>
    </div>
  );
}
