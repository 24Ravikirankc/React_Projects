# Creating Components from Scratch

A React component is a reusable piece of UI that returns JSX (or React elements). Components are the building blocks of React applications. Learning to create components from scratch is fundamental to React development.

## 1. What is a Component?

A component is a function or class that:

- Accepts optional input data called **props**.
- Returns JSX that describes what should be rendered to the DOM.
- May maintain internal state using **hooks** (in functional components).

In React 19, functional components with hooks are the standard approach.

## 2. Creating a Simple Functional Component

The simplest component is a function that returns JSX:

```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}

export default Greeting;
```

Key points:

- Function name starts with an uppercase letter (React convention).
- Returns JSX (HTML-like syntax inside JavaScript).
- Export the component so it can be imported elsewhere.

## 3. Using Props

Props are arguments passed to a component, allowing you to make components reusable:

```jsx
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

export default Welcome;
```

Or using destructuring (more concise):

```jsx
function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

export default Welcome;
```

Using the component:

```jsx
<Welcome name="Alice" />
<Welcome name="Bob" />
```

## 4. Component State with useState Hook

State allows components to remember data and re-render when it changes:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

Breakdown:

- `useState(0)` initializes state with a default value of `0`.
- Returns an array: `[currentValue, functionToUpdate]`.
- `setCount` updates state and triggers a re-render.

## 5. Side Effects with useEffect Hook

`useEffect` runs code after render, useful for fetching data or setting up subscriptions:

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array: runs once on mount

  return <p>Elapsed time: {time} seconds</p>;
}

export default Timer;
```

Key concepts:

- First argument: function to run.
- Second argument: **dependency array** — controls when the effect runs.
  - Empty array `[]` — runs once on mount.
  - `[value]` — runs when `value` changes.
  - No array — runs every render (avoid unless intentional).

## 6. Conditional Rendering

Display or hide JSX based on conditions:

```jsx
function Login({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please log in.</h1>;
}
```

Or using the ternary operator:

```jsx
function Login({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
  );
}
```

## 7. Rendering Lists

Use `.map()` to render a list of items:

```jsx
function TodoList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

Important: Always provide a `key` prop when rendering lists. Use a unique identifier, not the array index if possible.

## 8. Event Handling

Attach event handlers using camelCase attributes:

```jsx
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

Common events:

- `onClick` — mouse click.
- `onChange` — input value changes.
- `onSubmit` — form submission.
- `onFocus` / `onBlur` — input focus changes.

## 9. Multiple Hooks Example

Combining multiple hooks for a practical component:

```jsx
import React, { useState, useEffect } from 'react';

function SearchUsers() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
```

## 10. Component Best Practices

1. **Keep components small and focused:** Each component should do one thing well.
2. **Use descriptive names:** `UserCard`, `LoginForm`, not `Comp1`.
3. **Lift state up:** If multiple components need the same state, move it to a parent.
4. **Avoid mutating props:** Treat props as read-only.
5. **Use keys in lists:** Helps React identify which items have changed.
6. **Prop destructuring:** Makes code more readable.
7. **Comment complex logic:** Explain *why*, not *what*.

## 11. Project Structure for Components

Organize your components logically:

```
src/
├── components/
│   ├── Header.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Form/
│       ├── LoginForm.jsx
│       ├── SignupForm.jsx
│       └── FormField.jsx
├── App.jsx
└── main.jsx
```

Each component is a single file (or folder for complex components with sub-components).

## 12. Example: Building a Todo Component

```jsx
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todos</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

## 13. Summary

Creating React components from scratch involves:

- Writing a function that returns JSX.
- Accepting props to make components reusable.
- Using `useState` for state management.
- Using `useEffect` for side effects.
- Handling events and conditional rendering.
- Organizing components in a clear folder structure.

Start simple, build one component at a time, and combine them to create larger applications.

## 14. React Components: Interview Questions and Answers

### Q1: What is the difference between functional and class components?

**Answer:**

- **Functional components:** Simpler, use hooks for state and side effects. This is the modern standard in React 19.
- **Class components:** Use lifecycle methods and `this.state`. Less common now but still valid.

Example of functional (modern):
```jsx
function Button() {
  const [clicked, setClicked] = useState(false);
  return <button onClick={() => setClicked(!clicked)}>Click</button>;
}
```

Example of class (legacy):
```jsx
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  render() {
    return <button onClick={() => this.setState({ clicked: !this.state.clicked })}>Click</button>;
  }
}
```

Functional components are preferred in React 19 because they're simpler and hooks provide better code reusability.

### Q2: What are props and how are they different from state?

**Answer:**

- **Props:** Data passed *to* a component from its parent. Read-only; cannot be modified by the child.
- **State:** Data managed *inside* a component. Can be updated using setter functions.

```jsx
// Props example
function UserCard({ name, age }) { // name and age are props
  return <div>{name} is {age}</div>;
}

// State example
function Counter() {
  const [count, setCount] = useState(0); // count is state
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**Key difference:** Props flow down (parent → child), state is local to the component.

### Q3: What are hooks? Name some common hooks.

**Answer:**

Hooks are functions that let you use state and other React features in functional components.

Common hooks:

- `useState` — adds state to functional components.
- `useEffect` — runs side effects after render.
- `useContext` — accesses context values without prop drilling.
- `useReducer` — manages complex state with actions (like Redux).
- `useMemo` — memoizes a value to avoid recalculations.
- `useCallback` — memoizes a function to avoid re-creating it.
- `useRef` — creates a reference to a DOM element or value that persists across renders.

Example:
```jsx
const [count, setCount] = useState(0); // useState hook

useEffect(() => {
  console.log('Component mounted or count changed');
}, [count]); // useEffect hook
```

### Q4: What is the dependency array in useEffect?

**Answer:**

The dependency array determines when the effect runs:

- **Empty array `[]`:** Effect runs once, after the component mounts.
- **Array with values `[value1, value2]`:** Effect runs when any value in the array changes.
- **No array:** Effect runs after every render (usually avoid).

```jsx
// Runs once on mount
useEffect(() => {
  console.log('Component mounted');
}, []);

// Runs when userId changes
useEffect(() => {
  fetchUser(userId);
}, [userId]);

// Runs on every render (avoid unless necessary)
useEffect(() => {
  console.log('Re-rendered');
});
```

### Q5: How do you pass data from child to parent?

**Answer:**

You cannot directly pass data from child to parent. Instead, pass a function from parent to child via props, and the child calls that function with data:

```jsx
// Parent
function Parent() {
  const [childData, setChildData] = useState('');

  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <Child onSendData={handleChildData} />
      <p>Data from child: {childData}</p>
    </div>
  );
}

// Child
function Child({ onSendData }) {
  return (
    <button onClick={() => onSendData('Hello from Child')}>
      Send Data
    </button>
  );
}
```

### Q6: What is the key prop and why is it important?

**Answer:**

The `key` prop helps React identify which items in a list have changed. Using keys improves performance and prevents bugs:

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li> // Use unique identifier
      ))}
    </ul>
  );
}
```

**Why it matters:**

- Without proper keys, React may re-render list items incorrectly if the list is reordered.
- Avoid using array index as a key if the list can be reordered.

### Q7: What is prop drilling and how do you avoid it?

**Answer:**

**Prop drilling** is passing props through multiple levels of components even if only the deeply nested component needs them:

```jsx
// Prop drilling: passing theme through multiple levels
function App() {
  return <Parent theme="dark" />;
}

function Parent({ theme }) {
  return <Child theme={theme} />; // Theme passed but not used
}

function Child({ theme }) {
  return <GrandChild theme={theme} />;
}

function GrandChild({ theme }) {
  return <div className={theme}>Content</div>; // Finally used
}
```

**Solution: Use Context API**

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Parent />
    </ThemeContext.Provider>
  );
}

function GrandChild() {
  const theme = useContext(ThemeContext); // Direct access, no drilling
  return <div className={theme}>Content</div>;
}
```

### Q8: What is the difference between controlled and uncontrolled components?

**Answer:**

- **Controlled component:** Form input value is controlled by React state. React is the single source of truth.
- **Uncontrolled component:** Form input manages its own state. React doesn't control the value.

```jsx
// Controlled
function FormControlled() {
  const [input, setInput] = useState('');
  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type something"
    />
  );
}

// Uncontrolled
function FormUncontrolled() {
  const inputRef = useRef();
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  return (
    <>
      <input ref={inputRef} placeholder="Type something" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

**Best practice:** Use controlled components for most cases; use uncontrolled when you need to integrate with non-React code.

### Q9: How do you optimize a component's performance?

**Answer:**

- **useMemo:** Memoize expensive calculations.
- **useCallback:** Memoize functions to prevent unnecessary re-renders of child components.
- **React.memo:** Prevent component re-renders if props haven't changed.
- **Code splitting:** Lazy load components with `React.lazy`.
- **Avoid inline objects/functions:** Pass them outside the component or memoize them.

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, Child re-renders every time Parent renders
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Child Button</button>;
});
```

### Q10: What are the common mistakes when creating components?

**Answer:**

1. **Not using keys in lists:** Causes re-render bugs.
2. **Mutating state directly:** Always use setter functions.
3. **Missing dependency arrays in useEffect:** Can cause infinite loops or stale closures.
4. **Creating new functions/objects inside render:** Causes unnecessary re-renders and memory waste.
5. **Not lifting state up:** State should be at the lowest common parent.
6. **Ignoring prop types:** Use PropTypes or TypeScript for type safety.
7. **Component names not capitalized:** React won't recognize them as components.

Example of mistake:
```jsx
// Wrong: mutating state
const [user, setUser] = useState({ name: 'John' });
user.name = 'Jane'; // DON'T DO THIS

// Right: create new object
setUser({ ...user, name: 'Jane' });
```

## 15. Interview Preparation Tips

- **Know the basics:** Understand functional components, hooks, props, and state deeply.
- **Explain your code:** Be able to walk through code and explain what it does.
- **Know the trade-offs:** Be ready to discuss performance, readability, and maintainability.
- **Practice building:** Create small projects to solidify your understanding.
- **Stay current:** React evolves; React 19's focus on server components and streaming is important to know.
- **Prepare examples:** Have real or practice projects ready to discuss.