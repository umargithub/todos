import TodoItem from './TodoItem';

function Todos({ todos, setTodos }) {

  const handleSave = (index, text) => {
      console.log(text)
      const updatedTodos = todos.map((todo, i) => {
          if (i === index) {
              return text;
          }
          return todo;
      });
      setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
      console.log(index)
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
                    todo={todo}
                    handleSave={(updatedTodo) => handleSave(index, updatedTodo)}
                    handleDelete={() => handleDelete(index)}
                />
            ))}
        </ul>
    </div>
  );
}

export default Todos;
