import { useState } from 'react';

import Todo from './components/todo';
import TodoForm from './components/TodoForm';

import './App.css';
import Search from './components/Search';

function App() {
  const [todos, setTodos]= useState([
    {id: 1,
      text: 'criar funcionalidade X no sistema',
      category: 'trabalho',
      isCompleted: false,
    },
    {id: 2,
      text: 'ir pra academia',
      category: 'pessoal',
      isCompleted: false,
    },
    {id: 3,
      text: 'estudar react',
      category: 'estudos',
      isCompleted: false,
    },

  ]);

  const addTodo= (text, category) =>{
    
    const newTodos=[
      ...todos, 
      {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
  ];
  setTodos(newTodos);
  };

  const completeTodo =(id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  const removeTodo = (id) =>{
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos)
  };


  return (
  <div className="app">
    <h1>Lista de tarefas</h1>
    <Search />
    <div className="todo-list">
      {todos.map((todo)=> (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>
  );
}

export default App;
