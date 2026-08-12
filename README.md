# CreSense

An Explainable AI-Powered Credit Card Fraud Analytics Platform Integrating
Machine Learning and Business Intelligence.

**Status: frontend prototype.** No model, backend, database or Power BI
connection exists yet. Every figure shown in the interface is demo data.

## Running it

You need Node.js 18 or newer. Check with `node -v`.

```bash
npm install     # downloads the libraries listed in package.json
npm run dev     # starts the dev server, then open the printed localhost URL
```

`npm install` is only needed the first time (and again whenever
package.json changes). After that, `npm run dev` is all you need.

## What each tool does

| Tool | Job |
| --- | --- |
| React | Builds the interface out of reusable components |
| Vite | Runs the dev server and rebuilds instantly as you save |
| Tailwind CSS | Styling written as small classes directly in the markup |
| React Router | Maps URLs to pages, so the sidebar links work |
| Lucide React | The icon set |

## Folder structure

```
src/
  components/   reusable pieces shared across pages
  pages/        one file per screen in the sidebar
  data/         mock data — the only files a backend will ever replace
  index.css     colours, fonts, shared styles
  App.jsx       URL -> page routing
  main.jsx      starts the app
```

## The rule that matters

Components never contain hard-coded data, and data files never contain
UI. When the Python backend is ready, files in `src/data/` are swapped
for API calls and no component has to be rewritten.
