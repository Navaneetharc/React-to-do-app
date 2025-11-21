// import React from "react"
import type { Task } from "../types"
import TodoItem from "./TodoItem"
import'./TodoList.css'

type Props = {
    tasks: Task[]
    onDelete: (id: string) => void
    onToggle: (id: string) => void
    onEdit: (id: string, newText: string) => void
}

export default function TodoList({tasks, onDelete, onToggle, onEdit}: Props){
    if(tasks.length === 0){
        return <div className="todo-listEmpty">No tasks yet - add your first task BOSS.</div>
    }

    return(
        <ul className="todo-list">
            {tasks.map(tasks => (
                <li key={tasks.id}>
                    <TodoItem task={tasks} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
                </li>
            ))}
        </ul>
    )
}