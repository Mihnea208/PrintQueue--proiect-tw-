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
- Stage 3: see the `ai-log/etapa-04.md` file.

## Stage 1: static mockup
Static HTML/CSS mockup of the application. The files were moved to the `mockup/` folder.

## Stage 2: data logic
Plain JavaScript, no DOM. `piese.js` in mockup holds the array and the functions that read and change it. Results are printed in the browser console.

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
PiesaList receives the whole array and renders one card per item
PiesaCard receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

## Stage 6: data from a mock API
The list is served by json-server from db.json. The app fetches it on load and shows a loading state and an error state.
npm run api  # terminal 1, http://localhost:3001
npm run dev  # terminal 2, http://localhost:5173

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).


## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: loading data from a mock API
