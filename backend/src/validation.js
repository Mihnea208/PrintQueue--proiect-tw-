export const MATERIALE = ["PLA", "ABS", "PETG", "TPU", "ASA", "NYLON"];
const TITLU_MAX = 100;

export function valideazaPiesa(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.material !== undefined) {
    const m = body.material ?? "PLA";
    if (!MATERIALE.includes(m)) {
      erori.push(`material trebuie să fie unul din: ${MATERIALE.join(", ")}`);
    } else {
      date.material = m;
    }
  }

  if (!partial || body.durata !== undefined) {
    const d = body.durata !== undefined ? Number(body.durata) : 2;
    if (Number.isNaN(d) || d <= 0) {
      erori.push("durata trebuie să fie un număr pozitiv");
    } else {
      date.durata = d;
    }
  }

  if (!partial || body.gramaj !== undefined) {
    const g = body.gramaj !== undefined ? Number(body.gramaj) : 50;
    if (Number.isNaN(g) || g <= 0) {
      erori.push("gramaj trebuie să fie un număr pozitiv");
    } else {
      date.gramaj = g;
    }
  }

  if (body.printat !== undefined) {
    if (typeof body.printat !== "boolean") {
      erori.push("printat trebuie să fie true sau false");
    } else {
      date.printat = body.printat;
    }
  } else if (!partial) {
    date.printat = false;
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}