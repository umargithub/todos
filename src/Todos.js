import React, { useState } from 'react';
import TodoItem from './TodoItem';

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
                <TodoItem
                    key={index}
                    index={index}
                    editingIndex={editingIndex}
                    editText={editText}
                    todo={todo}
                    handleEdit={handleEdit}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    setEditText={setEditText}
                />
            ))}
        </ul>
    </div>
  );
}

export default Todos;
