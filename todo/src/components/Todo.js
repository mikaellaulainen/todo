import { useState } from "react"
import todoService from '../services/todos'

const Todo = ({todo}) => {
  const [isDone,setDone] = useState(todo.done)
  
  const markAsDone = (e) => {
    e.preventDefault()
    const updatedTodo= {...todo, done: true}
    console.log(updatedTodo)
    todoService.update(todo.id,updatedTodo).then(returnedTodo => {
      console.log(returnedTodo.done)
      setDone(returnedTodo.done)
    })
    .catch(error => {
      console.log(error)
    })

  }
  if(isDone){
    return (
      <div className="todo-done">{isDone}<p className="todo-text">{todo.todo}</p></div>
    )
  }else{
    return(
      <div className="todo"><p className="todo-text">{todo.todo}</p><button onClick={markAsDone} className="btn">Done</button></div>
    )
  }

}

export default Todo