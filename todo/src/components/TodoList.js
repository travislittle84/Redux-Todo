import React from 'react'
import { connect } from 'react-redux'
import { toggleCompletedAction } from '../actions'

function TodoList (props) {

    const handleClick = (event) => {
        event.preventDefault()
        props.toggleCompletedAction(event.target.id)
    }
    const { todos } = props
    return (
    <ul>
        {todos.map((todo, index) => {
            return <li 
                      id={index} 
                      key={index} 
                      onClick={handleClick}
                      className={todo.completed ? "completed" : ""}>
                      {todo.value}                      
                    </li>
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
    toggleCompletedAction: toggleCompletedAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
