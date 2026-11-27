import { Router } from "express";
import { parseId, valideazaPiesa } from "../validation.js";

const router = Router();

let piese = [
  { id: 1, titlu: "Carcasă senzor proximitate v2", printat: true, material: "PLA", durata: 4.5, gramaj: 120 },
  { id: 2, titlu: "Angrenaj reductor planetar", printat: false, material: "NYLON", durata: 12, gramaj: 300 },
  { id: 3, titlu: "Suport motor pas cu pas", printat: false, material: "PETG", durata: 2, gramaj: 45 },
];
let nextId = 4;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }
  const index = piese.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Piesa nu există" });
  }
  return index;
}

// GET /piese
router.get("/", (req, res) => {
  res.json(piese);
});

// GET /piese/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(piese[index]);
});

// POST /piese
router.post("/", (req, res) => {
  const { erori, date } = valideazaPiesa(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  const piesa = { id: nextId++, ...date };
  piese.push(piesa);
  res.status(201).json(piesa);
});

// PATCH /piese/:id
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  const { erori, date } = valideazaPiesa(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  piese[index] = { ...piese[index], ...date };
  res.json(piese[index]);
});

// DELETE /piese/:id
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  piese.splice(index, 1);
  res.status(204).end();
});

export default router;