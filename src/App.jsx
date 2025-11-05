import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UserDetail from "./pages/UserDetail.jsx";
import Products from "./pages/Products.jsx";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";

function ThemeSwitcher() {
  const { theme, basculerTheme } = useTheme();
  return (
    <div style={{ marginBottom: 16 }}>
      <p>Thème actuel : <strong>{theme}</strong></p>
      <button onClick={basculerTheme}>
        Changer le thème ({theme === "clair" ? "clair" : "sombre"})
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 16, fontFamily: "sans-serif" }}>
        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Link to="/">Accueil</Link>
          <Link to="/user/42">Utilisateur</Link>
          <Link to="/products">Produits</Link>
        </nav>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
