import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Todos from './Todos.js';
import Form from './Form.js';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Todo App</h1>
      <Form setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />  
    </div>
  );
}

export default App;
