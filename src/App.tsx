// Dependencies
import { useState, useEffect, useMemo, useCallback } from 'react'

// Components
import List, { Todo } from './List'

const initialTodos: Todo[] = [ //Tareas iniciales
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]

function App() {
  const [todoList, setTodoList] = useState(initialTodos) //Lista de tareas
  const [task, setTask] = useState('') //Tarea

  useEffect(() => {
    console.log('Rendering <App />')
  })

  const handleCreate = () => { //Añade una tarea a la lista de tareas
    const newTodo = {
      id: Date.now(),
      task
    }
    // Pushing the new todo to the list
    setTodoList([...todoList, newTodo])
    
    // Resetting input value
    setTask('')
  }

  return (
    <>
      <input
        placeholder='Tarea'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <List todoList={todoList} />
    </>
  )
}
export default App