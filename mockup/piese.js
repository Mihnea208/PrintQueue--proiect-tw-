
const piese = [
    { id: 1, titlu: "Carcasă senzor proximitate v2", printat: true, material: "PLA", durata: 4.5, gramaj: 120 },
    { id: 2, titlu: "Angrenaj reductor planetar", printat: false, material: "NYLON", durata: 12, gramaj: 300 },
    { id: 3, titlu: "Suport motor pas cu pas", printat: false, material: "PETG", durata: 2, gramaj: 45 }
];


const MATERIALE = ["PLA", "ABS", "PETG", "TPU", "ASA", "NYLON"];

function listeazaTitluri(lista) {
    return lista.map((p) => p.titlu);
}

function numaraInAsteptare(lista) {
    return lista.filter((p) => !p.printat).length;
}

function cautaDupaTitlu(lista, text) {
    return lista.filter((p) => p.titlu.toLowerCase().includes(text.toLowerCase()));
}

function nextId(lista) {
    return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

function adaugaPiesa(lista, titlu, material = "PLA", durata = 0, gramaj = 0) {
    const titluCurat = titlu.trim();
    
    // Validare
    if (!titluCurat) {
        console.log("Titlul nu poate fi gol.");
        return lista;
    }
    if (!MATERIALE.includes(material)) {
        console.log(`Material invalid: ${material}`);
        return lista;
    }
    if (durata <= 0 || gramaj <= 0) {
        console.log("Durata și gramajul trebuie să fie pozitive.");
        return lista;
    }
    
    const piesaNoua = {
        id: nextId(lista),
        titlu: titluCurat,
        printat: false,
        material: material,
        durata: durata,
        gramaj: gramaj
    };
    
    return [...lista, piesaNoua];
}

function comutaPrintat(lista, id) {
    return lista.map((p) => {
        if (p.id === id) {
            return { ...p, printat: !p.printat };
        }
        return p;
    });
}

function stergePiesa(lista, id) {
    return lista.filter((p) => p.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(piese).join(", "));
console.log("În așteptare:", numaraInAsteptare(piese));
console.log("Căutare 'motor':", listeazaTitluri(cautaDupaTitlu(piese, "motor")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaPiesa(piese, "Ghidaj liniar X", "ASA", 3.5, 80);
console.log("Lista nouă:", listaNoua.length, "piese");
console.log("Originalul a rămas cu:", piese.length, "piese");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaPrintat(listaNoua, 2);
console.log("După printarea id 2, în așteptare:", numaraInAsteptare(listaNoua));

listaNoua = stergePiesa(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaPiesa(listaNoua, "   ", "PLA", 10, 50); // Titlu gol
adaugaPiesa(listaNoua, "Suport", "FIBRA", 10, 50); // Material invalid