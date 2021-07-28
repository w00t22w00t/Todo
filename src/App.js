import React, { useState } from 'react';
import './App.css';
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList';


function App() {
  const data = [
    {id: 1, completed: false, title: "Позавтракать"},
    {id: 2, completed: false, title: "Сделать зарядку"},
    {id: 3, completed: false, title: "Поработать"}
  ]

  const [list, setList] = useState(data)

  function removeItem(todo, i) {
    console.log(this)
    setList(
      list.filter((item, index) => index === i ?  false :  true)
    )
  }



  function toggleTodo(todo, i) {
    console.log(this)
    setList(
      list.map((elem, index) => {
        if(i === index) {
          elem.completed = !elem.completed
        }
        return elem
      })
    )
    
  }

  function createTodo(val) {
    setList(
      list.concat({id: Date.now(), completed: false, title: val})
    )
  }

  return (
    <main className="App">
      <div className="container">
        <AddTodo createTodo={createTodo} />
        <TodoList todoList={list} removeItem={removeItem} toggleTodo={toggleTodo} />
      </div>
    </main>
  );
}

export default App;
