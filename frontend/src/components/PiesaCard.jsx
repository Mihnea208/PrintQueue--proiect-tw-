export default function PiesaCard({ piesa, onToggle, onDelete }) {
  const cardClass = piesa.printat ? "item-card done" : "item-card";
  const badgeClass = `badge badge-${piesa.material.toLowerCase()}`;

  return (
    <li className={cardClass}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={piesa.printat}
          onChange={() => onToggle(piesa.id)}
        />
        <div>
          <h3>{piesa.titlu}</h3>
          <span className={badgeClass}>{piesa.material}</span>
          <span className="detalii-print">⏱ {piesa.durata} ore | ⚖️ {piesa.gramaj}g</span>
        </div>
      </label>
      
      <div className="item-actions">
        <span className="status">{piesa.printat ? "Printat" : "În așteptare"}</span>
        <button
          className="btn-danger"
          onClick={() => onDelete(piesa.id)}
          aria-label={`Șterge ${piesa.titlu}`}
        >
          Șterge
        </button>
      </div>
    </li>
  );
}