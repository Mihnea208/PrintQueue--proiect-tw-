import { useEffect, useState } from "react";
import PiesaList from "./components/PiesaList.jsx";
import PiesaForm from "./components/PiesaForm.jsx";
import { createPiesa, deletePiesa, fetchPiese, updatePiesa } from "./api.js";

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

  async function handleAdd(piesa) {
    const creata = await createPiesa(piesa);
    setPiese((prev) => [...prev, creata]);
  }

  async function handleToggle(id) {
    const piesa = piese.find((p) => p.id === id);
    try {
      const actualizata = await updatePiesa(id, { printat: !piesa.printat });
      setPiese((prev) => prev.map((p) => (p.id === id ? actualizata : p)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deletePiesa(id);
      setPiese((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
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
          <h2>Adaugă piesă</h2>
          <PiesaForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Coadă de printare</h2>

          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă lista de piese...
            </p>
          )}

          {error && (
            <p className="error" data-testid="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {!loading && (
            <PiesaList piese={piese} onToggle={handleToggle} onDelete={handleDelete} />
          )}
        </section>
      </main>
    </>
  );
}