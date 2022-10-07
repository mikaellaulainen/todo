import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'

import todoService from './services/todos'

const App = () => {
  const [todos,setTodos] = useState([])

  useEffect(() => {
    todoService.getAll().then(todos =>
      setTodos(todos)
      )
  }, [])

  const addTodo= (todoObject) => {
    todoService.create(todoObject).then(returnedTodo => {
      setTodos(todos.concat(returnedTodo))
    })
  }
  return(
    <div>
      <h1>Todo App</h1>
      <TodoForm createTodo={addTodo} todos={todos}/>
    </div>
  )
}

export default App