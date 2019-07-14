export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const DELETE_TODO = 'DELETE_TODO'

export function addTodoAction(task) {
    return {
        type: ADD_TODO,
        payload: {
            value: task,
            completed: false
        }
    }
}

export function toggleCompletedAction(id) {
    return {
        type: TOGGLE_COMPLETED,
        payload: {
            id
        }
    }
}

export function deleteTodoAction(id) {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}