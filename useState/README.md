# Mastering useState in React: Real Use Cases You Will Build

React is all about interactive UI. Buttons, forms, filters, toggles, and dynamic lists all need data that can change over time.

That is exactly where useState fits.

This project is a practical guide to using useState in real features, not toy examples only. It includes a running React app and this complete blog-style walkthrough.

## What is useState?

useState is a React Hook that lets a function component hold and update local state.

In plain language:

- State is data that can change.
- When state changes, React re-renders the component.
- The UI updates automatically.

Syntax:

```jsx
const [value, setValue] = useState(initialValue)
```

- value: the current state
- setValue: function to update state
- initialValue: initial value when component first renders

## When should you use useState?

Use useState when:

- Data is local to a component.
- Data changes from user interaction or async results.
- UI must re-render when data changes.

Common examples:

- Counter value
- Open/close panels
- Active tab
- Input and form values
- List add/edit/remove actions
- Search and filters

Avoid useState when:

- Value never changes (use a plain constant).
- Value can be derived directly from existing props/state each render.
- Complex multi-step state logic becomes difficult to maintain (consider useReducer).

## Project Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Use Case 1: Counter (number state)

This is the classic example, but still useful in real apps for quantities, ratings, steps, or pagination index.

```jsx
const [count, setCount] = useState(0)

const increment = () => setCount((prev) => prev + 1)
const decrement = () => setCount((prev) => prev - 1)
const reset = () => setCount(0)
```

Important:

- Prefer functional updates when next state depends on previous state.
- This prevents stale state issues in queued updates.

## Use Case 2: Toggle state (boolean)

Use boolean state for yes/no UI transitions.

Examples:

- Modal open/closed
- Sidebar expanded/collapsed
- Dark mode on/off
- Online/offline indicators

```jsx
const [isOnline, setIsOnline] = useState(false)

const toggleStatus = () => setIsOnline((prev) => !prev)
```

Why useState here:

- Simple and predictable.
- Easy to attach to button clicks and conditional rendering.

## Use Case 3: Form state (object)

When form fields belong together, using one object state is clean and scalable.

```jsx
const [profile, setProfile] = useState({
  name: '',
  role: '',
  bio: '',
})

const handleChange = (event) => {
  const { name, value } = event.target
  setProfile((prev) => ({ ...prev, [name]: value }))
}
```

Why spread operator matters:

- React state should be treated as immutable.
- You create a new object instead of mutating the old one.

## Use Case 4: Dynamic list state (array)

Lists are common in product UIs: todos, tags, cart items, comments.

### Add an item

```jsx
setTasks((prev) => [...prev, { id: Date.now(), title, done: false }])
```

### Toggle an item

```jsx
setTasks((prev) =>
  prev.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task,
  ),
)
```

### Remove an item

```jsx
setTasks((prev) => prev.filter((task) => task.id !== id))
```

Why this pattern works:

- map, filter, and spread return new arrays.
- React sees a new reference and updates efficiently.

## Use Case 5: Search and filtering

Search query is another local interactive state.

```jsx
const [query, setQuery] = useState('')

const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(query.toLowerCase()),
)
```

This demonstrates a useful pattern:

- Keep the source list in state.
- Keep search input in state.
- Derive filtered data from both.

## Practical rules for useState

1. Keep state minimal.
2. Do not store duplicated derived values unless needed.
3. Never mutate arrays or objects directly.
4. Use functional updates for previous-state-based logic.
5. Split state by concern for readability.

## Common mistakes and fixes

Mistake: Mutating existing object or array.

```jsx
// Wrong
profile.name = 'Aisha'
setProfile(profile)
```

Fix:

```jsx
setProfile((prev) => ({ ...prev, name: 'Aisha' }))
```

Mistake: Using stale count in chained updates.

```jsx
// Risky in some scenarios
setCount(count + 1)
setCount(count + 1)
```

Fix:

```jsx
setCount((prev) => prev + 1)
setCount((prev) => prev + 1)
```

## useState vs useReducer

Choose useState when:

- Logic is straightforward.
- Few transitions.
- Small to medium local state.

Choose useReducer when:

- State transitions are complex.
- Many action types are needed.
- You want central transition logic.

## Final thoughts

If you are building interactive React interfaces, useState is your first tool. It is simple, powerful, and enough for many real-world components.

This project demonstrates practical, production-relevant scenarios:

- Number state
- Boolean toggle
- Form object state
- Dynamic array state
- Search/filter state

Master these five patterns and most everyday React state tasks become easy to design and maintain.

---

If you want, next step can be extending this same app with:

- persisted state in localStorage
- async loading state
- migration of one section from useState to useReducer for comparison
