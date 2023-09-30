import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    }
  };

  const toggleTodoStatus = (id) => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={() => toggleTodoStatus(obj.id)}
                checked={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => deleteTodo(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}

        {toDos
          .filter((obj) => obj.status)
          .map((obj) => (
            <h1 key={obj.id}>{obj.text}</h1>
          ))}
      </div>
    </div>
  );
}

export default App;
