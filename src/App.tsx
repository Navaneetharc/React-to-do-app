import {useState} from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import type { Task } from './types'
import { normalizeTaskText, uid } from './utils'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

export default function App(){
    const [tasks, setTasks] = useState<Task[]>([])

    function handleAdd(text: string){
        const norm = normalizeTaskText(text)
        if(!norm) return

        const exists = tasks.some(t => normalizeTaskText(t.text) === norm)
        if(exists) return toast.error("Task already exists")

        const newTask : Task = {id: uid(), text: text.trim(), completed: false}
        setTasks(prev => [newTask, ...prev])
        toast.success("Task added")
    }

    function handleDelete(id: string){
        setTasks(prev => prev.filter(t => t.id !== id))
        toast.success("Task deleted")
    }

    function handleToggle(id: string){
        setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t))
    }

    function handleEdit(id: string, newText: string){
        const norm = normalizeTaskText(newText)
        if(!norm) return

        const exists = tasks.some(t => t.id !== id && normalizeTaskText(t.text) === norm)
        if(exists) return toast.error("Task already exists")

        setTasks(prev => prev.map(t => t.id === id ? {...t, text: newText.trim() } : t))
        toast.success("Task updated")
    }

    return(
        <div className='app-container'>
            <div className='app-header'>
                <div>
                    <h1>TaskFlow ,Stay Ahead</h1>
                    <div className='small-muted'>“Small tasks done consistently turn into massive results.”</div>
                </div>
            </div>
            <TodoInput onAdd={handleAdd}/>
            <TodoList
                tasks={tasks}
                onDelete={handleDelete}
                onToggle={handleToggle}
                onEdit={handleEdit}
            />
        </div>
    )
}
