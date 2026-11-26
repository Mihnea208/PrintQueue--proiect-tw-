import { Link } from "react-router-dom";
import styles from "./PiesaCard.module.css";

export default function PiesaCard({ piesa, onToggle, onDelete }) {
  const cardClass = piesa.printat ? `${styles.card} ${styles.done}` : styles.card;
  const badgeClass = `badge badge-${piesa.material.toLowerCase()}`;

  return (
    <li className={cardClass} data-testid="item" data-id={piesa.id}>
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={piesa.printat}
          onChange={() => onToggle(piesa.id)}
          aria-label={`Marchează ${piesa.titlu}`}
          data-testid="item-toggle"
        />
        <div>
          <Link to={`/piese/${piesa.id}`} className={styles.title} data-testid="item-link">
            {piesa.titlu}
          </Link>
          <span className={badgeClass}>{piesa.material}</span>
        </div>
      </div>

      <button
        className="btn-danger"
        onClick={() => onDelete(piesa.id)}
        aria-label={`Șterge ${piesa.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}