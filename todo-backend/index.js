require('dotenv').config()
const express = require('express')
const app= express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const Todo=require('./models/todo')

app.get('/', (req,res) => {
  res.send('<h1>Hello world</h1>')
})

app.get('/api/todos', (request, response) => {
  Todo.find({}).then(todos => {
    response.json(todos)
  })
})

app.get('/api/todos/:id', async (req,res) => {
  const todo= await Todo.findById(req.params.id)

  if(todo) {
    res.json(todo.toJSON())
  } else{
    res.status(404).end()
  }
})

app.post('/api/todos',(req,res) => {
  const todo= new Todo({
    todo: req.body.todo,
    done: req.body.done
  })
  todo.save().then(savedTodo => {
    res.json(savedTodo)
  })
    .catch(error => {next(error)})
})

app.put('/api/todos/:id',async (req,res) =>{
  const body=req.body

  const todo={
    todo: body.todo,
    done: body.done
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, todo, {new: true})
  console.log(updatedTodo)
  res.json(updatedTodo)
})

app.listen(3003, () => {
  console.log(`Server Running`)
})