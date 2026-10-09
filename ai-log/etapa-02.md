# Stage 1: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/XGGbtHPMuFPu] (Despre extragerea datelor din HTML, transformarea lor într-un array de obiecte JS și implementarea funcțiilor de bază pentru aplicația PrintQueue)

## Key requests
### 1. Mutarea logicii în JavaScript
- Asked: Am cerut o părere pe un cod HTML (macheta pentru gestiunea printurilor 3D) și am solicitat ajutorul pentru mutarea datelor într-un fișier JavaScript, alături de scrierea funcțiilor de bază (listare, numărare, căutare, adăugare, comutare și ștergere).
- Got: AI-ul m-a validat pe structura HTML curată, propunând inițial o abordare cu manipulare directă a stării. După ce am oferit versiunea mea, AI-ul a lăudat abordarea funcțională, explicându-mi conceptele de imutabilitate și funcții pure. Totodată, mi-a oferit un exemplu despre cum se face legătura viitoare cu DOM-ul.
- Changed or rejected: În loc să folosesc logica tradițională bazată pe stări mutabile (`push`, etc.), am scris direct propriile funcții folosind metode avansate pe array-uri (`map`, `filter`, `reduce`), asigurându-mă că array-ul original rămâne neschimbat (imutabilitate).

## What I learned / what did not work
Am învățat cum să separ clar structura vizuală a paginii (HTML) de manipularea datelor (JavaScript). Am înțeles mai bine avantajele abordării funcționale și ale utilizării parametrilor default sau a funcțiilor pure. Pasul care necesită muncă suplimentară (ce nu a funcționat „out of the box” doar cu array-ul) este randarea efectivă a acestor elemente înapoi în DOM, lucru care necesită o funcție de afișare și ștergerea HTML-ului hardcodat anterior.