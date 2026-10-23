export default function PiesaCard({ piesa }) {
  const cardClass = piesa.printat ? "item-card done" : "item-card";
  const badgeClass = `badge badge-${piesa.material.toLowerCase()}`;
  return (
    <li className={cardClass}>
      <div>
        <h3>{piesa.titlu}</h3>
        <span className={badgeClass}>{piesa.material}</span>
        <span className="detalii-print">⏱ {piesa.durata} ore | ⚖️ {piesa.gramaj}g</span>
      </div>
      <span className="status">{piesa.printat ? "Printat" : "În așteptare"}</span>
    </li>
  );
}