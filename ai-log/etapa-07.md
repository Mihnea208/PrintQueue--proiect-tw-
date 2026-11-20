# Stage 7: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/apUgzA8vGOoa] (Form, CRUD API, validation and data-testid)

## Key requests
### 1. Formular controlat, operații CRUD și verificare automată
- Asked: Implementarea Etapei 7 pentru PrintQueue (formular cu validare, POST/PATCH/DELETE în api.js, tw.json și data-testid).
- Got: Funcția comună `request` și funcțiile CRUD în `api.js`, componenta `PiesaForm.jsx` cu validări pentru titlu/durată/gramaj, legarea lor în `App.jsx`, stilurile din `App.css`, fișierul `tw.json` și atributele `data-testid`.
- Changed or rejected: Am revenit curat de la o încercare timpurie de Etapa 8 înainte de a implementa Etapa 7 și am adaptat câmpurile la entitatea `piese`.

## What I learned / what did not work
Am înțeles cum funcționează un formular controlat în React (`value` + `onChange`), cum se previne trimiterea dublă prin dezactivarea butonului, de ce actualizăm state-ul abia după răspunsul serverului și cum ajută `tw.json` și `data-testid` la verificarea automată.