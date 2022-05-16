import { FC, useEffect } from 'react'

interface Propiedades {
    id: number
    task: string
}

const Task: FC<Propiedades> = ({ task }) => {
    useEffect(() => {
        console.log('Rendering <Task />', task)
    })
    return (
        <li>{task}</li>
    )
}
export default Task