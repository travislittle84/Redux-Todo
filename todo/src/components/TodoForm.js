import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../actions'

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            todo: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        // call action creator
        this.props.addTodoAction(this.state.todo)

        // reset form
        this.setState({
            todo: ''
        })
    }
    
    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="todo" onChange={this.handleChange} value={this.state.todo} placeholder="What do you need to do?"/>
            <button type="submit">Add Todo</button>
        </form>
        )    
    }
}

function mapStateToProps(state) {
    return {
      todos: state.todos  
    }
}

const mapDispatchToProps ={
    addTodoAction: addTodoAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoForm)