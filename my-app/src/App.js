import btn from  "./Button.module.css";
import styles from "./App.module.css"
import { useState, useEffect } from 'react';
import { func } from "prop-types";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos(currentArray => [...currentArray, toDo]);
  }
  const onRemove = (index) => {setToDos(toDos.filter((list, todoindex) => index !== todoindex));
  }
  return <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type='text' placeholder="Write your to do..."/> 
      <button>Add To Do</button>
    </form>
    <hr />
    <ul>
      {toDos.reverse().map((item, index) =>(
      <li key={index}>
        {item}
        <button className={btn.btn} onClick={() => onRemove(index)}>X</button>
      </li>
      ))}
    </ul>
  </div>;
}

export default App;
