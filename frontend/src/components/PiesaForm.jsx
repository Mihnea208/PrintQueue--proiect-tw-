import { useState } from "react";
import { MATERIALE } from "../constants.js";
import styles from "./PiesaForm.module.css";

const TITLU_MAX = 100;

export default function PiesaForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [material, setMaterial] = useState("PLA");
  const [durata, setDurata] = useState("2");
  const [gramaj, setGramaj] = useState("50");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul piesei este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    if (Number(durata) <= 0 || Number.isNaN(Number(durata))) return "Durata trebuie să fie un număr pozitiv.";
    if (Number(gramaj) <= 0 || Number.isNaN(Number(gramaj))) return "Gramajul trebuie să fie un număr pozitiv.";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onAdd({
        titlu: titlu.trim(),
        material,
        durata: Number(durata),
        gramaj: Number(gramaj),
        printat: false,
      });
      setTitlu("");
      setMaterial("PLA");
      setDurata("2");
      setGramaj("50");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlu piesă
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Carcasă senzor v3"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Material
        <select
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          data-testid="form-material"
        >
          {MATERIALE.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </label>

      <label>
        Durată estimată (ore)
        <input
          type="number"
          step="0.5"
          min="0.1"
          value={durata}
          onChange={(e) => setDurata(e.target.value)}
          data-testid="form-durata"
        />
      </label>

      <label>
        Gramaj estimat (g)
        <input
          type="number"
          min="1"
          value={gramaj}
          onChange={(e) => setGramaj(e.target.value)}
          data-testid="form-gramaj"
        />
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă piesă"}
      </button>
    </form>
  );
}