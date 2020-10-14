import React, { useState, useRef } from 'react';
import TodoList from './todoList';

function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(event) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div> 0 left to do</div>
    </>
  )
}

export default App;
