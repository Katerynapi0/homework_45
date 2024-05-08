import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from "../redux/actions";

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if(inputValue.trim() !== ''){
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    };

    const handleTodoClick = (index) => {
        dispatch(toggleTodo(index));
    };

    return(
        <div>
            <input type="text" placeholder="Введіть нову задачу" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Додати задачу</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} onClick={() => handleTodoClick(index)} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;