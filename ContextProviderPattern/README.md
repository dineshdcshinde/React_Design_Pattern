# Context Provider Pattern

This example shows how to share user data with **Context Provider** and read it with a **custom hook**.

## Flow

```tsx
<UserProvider>
  <UserDashboard />
</UserProvider>
```

`UserProvider` stores the data.  
`UserDashboard` reads it with:

```tsx
const { userData } = useUserData();
```

## Why This Is Useful

- Avoids passing the same props through many components.
- Keeps shared data in one place.
- Makes components cleaner.
- The custom hook hides `useContext` and gives one safe way to read the data.

## Important Pitfall

The hook can be imported anywhere, but the data only exists inside `UserProvider`.

This works:

```tsx
<UserProvider>
  <UserDashboard />
</UserProvider>
```

This is wrong:

```tsx
<UserDashboard />
```

So `useUserData` throws an error if it is used outside `UserProvider`.

## Error Boundary

An error boundary is used so one broken part of the UI does not crash the complete app.

```tsx
<ErrorBoundary fallback={<p>User data is unavailable outside UserProvider.</p>}>
  <MissingProviderExample />
</ErrorBoundary>
```

## Props vs Context

Use **props** when data goes from parent to direct child.

Use **context** when many components need the same shared data.

Simple rule:

- Small/local data: props
- Shared/app-level data: context
