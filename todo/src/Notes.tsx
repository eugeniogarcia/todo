import { useReducer, useState, FormEventHandler, FormEvent } from 'react'

type Note = {
    id: number
    note: string
}

const initialNotes: Note[] = [
    {
        id: 1,
        note: 'Note 1'
    },
    {
        id: 2,
        note: 'Note 2'
    }
]

type Action = {
    type: string
    payload?: any
}

type ActionTypes = {
    ADD: 'ADD'
    UPDATE: 'UPDATE'
    DELETE: 'DELETE'
}

const actionType: ActionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE'
}

const reducer = (state: Note[], action: Action) => {
    switch (action.type) {
        case actionType.ADD:
            return [...state, action.payload]
        case actionType.DELETE:
            return state.filter(note => note.id !== action.payload)
        case actionType.UPDATE:
            const updatedNote = action.payload
            return state.map((n: Note) => n.id === updatedNote.id ?
                updatedNote : n)
        default:
            return state
    }
}

const Notes = () => {
    const [notes, dispatch] = useReducer(reducer, initialNotes)
    const [note, setNote] = useState('')
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newNote = {
            id: Date.now(),
            note
        }
        dispatch({ type: actionType.ADD, payload: newNote })
    }       
    return (
        <div>
        <h2>Notes</h2>
        <ul>
            {notes.map((nota) => (
            <li key={nota.id}>{nota.note}{' '}
                <button
                    onClick={() => dispatch({
                        type: actionType.DELETE,
                        payload: nota.id //el id de la nota
                    })}
                >X</button>
                <button
                    onClick={() => dispatch({
                        type: actionType.UPDATE,
                        payload: { ...nota, note } //Mantiene el mismo id
                    })}
                >Update</button>
            </li>
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="New note"
                value={note}
                onChange={e => setNote(e.target.value)}
            />
            <button type="submit">Crea</button>
        </form>
        </div>
    )
}

export default Notes