import { ADD_ITEM, REM_ITEM, COM_ITEM } from "../actions/types";

const initialState = {
    todos: [],
    duplicate: !!0
}

const todoReducer = (state = initialState, action) => {
    let todos = Object.assign([], state.todos), duplicate = !!0;
    switch (action.type) {
        case ADD_ITEM:
            for (let i = 0, len = todos.length; i < len; i++)
                if (todos[i].text === action.payload.text)
                    duplicate = !duplicate;
            if (!duplicate)
                todos.push(action.payload);
            return {
                ...state,
                todos,
                duplicate
            }
        case REM_ITEM:
            for (let i = 0, len = todos.length; i < len; i++)
                if (todos[i].id == action.payload)
                    todos.splice(i, 1);
            return {
                ...state,
                todos,
                duplicate
            }
        case COM_ITEM:
            for (let i = 0, len = todos.length; i < len; i++)
                if (todos[i].id == action.payload)
                    todos[i].completed = !todos[i].completed;
            return {
                ...state,
                todos,
                duplicate
            }
        default: return state;
    }
}

export default todoReducer;