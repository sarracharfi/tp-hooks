import { createContext, useState, useContext } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
const [theme, setTheme] = useState("clair");
const basculerTheme = () => {
setTheme((t) => (t === "clair" ? "sombre" : "clair"));
};
const valeur = { theme, basculerTheme };
return <ThemeContext.Provider
value={valeur}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
return useContext(ThemeContext);
}