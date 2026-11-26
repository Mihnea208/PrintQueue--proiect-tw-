# Stage 8: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/apUgzA8vGOoa] (React Router, Detail Page and CSS Modules)

## Key requests
### 1. Rutare cu React Router și stilizare cu CSS Modules
- Asked: Configurarea rutelor (`/`, `/piese/:id`, `/despre`, `*`), crearea layout-ului comun, a paginii de detaliu și mutarea stilurilor în fișiere `.module.css`.
- Got: Structura pe `pages/` și `components/`, componenta `Layout` cu `NavLink` și `Outlet`, pagina `PiesaDetaliuPage` cu `useParams` și tratare 404, plus fișierele `.module.css` și curățarea `index.css`.
- Changed or rejected: Am rezolvat o eroare de rețea la instalarea `react-router-dom` folosind `--no-audit --no-fund` și am corectat aplicarea claselor pe `PiesaForm`.

## What I learned / what did not work
Am învățat cum funcționează rutarea SPA cu `BrowserRouter`, `Routes`, `Outlet`, `Link` și `NavLink` (inclusiv atributul `end`), cum citesc parametri dinamici cu `useParams` și cum izolez stilurile pe componente cu CSS Modules.