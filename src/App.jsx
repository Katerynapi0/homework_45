import React from 'react';
import { Provider } from 'react-redux';
import store from "../redux/store";
import TodoList from './TodoList';

function App() {
  return(
    <Provider store={store}>
    <div>
      <h1>Todo List</h1>
      <div className="card">
        <TodoList />
      </div>
    </div>
    </Provider>
  );
}

export default App;