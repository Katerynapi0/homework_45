const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch(action.type){
    case'ADD_TODO':
    return{
      ...state,
      todos:[...state.todos, action.payload]
    };
    case'TOGGLE_TODO':
    return{
      ...state,
      todos: state.todos.map((todo, index) => 
        index === action.payload ? {...todo, completed: !todo.completed} : todo
      )
    };
    default:
      return state;
  }
};

export default todoReducer;