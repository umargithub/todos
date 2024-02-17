import React, { useState } from 'react';

function Form({ setTodos }) {
    const [todoInput, setTodoInput] = useState('');

    const handleInputChange = (event) => {
        setTodoInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoInput.trim() !== '') {
            setTodos(prevTodos => [...prevTodos, todoInput]);
            setTodoInput('');
        }
    };
    return (
        <>
            <div className="form">
                <h2>Add a Todo</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add a Todo"
                        value={todoInput}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    );
}

export default Form;