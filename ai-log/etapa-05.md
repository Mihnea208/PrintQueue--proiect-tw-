# Stage 5: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/tU3j1bGMI6lx] (Local state, interactive buttons and dark mode)

## Key requests
### 1. State and Interactivity
- Asked:„ajuta ma cu partea de debugging la stergere nu merge”
2. „m a ajutat al 3 a varianta” (referitor la generarea corectă a stării cu `filter`)"
- Got: am identificat că problema
- Changed or rejected: Codul a fost integrat cu datele aplicației mele PrintQueue. Am corectat CSS-ul pentru a permite suprascrierea temei sistemului prin adăugarea pseudoclasei `:not([data-theme="light"])`.

## What I learned / what did not work
 „am aflat ca problema era la  modul în care actualizam starea în funcția `handleDelete`. AI-ul mi-a reamintit regula esențială din React: state-ul nu se modifică niciodată direct (pe loc). M-a ajutat să implementez actualizarea imutabilă folosind forma cu funcție `setTaskuri((prev) => prev.filter(...))` pentru a returna un array complet nou, ceea ce a declanșat corect redesenarea paginii.