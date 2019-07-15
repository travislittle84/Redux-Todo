import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <h3>with react-redux to make it go</h3>
      <h2>...and reactstrap to make it pretty</h2>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
