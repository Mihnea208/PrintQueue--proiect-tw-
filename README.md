# PrintQueue
A 3D print management system to track and organize CAD prototypes.
It helps lab students and engineers monitor print jobs.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| part name | text | required, max 100 chars |
| is printed | boolean | toggled from the list, default false |
| material | fixed values | PLA, ABS, PETG, TPU, ASA, NYLON |
| duration | number | estimated print time in hours |
| weight | number | estimated material weight in grams |
| project | relation | Robotics, Thesis, Research |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Carcasă senzor proximitate v2, active, PLA, 4.5 hours, 120g
2. Angrenaj reductor planetar, done, NYLON, 12 hours, 300g
3. Suport motor pas cu pas, active, PETG, 2 hours, 45g

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | Suggestions for the theme, debugging assistance |

Details per stage:
- Stage 1: see the `ai-log/etapa-01.md` file.
- Stage 2: see the `ai-log/etapa-02.md` file.
- Stage 3: see the `ai-log/etapa-03.md` file.
- Stage 4: see the `ai-log/etapa-04.md` file.
- Stage 5: see the `ai-log/etapa-05.md` file.
- Stage 6: see the `ai-log/etapa-06.md` file.
- Stage 7: see the `ai-log/etapa-07.md` file.
- Stage 8: see the `ai-log/etapa-08.md` file.
- Stage 9: see the `ai-log/etapa-09.md` file.

## Stage 1: static mockup
Static HTML/CSS mockup of the application. The files were moved to the `mockup/` folder.

## Stage 2: data logic
Plain JavaScript, no DOM. `piese.js` in mockup holds the array and the functions that read and change it. Results are printed in the browser console.

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
- `PiesaList` receives the whole array and renders one card per item
- `PiesaCard` receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

## Stage 6: data from a mock API
The list is served by json-server from `db.json`. The app fetches it on load and shows a loading state and an error state.
```bash
npm run api  # terminal 1, http://localhost:3001
npm run dev  # terminal 2, http://localhost:5173
```

## Stage 7: form and validation
Parts can be added from the page. The form is controlled and validated, and every change (add, toggle, delete) goes to the API before it shows up in the list.

## Stage 8: routing and detail page
Three pages behind React Router: the list, a detail page at `/piese/:id`, and an about page, plus a 404 page. Component styles moved to CSS Modules.

## Stage 9: own backend
json-server is gone. The API is an Express server in `backend/`, with REST routes, server-side validation and CORS. Data is still kept in memory and resets on restart.

## How to run
```bash
cd backend && npm install && npm run dev    # terminal 1, port 3001
cd frontend && npm install && npm run dev   # terminal 2, port 5173
```

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: loading data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [x] Stage 9: own backend with Express
- [ ] Stage 10: MariaDB and full CRUD

## Stage 9 checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S9-R1 | `npm run dev` in `backend/` starts the API on 3001 | `backend/package.json`, `backend/src/server.js` | run it, open `/health` |
| S9-R2 | all five routes answer with the right codes | `backend/src/routes/piese.js` | curl commands |
| S9-R3 | invalid data returns 400 with a clear message | `backend/src/validation.js` | POST with empty title |
| S9-R4 | React app works with json-server removed | `frontend/package.json`, `frontend/src/api.js` | stop everything but backend |
| S9-R5 | no CORS errors in the browser console | `backend/src/app.js` (cors) | open console |
| S9-R6 | README Stage 9 section + AI log | `README.md`, `ai-log/etapa-09.md` | read |
| S9-R7 | commit "Stage 9" pushed | `8ceacc5e69b9bc2e7162c25cd086fb4dc03c14e9` | commit history |