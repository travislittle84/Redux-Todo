import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from './actions'

const initialState = {
    todos: [{
        value: 'Take out the trash',
        completed: false
    },{
        value: 'Clean bathrooms',
        completed: false
    },{
        value: 'Walk the dog',
        completed: false
    }]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            const todoArray = [action.payload]  // because concat only works w/ arrays
            const newAddTodoList = state.todos.concat(todoArray)
            return {
                ...state,
                todos: newAddTodoList
            }
        case TOGGLE_COMPLETED:
            const idToToggle = parseInt(action.payload.id)
            const newToggleList = state.todos.map((todo, index) => {
                if (idToToggle === index) {
                    todo.completed ? todo.completed = false : todo.completed = true
                }
                return todo
            })
            return {
                ...state,
                todos: newToggleList
            }         
        case DELETE_TODO:       // stretch goal not yet impletemented
            console.log("delete payload", action.payload)
            const idToRemove = parseInt(action.payload.id)
            
            const newList = state.todos.filter((todo, index) => {
                    if(index !== idToRemove) {
                        return true
                    }
            })
            return {
                ...state,
                todos: newList
            }
        default:
            return state
    }
}