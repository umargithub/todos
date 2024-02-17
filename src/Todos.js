import React, { useState } from 'react';

function Todos({ todos, setTodos }) {

  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (index, text) => {
      setEditingIndex(index);
      setEditText(text);
  };

  const handleSave = (index) => {
      const updatedTodos = todos.map((todo, i) => {
          if (i === index) {
              return editText;
          }
          return todo;
      });
      setTodos(updatedTodos);
      setEditingIndex(null);
  };

  const handleDelete = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
  };

  return (
    <div className="todos">
        <h2>Todos list</h2>
        <ul className="items">
            {todos.map((todo, index) => (
                <li className="item" key={index}>
                    {editingIndex === index ? (
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
                    {editingIndex === index ? (
                        <span className="icon save-icon" onClick={() => handleSave(index)}>
                            <i className="fas fa-save"></i>
                        </span>
                    ) : (
                        <span className="icon edit-icon" onClick={() => handleEdit(index, todo)}>
                            <i className="fas fa-edit"></i>
                        </span>
                    )}
                    <span className="icon trash-icon" onClick={() => handleDelete(index)}>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </li>
            ))}
        </ul>
    </div>
);
}

export default Todos;