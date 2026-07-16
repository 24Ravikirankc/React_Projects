import { useMemo, useState } from 'react'

function ArrayStateforTask() {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Read React docs for 15 minutes', done: false },
    { id: 2, title: 'Build one tiny practice component', done: true },
  ])
  const [query, setQuery] = useState('')

  const filteredTasks = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) {
      return tasks
    }
    return tasks.filter((task) => task.title.toLowerCase().includes(value))
  }, [query, tasks])

  const completedTasks = tasks.filter((task) => task.done).length

  const handleAddTask = (event) => {
    event.preventDefault()
    const title = taskInput.trim()
    if (!title) {
      return
    }

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        done: false,
      },
    ])
    setTaskInput('')
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <article className="card wide">
      <h2>4) Array State for Task List</h2>
      <p>
        Arrays are ideal for dynamic lists. Always create a new array with
        map/filter/spread instead of mutating.
      </p>
      <form onSubmit={handleAddTask} className="taskForm">
        <input
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <label className="searchLabel">
        Search tasks
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try: react"
        />
      </label>

      <p className="stats">
        Completed: {completedTasks} / {tasks.length}
      </p>

      <ul className="taskList">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <button type="button" onClick={() => toggleTask(task.id)}>
              {task.done ? 'Undo' : 'Done'}
            </button>
            <span className={task.done ? 'done' : ''}>{task.title}</span>
            <button type="button" onClick={() => removeTask(task.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ArrayStateforTask
