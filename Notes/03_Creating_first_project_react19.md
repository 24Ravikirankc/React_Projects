# Creating Your First React 19 Project and Understanding Project Structure

## 1. Create a React 19 Project

React 19 continues the modern React approach with server-first rendering and more streamlined defaults. To create a new React 19 app, you can use a starter like `create-react-app` or a newer meta-framework such as Next.js, Remix, or Vite.

### Using Vite

1. Open a terminal in your project folder.
2. Run:
   - `npm create vite@latest my-react19-app -- --template react`
3. Enter the project folder:
   - `cd my-react19-app`
4. Install dependencies:
   - `npm install`
5. Start the dev server:
   - `npm run dev`

### Using Create React App

If you prefer CRA, install it and create the project:

1. `npx create-react-app my-react19-app`
2. `cd my-react19-app`
3. `npm start`

> Note: For React 19, make sure your dependencies are set to React 19-compatible versions where available.

## 2. React 19 Packages

Your `package.json` should include these core packages:

- `react` — the core library for building UI components.
- `react-dom` — the DOM renderer for browser environments.

For React 19 server-first or streaming features, your app may also use framework-specific packages like:

- `react-dom/client` with `createRoot`
- `@vitejs/plugin-react`
- `next` or `remix` for advanced routing and server rendering

## 3. Typical Project Structure

A starter React 19 project usually looks like this:

- `package.json` — project metadata, scripts, and dependencies.
- `public/` — static assets served directly by the dev server or build output.
- `src/` — application source code.
  - `src/main.jsx` or `src/index.jsx` — app entry point and root render logic.
  - `src/App.jsx` — main application component.
  - `src/index.css` or `src/App.css` — global and app-specific styles.
  - `src/components/` — reusable UI components.
  - `src/routes/` or `src/pages/` — optional, framework-dependent routing files.
- `vite.config.js` or `vite.config.ts` — Vite configuration.
- `README.md` — project documentation.

## 4. Understanding the App Entry Point

In React 19, the entry file usually creates the app root and mounts the root component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

Key points:

- `ReactDOM.createRoot` initializes the new React rendering root.
- `root.render(<App />)` mounts the root component into the DOM.
- Styles are often imported at the entry point so they load globally.

## 5. App Component Structure

`src/App.jsx` is the main component and typically contains the app shell:

```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React 19</h1>
      </header>
    </div>
  );
}

export default App;
```

This component can import child components and manage app-wide state.

## 6. Recommended Folder Layout

For maintainability, organize code by feature or responsibility:

- `src/components/` — reusable UI components.
- `src/hooks/` — custom hooks.
- `src/utils/` — utility functions.
- `src/styles/` — CSS or styling modules.
- `src/assets/` — images, fonts, and static resources.
- `src/data/` — local data or constants.

## 7. Understanding React 19 Project Concepts

- **Component-driven UI:** Build UIs from small, reusable components.
- **Declarative rendering:** Describe what the UI should look like, and React updates the DOM.
- **Client entry point:** `src/main.jsx` or `src/index.jsx` is the browser startup file.
- **State and hooks:** Use `useState`, `useEffect`, and other hooks inside function components.
- **Server-first patterns:** React 19 is optimized for server-rendered and streaming UI, especially when used with frameworks like Next.js.

## 8. Next Steps

- Add a `components/` folder and create a simple reusable component.
- Use `App.jsx` to compose the page layout.
- Explore React 19 features like nested transitions, suspense, or server components in the framework you choose.

This gives you a solid starting point for creating and understanding a React 19 project structure.