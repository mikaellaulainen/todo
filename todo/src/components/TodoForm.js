import { useState } from "react"
import Todo from "./Todo"

const TodoForm = ({createTodo,todos}) => {
  const [todo,setTodo]= useState('')

  const handleTodo= (e) => {
    setTodo(e.target.value)
  }
  const addTodo=(event) => {
    event.preventDefault()
    createTodo({
      todo:todo,
      done:false
    })
    setTodo('')
  }
  return (
    <div className="add-todo">
      <form onSubmit={addTodo}>
        <p className="todo-form">
          <input className="input" type="text" value={todo} placeholder="Write something to do here:" onChange={handleTodo}/>
          <button className="add-btn">Add</button>
        </p>
      </form>
        <div className="todos">
          {todos.map(todo =>
              <Todo key={todo.id} todo={todo}/>
              )}
        </div>
    </div>
  )
}

export default TodoForm