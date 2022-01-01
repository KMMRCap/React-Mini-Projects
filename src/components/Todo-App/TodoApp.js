import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { v4 as uuid } from "uuid";

const TodoApp = () => {

    const [todos, setTodos] = useState([])
    const [todoText, setTodoText] = useState('')

    useEffect(() => {
        let savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAddTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            todoText,
            checked: false,
            id: uuid(),
            time: Date.now()
        }
        setTodos([...todos, newTodo])
        setTodoText('')
    }

    const handleCheckTodo = (item) => {
        const notChecked = todos.filter((todo) => todo.id !== item.id);
        const newTodo = {
            todoText: item.todoText,
            checked: !item.checked,
            id: item.id,
            time: item.time
        }
        const sortNewTodos = [...notChecked, newTodo]
        setTodos(sortNewTodos.sort((a, b) => a.time - b.time))
    }

    const handleDeleteTodo = (item) => {
        const deleted = todos.filter((todo) => todo.id !== item.id)
        setTodos([...deleted])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <main className='todo-app'>
            <form onSubmit={(e) => handleAddTodo(e)}>
                <input
                    type='text'
                    placeholder='Your Todo'
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)} />
                <input type='submit' value='Add' />
            </form>
            {todos.map((item) => (
                <TodoCard
                    key={item.id}
                    text={item.todoText}
                    checked={item.checked}
                    setCheck={() => handleCheckTodo(item)}
                    delete={() => handleDeleteTodo(item)} />
            ))}
        </main>
    );
}

export default TodoApp;