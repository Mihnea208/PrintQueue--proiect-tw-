import { useEffect, useState } from "react";
import PiesaList from "./components/PiesaList.jsx";
import { fetchPiese } from "./api.js";

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [piese, setPiese] = useState([]);
  const [tema, setTema] = useState(temaInitiala);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchPiese();
        if (!ignore) setPiese(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, []);

  function handleToggle(id) {
    setPiese((prev) => prev.map((p) => (p.id === id ? { ...p, printat: !p.printat } : p)));
  }

  function handleDelete(id) {
    setPiese((prev) => prev.filter((p) => p.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const inAsteptare = piese.filter((p) => !p.printat).length;

  return (
    <>
      <header className="app-header">
        <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>PrintQueue</h1>
        <p>Sistem de gestiune a prototipurilor trimise la imprimantele 3D din laborator.</p>
        <p className="app-count">{piese.length} piese, dintre care {inAsteptare} în așteptare</p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Coadă de printare</h2>
          
          {loading && <p className="info">Se încarcă lista de piese...</p>}
          
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          
          {!loading && !error && (
            <PiesaList piese={piese} onToggle={handleToggle} onDelete={handleDelete} />
          )}
        </section>
      </main>
    </>
  );
}