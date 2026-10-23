# Stage 4: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/I3YpWOoQmC2S] (Despre spargerea interfeței în componente React, transmiterea datelor prin props și randarea dinamică a listei de piese)

## Key requests
### 1. Crearea componentelor și randarea listei
- **Asked:** Am cerut ajutor pentru a transforma lista mea de obiecte (afișată anterior ca JSON brut) într-o interfață dinamică, folosind componentele `PiesaList` și `PiesaCard`. Am solicitat și clarificări despre erorile din consolă legate de atributul key.
- **Got:** AI-ul mi-a explicat cum să folosesc metoda `.map()` pentru a itera prin array și cum să transmit datele din componenta părinte (`App`) în componentele copil folosind `props`. Mi-a oferit exemple pentru adăugarea atributului unic `key` direct pe componenta randată de `map`.
- **Changed or rejected:** În loc să copiez direct codul generat, am adaptat destructurarea props-urilor exact pentru proprietățile obiectelor mele (ex: `piesa.id`, `piesa.stare`) și am implementat manual randarea condiționată (return timpuriu) pentru cazul în care lista este goală, conform cerințelor etapei.

## What I learned / what did not work
Am învățat cum să împart o interfață statică în componente React independente și reutilizabile. Am înțeles direcția fluxului de date (unidirectional data flow) prin `props`, de la părinte la copil. Un aspect care mi-a dat inițial bătăi de cap a fost plasarea corectă a atributului `key` (l-am pus inițial pe un element din interiorul cardului, ceea ce a generat avertismente în consolă), dar am înțeles că trebuie aplicat direct pe componenta returnată de `map`.