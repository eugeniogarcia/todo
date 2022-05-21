import { FC, useEffect, memo } from 'react'

interface Propiedades {
    id: number
    task: string
    handleDelete?: any
}

const Task: FC<Propiedades> = ({ id, task, handleDelete }) => {
    useEffect(() => {
        console.log('Rendering <Task />', task)
    })

    if (handleDelete){
        return (
            <li>{task} <button onClick={() => handleDelete(id)}>X</button></li>
        )
    }
    else{
        return (
            <li>{task}</li>
        )
    }
}
export default memo(Task)