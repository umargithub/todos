import React, { useState } from 'react';

function TodoItem({ index, todo, handleDelete, handleSave }) {

    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState('');

    const handleEdit = (text) => {
        setEditing(!editing);
        setEditText(text);
    };
 
    return (
        <li className="item" key={index}>
            {(editing) ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <>
                    <input type="checkbox" id={`checkbox${index}`} />
                    <label htmlFor={`checkbox${index}`}>{todo}</label>
                </>
            )}
            {(editing) ? (
                <span className="icon save-icon" onClick={() => { setEditing(!editing); handleSave(editText)}}>
                    <i className="fas fa-save"></i>
                </span>
            ) : (
                <span className="icon edit-icon" onClick={() => handleEdit(todo)}>
                    <i className="fas fa-edit"></i>
                </span>
            )}
            <span className="icon trash-icon" onClick={() => handleDelete()}>
                <i className="fas fa-trash-alt"></i>
            </span>
        </li>
    )
}

export default TodoItem;