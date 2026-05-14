# Error Boundary Dashboard

This is a small React project made to understand the Error Boundary pattern.

The main idea is simple: if one part of the UI breaks, the full app should not crash. The `ErrorBoundary` component catches the error and shows a fallback screen.

## What We Have Done

- Created an `ErrorBoundary` component.
- Created a `Dashboard` component.
- Added two dashboard sections:
  - `FinancialOverview`
  - `TodaysEarning`
- Wrapped the dashboard with `ErrorBoundary` inside `App.tsx`.

## Project Meaning

This project shows how we can make React apps safer.

In real apps, sometimes a component can fail because of bad data or some code issue. Error Boundary helps us handle that problem in a better way.

Instead of showing a blank screen, we can show a simple fallback UI and keep the app user friendly.

## Files

- `src/components/ErrorBoundary.tsx` handles UI errors.
- `src/components/Dashboard.tsx` shows the main dashboard.
- `src/components/FinancialOverview.tsx` shows financial stats.
- `src/components/TodaysEarning.tsx` shows today's earning.
- `src/App.css` contains the dashboard styling.

## Run Project

Install dependencies:

```bash
npm install
```

Start the project:

```bash
npm run dev
```
