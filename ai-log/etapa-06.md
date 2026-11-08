# Stage 6: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/thikI9w95MSA]

## Key requests
### 1. Rezolvarea erorii de sintaxă din package.json
- **Asked:** Am solicitat ajutor pentru a identifica de ce primesc eroare în fișierul `package.json` după ce am încercat să adaug comanda personalizată `"api"` pentru pornirea `json-server`.
- **Got:** AI-ul a identificat rapid problema: formatul JSON era invalid deoarece duplicasem secțiunea `"scripts"` la finalul fișierului și lăsasem acolade neînchise corect. Mi-a generat codul curățat și corectat.
- **Changed or rejected:** Am aplicat direct structura oferită, înlocuind conținutul stricat, și am verificat ca linia `"api": "json-server --watch db.json --port 3001"` să fie corect plasată alături de scriptul de `dev`.

## What I learned / what did not work
Am aprofundat/recapitulat cât de strict este formatul JSON: nu suportă blocuri cu același nume duplicate (cum a fost cazul cu `"scripts"`) și orice acoladă sau virgulă pusă greșit strică întregul fișier de configurare. Am învățat cum să adaug corect un script nou în proiectele bazate pe Node/Vite pentru a rula un mock backend pe un port diferit față de frontend.