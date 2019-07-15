import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../actions'

// reactsrap components
import { Button, Input, Form } from 'reactstrap'

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
        <Form id="todo-input-form" onSubmit={this.handleSubmit}>
            <Input type="text" name="todo" id="todo-input-box" onChange={this.handleChange} value={this.state.todo} placeholder="What do you need to do?"/>
            <Button block outline id="add-todo-button" >Add Todo</Button>            
        </Form>
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