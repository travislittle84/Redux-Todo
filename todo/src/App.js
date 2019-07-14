import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TODO LIST REACT REDUX</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
