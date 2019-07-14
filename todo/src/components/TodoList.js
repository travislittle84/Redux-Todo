import React from 'react'
import { connect } from 'react-redux'
import { toggleCompletedAction, deleteTodoAction } from '../actions'

import deleteImg from "../images/cancel.png"

function TodoList (props) {

    const handleClick = (event) => {
        event.preventDefault()        
        props.toggleCompletedAction(event.target.id)
    }
    const handleDelete = (event) => {
        event.preventDefault()
        event.stopPropagation()
        props.deleteTodoAction(event.target.id)
    }
    const { todos } = props
    return (
    <ul>
        {todos.map((todo, index) => {
            return (
                <li 
                      id={index}
                      fuck="delete"
                      name="todo-item" 
                      key={index} 
                      onClick={handleClick}
                      className={todo.completed ? "completed" : ""}>
                      {todo.value}
                      <img className="icon" name="delete-icon" id={index} onClick={handleDelete} src={deleteImg}/>                     
                    </li>
                    
            )
        })}
    </ul>
    )
}
// Not using arrow function as a reminder
// the mapStateToProps function should be a pure function
function mapStateToProps(state) {   
    return {
        todos: state.todos
    }
}

const  mapDispatchToProps = {
    toggleCompletedAction: toggleCompletedAction,
    deleteTodoAction: deleteTodoAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
