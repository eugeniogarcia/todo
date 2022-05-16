// Dependencies
import { FC, useEffect } from 'react'
// Components
import Task from './Task'

// Types
export type Todo = {
    id: number
    task: string
}

interface Propiedades {
    todoList: Todo[]
}
const List: FC<Propiedades> = ({ todoList }) => {
    useEffect(() => {
        // This effect is executed every new render
        console.log('Rendering <List />')
    })
    return (
        <ul>
            {todoList.map((todo: Todo) => (
                <Task key={todo.id} id={todo.id} task={todo.task} />
            ))}
        </ul>
    )
}
export default List