# Container Presenter Pattern (React + TypeScript)

This project demonstrates the **Container/Presenter pattern** using a small user dashboard.

## What this pattern means

- **Container (`UserContainer`)** handles logic and data.
- **Presenter (`UserPresenter`)** handles UI rendering only.

The goal is to keep business logic separate from visual components so code is easier to read, test, and maintain.

## Project flow

1. `UserContainer` fetches users from `https://jsonplaceholder.typicode.com/users`.
2. It manages state like `users`, `search`, `selectedUser`, `loading`, and `error`.
3. It filters users based on search input.
4. It passes prepared data and handlers as props to `UserPresenter`.
5. `UserPresenter` renders the list, search box, and selected user details.

## Folder structure

```text
src/
  components/
    UserContainer.tsx   # data + state + handlers
    UserPresenter.tsx   # pure UI from props
  types/
    types.ts            # shared User type
  App.tsx               # lazy-loads UserContainer
```

## Why this pattern is useful

- Better separation of concerns
- Easier UI reuse
- Cleaner testing strategy
- Simpler future refactoring

## Run locally

```bash
npm install
npm run start
```

Then open the local Vite URL shown in the terminal.

## Notes

- Data source: JSONPlaceholder (mock API)
- `React.lazy` + `Suspense` is used for component-level lazy loading

## Pros and Cons

### Pros

- Clear separation of concerns
- Easier to read and maintain
- Easier to refactor later
- Presenter components are easy to test

### Cons

- Adds extra files and structure
- Can lead to prop drilling if overused
- Not ideal for very small components

## When to use this pattern

- When UI and business logic are both growing
- When multiple UIs may reuse the same logic
- When you want cleaner component testing and maintenance

## When not to use this pattern

- For tiny, single-purpose components
- For quick prototypes where added structure slows you down
- When logic and UI are too simple to justify separation
