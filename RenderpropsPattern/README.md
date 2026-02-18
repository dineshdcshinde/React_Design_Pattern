# Render Props Pattern (React)

This project shows the **Render Props** pattern in a very simple permission-check flow.

## Pattern in Short

A component shares behavior and state, and lets the parent decide **what UI to render** by passing a function prop (usually named `render` or `children`).

In short:
- container handles logic
- parent controls presentation
- both stay reusable

## Our Example in Short

`PermissionGateComponent` does one job: checks whether a user is allowed.
- If allowed, it calls `render(user)` and the parent decides the success UI.
- If denied, it shows a fallback message.

So the permission logic stays centralized, while the output UI can change per use case.

## Why This Is Useful

- Keeps business logic out of page-level JSX.
- Makes the gate reusable across multiple screens.
- Avoids duplicating permission checks.

## Going Beyond This Demo

You can scale this pattern by:
- supporting multiple roles/permissions (not just `Guest`)
- passing extra data to `render` (`isAllowed`, `reason`, `loading`)
- adding async permission checks (API-based access control)
- composing with route protection and feature flags

## Run the Project

```bash
npm install
npm run dev
```
