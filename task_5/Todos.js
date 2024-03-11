import React, { useState } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);
  //creating a empty list of todos
  const [newTodo, setNewTodo] = useState('');
  const [errorMsg,setErrorMsg]=useState('');

  

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
    //empty todo string is avoided using the trim()
            
          setTodos([newTodo,...todos]);
          console.log(newTodo)
    //each new todo is appended to the beginning of the list
      setNewTodo('');
      setErrorMsg("")
    }
    else{
      setErrorMsg("Please enter a valid name") 
    }
  };

  const handleDeleteTodo=(index)=>{
    const Deltodo=[...todos]
    Deltodo.splice(index,1)
    setTodos(Deltodo)
  };
  const handleDeleteAll=()=>{
    const Delalltodo=[...todos]
    Delalltodo.splice(0,todos.length)
    setTodos(Delalltodo)
  };

  const handleEditTodo = (index, editedtodo) => {
    const editedtodos = [...todos];
    editedtodos[index] = editedtodo;
    setTodos(editedtodos);   
    console.log(editedtodo)
  };

  return (
    <div className="App">
      <h1>To-do Application</h1>
      <div >
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleDeleteAll}>Delete All</button><br/>
        {errorMsg && <div className="error"> {errorMsg} </div>}
        </div>
        <ul>
          {todos.map((todo,index) => (

            <li key={index}>
            <input type="text" value={todos[index]} onChange={(e)=>handleEditTodo(index,e.target.value)} />
            <button onClick={() => handleDeleteTodo(index)}>Delete</button><br/>
            </li>
          ))}
        </ul>
      
    </div>
  );
}

export default Todos;
