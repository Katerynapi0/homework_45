export const addTodo = (task) => ({
  type: 'ADD_TODO',
  payload: {task, completed: false}
});

export const toggleTodo = (index) => ({
  type: 'TOGGLE_TODO',
  payload: index
});