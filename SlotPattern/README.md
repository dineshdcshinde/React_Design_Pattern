# Slot Pattern in React

This project shows the **Slot Pattern** in a simple way.

Instead of hardcoding everything inside a component, you keep a reusable container and pass different UI parts (slots) from outside.

## What is Slot Pattern?

A slot is a place inside a component where parent components can inject custom content.

You can think like this:
- Container gives structure.
- Parent decides what goes inside each part.

This makes components flexible and easier to reuse.

## Slot Types Used Here

### 1) Explicit Slots (`CardContainer`)
In `src/components/CardContainer.tsx`, the component has fixed slot props:
- `header`
- `body`
- `footer`

In `src/App.tsx`, these are passed as JSX values.

### 2) Named Slots (`ConfirmContainer`)
In `src/components/ConfirmContainer.tsx`, the component receives named UI parts:
- `title`
- `message`
- `primaryAction`
- `secondaryAction`

This lets you swap buttons and content without changing the container logic.

## How to Understand This Project Quickly

1. Open `src/App.tsx` and see what props are passed to each container.
2. Open `src/components/CardContainer.tsx` and match props to render positions.
3. Open `src/components/ConfirmContainer.tsx` and observe how action slots are rendered.
4. Run the app and change the slot content in `App.tsx` to see reuse in action.

## Why This Pattern Helps

- Better reusability
- Cleaner separation of structure vs content
- Easy customization without duplicating component code

## Run

```bash
npm install
npm run dev
```

