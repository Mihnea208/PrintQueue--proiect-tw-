import PiesaList from "./components/PiesaList.jsx";

const piese = [
    { id: 1, titlu: "Carcasă senzor proximitate v2", printat: true, material: "PLA", durata: 4.5, gramaj: 120 },
    { id: 2, titlu: "Angrenaj reductor planetar", printat: false, material: "NYLON", durata: 12, gramaj: 300 },
    { id: 3, titlu: "Suport motor pas cu pas", printat: false, material: "PETG", durata: 2, gramaj: 45 }
];

export default function App() {
  const inAsteptare = piese.filter((p) => !p.printat).length;

  return (
    <>
      <header className="app-header">
        <h1>PrintQueue</h1>
        <p>Sistem de gestiune a prototipurilor trimise la imprimantele 3D din laborator.</p>
        <p className="app-count">
          {piese.length} piese, dintre care {inAsteptare} în așteptare
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Coadă de printare</h2>
          <PiesaList piese={piese} />
        </section>
      </main>
    </>
  );
}