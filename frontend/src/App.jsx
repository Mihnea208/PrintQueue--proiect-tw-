import { useState } from "react";
import PiesaList from "./components/PiesaList.jsx";

const PIESE_INITIALE = [
    { id: 1, titlu: "Carcasă senzor proximitate v2", printat: true, material: "PLA", durata: 4.5, gramaj: 120 },
    { id: 2, titlu: "Angrenaj reductor planetar", printat: false, material: "NYLON", durata: 12, gramaj: 300 },
    { id: 3, titlu: "Suport motor pas cu pas", printat: false, material: "PETG", durata: 2, gramaj: 45 }
];

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [piese, setPiese] = useState(PIESE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setPiese((prev) =>
      prev.map((p) => (p.id === id ? { ...p, printat: !p.printat } : p))
    );
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
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>PrintQueue</h1>
        <p>Sistem de gestiune a prototipurilor trimise la imprimantele 3D din laborator.</p>
        <p className="app-count">
          {piese.length} piese, dintre care {inAsteptare} în așteptare
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Coadă de printare</h2>
          <PiesaList piese={piese} onToggle={handleToggle} onDelete={handleDelete} />
        </section>
      </main>
    </>
  );
}