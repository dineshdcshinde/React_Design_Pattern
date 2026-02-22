# Compound Components Pattern (React + Typescript)

Compound Components let you split a big component into small, named parts so users can compose UI freely without adding new props every time.

This project shows two ways to build a modal.

## Current examples

1. `src/messy-comp/Modal.tsx`

- A prop-driven modal (`header`, `body`, `actions`, `confirmAction`, etc.).
- It works, but it can grow into prop soup when new UI variations are needed.

2. `src/with-pattern/ModalWithPattern.tsx`

- A compound API: `ModalWithPattern.Header`, `ModalWithPattern.Body`, `ModalWithPattern.Footer`.
- Consumers can pass their own JSX inside each section.
- Styling stays inside modal components, so consumers focus on business logic.

## Why this pattern helps

- Avoids adding a new prop for every new layout need.
- Gives users freedom to compose UI the way they want.
- Keeps reusable structure and CSS in one place.
- Works well for highly customizable components.

## Example usage

`src/App.tsx` uses:

- `ModalWithPattern`
- `CreateUserForm` in the body
- Custom footer buttons with submit/cancel logic
