function TodoItem({ index, editingIndex, editText, todo, handleDelete, handleEdit, handleSave, setEditText }) {
    
    return (
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
    )
}

export default TodoItem;