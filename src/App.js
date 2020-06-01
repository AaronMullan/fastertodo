import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['blah', 'blough', 'blue']);
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <h1>hello world</h1>
      <ul>
        {todos.map(todo => <li
        >  {todo}
        </li>)}
      </ul>
      <form>
        <input type="text" 
        value={value} 
        onChange={setValue(e => e.target.value())}/>
      </form>
    </div>
  );
}

export default App;
