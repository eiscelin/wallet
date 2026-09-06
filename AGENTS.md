# Eis Portfolio — Base44 Dev Environment

## Stack
- Vite + React 18 (frontend only, no backend/database)
- Single-page portfolio site

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Node 22 slim image, source bind-mounted at /app
- Vite dev server on port 5173, mapped to host port 3000
- `npm install` runs on startup, then `npm run dev`
- Hot reload via Vite HMR

## Structure
- `src/App.jsx` — main app, imports all sections
- `src/components/` — one file per section (Navbar, Hero, About, Skills, Experience, Projects, Education, Certifications, Services, Contact, Footer)
- `src/index.css` — all styling, dark theme with purple/teal gradient

## Verification
- `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` returns the HTML
- Preview should show the portfolio with all sections
