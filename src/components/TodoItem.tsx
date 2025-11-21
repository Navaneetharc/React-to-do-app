import {useState, useRef, useEffect} from "react"
import type { Task } from "../types"
import './TodoItem.css'

type Props = {
    task: Task
    onDelete: (id: string) => void
    onToggle: (id: string) => void
    onEdit: (id: string, newText: string) => void
}

export default function TodoItem({ task, onDelete, onToggle,onEdit}: Props) {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(task.text)
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if(editing) inputRef.current?.focus()
    }, [editing])

    function save() {
        const trimmed = value.trim()
        if(!trimmed) return
        if(trimmed === task.text){
            setEditing(false)
            return
        }
        onEdit(task.id, trimmed)
        setEditing(false)
    }

    return (
       <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
        <label className="todo-itemLeft">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                aria-label={`Mark ${task.text} as completed`}
                />
        </label>

        <div className="todo-itemMiddle">
            {editing ? (
                <input
                ref={inputRef}
                className="todo-itemEdit"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') save(); if (e.key === 'Escape') { setEditing(false); setValue(task.text); } }}
                />
            ) : (
                <span className="todo-itemText">{task.text}</span>
            )}
        </div>
        <div className="todo-itemActions">
            {editing ? (
                <>
                    <button className="btn" onClick={save}>Save</button>
                    <button className="btn btn--muted" onClick={() => { setEditing(false); setValue(task.text); }}>Cancel</button>
                </>
            ) : (
                <>
                    <button className="btn" onClick={() => setEditing(true)}>Edit</button>
                    <button className="btn btn--danger" onClick={() => onDelete(task.id)}>Delete</button>
                </>
            )}
        </div>
       </div>
    )
}