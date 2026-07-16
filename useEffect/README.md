# Mastering useEffect In React: Real Use Cases With Practical Examples

`useEffect` is one of the most powerful hooks in React, and also one of the most misunderstood.

Many developers try to use it everywhere. The better approach is simple:

- Use `useEffect` to synchronize React with external systems.
- Do not use `useEffect` for values you can calculate during render.

This project demonstrates practical use cases with working examples in the UI.

## What Is useEffect?

`useEffect` lets you run side effects after React renders.

A side effect is work that reaches outside pure rendering logic. Examples:

- HTTP requests
- Browser APIs (`document.title`, `localStorage`)
- Event listeners
- Timers (`setInterval`, `setTimeout`)
- Subscriptions or sockets

Basic shape:

```jsx
useEffect(() => {
	// side effect logic

	return () => {
		// optional cleanup
	}
}, [dependencies])
```

## How Dependency Arrays Change Behavior

### 1. No dependency array

```jsx
useEffect(() => {
	console.log('runs after every render')
})
```

Use this rarely.

### 2. Empty dependency array `[]`

```jsx
useEffect(() => {
	console.log('runs once after initial render')
}, [])
```

Good for one-time setup.

### 3. Specific dependencies `[value]`

```jsx
useEffect(() => {
	console.log('runs when value changes')
}, [value])
```

Most common and usually best.

## Real useEffect Use Cases In This App

## 1) Run Once On Mount

Use case: initial setup after component appears.

Example in app: delayed welcome message set once.

When to use:

- Initial analytics event
- Startup data request
- First-time environment checks

## 2) React To State/Prop Changes

Use case: synchronize external APIs with changing state.

Example in app: update browser tab title when counter changes.

When to use:

- Keep title or URL in sync
- Trigger dependent API request on filter changes

## 3) Cleanup Side Effects

Use case: prevent memory leaks and stale subscriptions.

Example in app: running timer with `setInterval`, cleaned on unmount.

When to use cleanup:

- `clearInterval`, `clearTimeout`
- `removeEventListener`
- `unsubscribe` from sockets/streams
- cancel in-flight async work

## 4) Debounce User Input

Use case: reduce expensive actions on every keystroke.

Example in app: input value is debounced by 500ms before updating output.

When to use:

- Search boxes
- Auto-save forms
- Costly filtering operations

## 5) Fetch Data On Component Load

Use case: get server data after render.

Example in app: fetch users from JSONPlaceholder and show loading/error states.

Best practice included in app:

- `AbortController` is used to cancel request during unmount.

## 6) Persist State To localStorage

Use case: preserve user preferences between refreshes.

Example in app:

- Read stored name during initial state setup.
- Write updated name to `localStorage` when it changes.

When to use:

- Theme preference
- Last selected filter
- Draft form values

## When You Should NOT Use useEffect

Avoid `useEffect` when you can compute directly while rendering.

Bad pattern:

```jsx
const [fullName, setFullName] = useState('')

useEffect(() => {
	setFullName(`${firstName} ${lastName}`)
}, [firstName, lastName])
```

Better:

```jsx
const fullName = `${firstName} ${lastName}`
```

Why? Less state, fewer renders, simpler code.

## Common Mistakes With useEffect

1. Missing dependencies, causing stale values.
2. Putting everything in one big effect.
3. Updating state in loops without guard conditions.
4. Forgetting cleanup for listeners/timers.
5. Using effects for pure calculations.

## Quick Rules To Decide

Use this checklist:

1. Does this logic touch anything outside React render?
2. Does it need to happen after DOM paint/state commit?
3. Do I need cleanup when component unmounts or values change?

If yes, `useEffect` is likely appropriate.

## Project Setup

Install dependencies:

```bash
npm install
```

Run in development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Final Thoughts

Think of `useEffect` as a synchronization hook, not a data-transformation hook.

If your value can be derived from existing props/state, compute it in render.
If your logic needs browser APIs, timers, subscriptions, or network requests, reach for `useEffect` with the right dependencies and cleanup.

That single mindset shift dramatically improves React code quality.
