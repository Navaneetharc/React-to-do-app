import React, {useState} from 'react'
import './TodoInput.css'

type Props = {
    onAdd: (text: string) => void
}

export default function TodoInput({onAdd}: Props){
    const [value, setValue] = useState('')

    function submit(e?: React.FormEvent){
        e?.preventDefault()
        if(!value.trim()) return
        onAdd(value)
        setValue('')
    }

    return(
        <form className="todo-input" onSubmit={submit}>
            <input 
            className="todo-inputField"
            placeholder="Add a new task BOSS - e.g. '1000 pushups'"
            value={value}
            onChange={e => setValue(e.target.value)}
            aria-label="New task"
            />
            <button type="submit" className="todo-inputAdd">Add</button>
        </form>
    )
}