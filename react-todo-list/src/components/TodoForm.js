import React, { useState } from 'react';

function TodoForm() {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() = 10000000),
            text: input
        });
        setInput('');
    };

    return <div className="todo-form-container">
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Add a Todo" 
                value={input} 
                name="text" 
                className="todo-input"
                onChange={handleChange}
                />
                <button className="todo-btn">Add Todo</button>
            </form>
        </div>;
}
 
export default TodoForm;