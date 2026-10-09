# PrintQueue
A 3D print management system to track and organize CAD prototypes.
It helps lab students and engineers monitor print jobs.

## Data model
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
1. Carcasă senzor proximitate v2, active, PLA
2. Angrenaj reductor planetar, done, ABS
3. Suport motor pas cu pas, active, PETG

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | Suggestions for the theme, debugging assistance |

Details per stage:
- Stage 1: see the ai-log/ folder.

## How to run
Open index.html in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project