# Rendering Dynamic Values from an Array

In React, rendering dynamic values from an array is a common pattern. You typically use the array `.map()` method to transform each item into JSX. This makes it easy to render lists, menus, cards, tables, and other repeated UI structures.

## 1. Basic Array Rendering

```jsx
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
```

Key points:

- Use `.map()` to create an array of JSX elements.
- Add a `key` prop to each rendered item.
- `key` should be unique and stable for each element.
- The `key` prop is used internally by React to track item identity between renders. It helps React re-use existing DOM nodes instead of recreating them when the list changes.

## 2. Rendering Objects from an Array

Arrays often contain objects with multiple properties. Use destructuring to render each property.

```jsx
function UsersList() {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  return (
    <div>
      {users.map(({ id, name, email }) => (
        <div key={id} className="user-card">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      ))}
    </div>
  );
}
```

## 3. Using Index as a Key

Avoid using the array index as the `key` when the list can change order or items can be inserted or removed. Use a stable ID instead.

```jsx
// Not recommended when list changes
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

Better:

```jsx
{items.map((item) => (
  <li key={item.id}>{item.text}</li>
))}
```

## 4. Conditional Rendering Inside map()

You can filter or conditionally render elements while mapping an array.

```jsx
function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) =>
        task.completed ? null : (
          <li key={task.id}>{task.title}</li>
        )
      )}
    </ul>
  );
}
```

Or filter first:

```jsx
const activeTasks = tasks.filter((task) => !task.completed);
return (
  <ul>
    {activeTasks.map((task) => (
      <li key={task.id}>{task.title}</li>
    ))}
  </ul>
);
```

## 5. Rendering Nested Arrays

When an array contains nested arrays, use multiple `.map()` calls.

```jsx
function Menu({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <section key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
```

## 6. Rendering Components from Data

You can also render separate component instances from array data.

```jsx
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <p>${product.price}</p>
    </div>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

## 7. Dynamic Rendering with State

Use state to render arrays that can change over time.

```jsx
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Write notes' },
    { id: 2, text: 'Review React' },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

## 8. Summary

- Use `.map()` to transform array items into JSX.
- Supply a unique `key` prop on each item.
- Prefer stable IDs over array indexes.
- Combine with conditional rendering and nested arrays for complex UI.
- Render components from array data for cleaner code and better reuse.

This is the standard way to render dynamic values from arrays in React.