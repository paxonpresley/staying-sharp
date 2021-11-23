import React, { useState } from 'react';

function TodoForm() {

    const [input, setInput] = useState('');
    const randomNumber = Math.floor(Math.randomNumber(1 - 1000000));

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: randomNumber,
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