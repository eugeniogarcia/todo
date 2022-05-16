// Dependencies
import { useState, useEffect, useMemo, useCallback} from 'react'

// Components
import List, { Todo } from './List'
import Notes from './Notes'

const initialTodos: Todo[] = [ //Tareas iniciales
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
]

function App() {
  const [task, setTask] = useState('') //Tarea
  const [todoList, setTodoList] = useState(initialTodos) //Lista de tareas
  const [term, setTerm] = useState('')//Busqueda

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

  const handleSearch = () => {
    setTerm(task)
  }

  const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
    setTodoList(newTodoList)
  }, [todoList])
  
  const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
    console.log('Filtering...')
    return todo.task.toLowerCase().includes(term.toLowerCase())
  }), [term, todoList])


  return (
    <>
      <h2>To-Do's</h2>
      <input
        placeholder='Tarea'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={filteredTodoList}  />
      <List todoList={todoList} handleDelete={handleDelete}/>
      <Notes />
    </>
  )
}
export default App