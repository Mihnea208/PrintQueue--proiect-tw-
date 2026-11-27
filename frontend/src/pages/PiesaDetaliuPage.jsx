import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPiesa } from "../api.js";
import styles from "./PiesaDetaliuPage.module.css";

export default function PiesaDetaliuPage() {
  const { id } = useParams();
  const [piesa, setPiesa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchPiesa(id)
      .then((data) => {
        if (!ignore) {
          setPiesa(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => { ignore = true; };
  }, [id]);

  if (loading) {
    return <p className="info" data-testid="loading">Se încarcă...</p>;
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Piesa nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }
  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la listă
      </Link>
      <h2 className={piesa.printat ? styles.done : undefined} data-testid="detail-title">
        {piesa.titlu}
      </h2>
      <dl className={styles.fields}>
        <dt>Material</dt>
        <dd>
          <span className={`badge badge-${piesa.material.toLowerCase()}`}>
            {piesa.material}
          </span>
        </dd>
        <dt>Status</dt>
        <dd>{piesa.printat ? "Printat" : "În așteptare"}</dd>
        <dt>Durată estimată</dt>
        <dd>{piesa.durata} ore</dd>
        <dt>Gramaj estimat</dt>
        <dd>{piesa.gramaj} g</dd>
        <dt>ID</dt>
        <dd>{piesa.id}</dd>
      </dl>
    </section>
  );
}