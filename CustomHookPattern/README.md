# Custom Hook Pattern (React)

This project demonstrates the **Custom Hook Pattern** in React with simple, reusable examples.

## What is a Custom Hook?
A custom hook is a function (starting with `use`) that extracts reusable stateful logic from components.

## Why use it?
- Keeps components clean and focused on UI.
- Reuses logic across multiple components.
- Improves readability and maintainability.

## Included examples
- `useToggle`: Encapsulates boolean toggle logic (`ON`/`OFF`).
- `useDebounce`: Delays updates to a value to reduce frequent re-renders (useful for search inputs).

## Project structure
- `src/hooks/` contains reusable custom hooks.
- `src/components/` contains UI components that consume those hooks.

## Run locally
```bash
npm install
npm run dev
```
