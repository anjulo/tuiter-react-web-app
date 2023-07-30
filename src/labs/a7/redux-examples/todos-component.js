import React, { useState } from "react";         // import useState to work with local state
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";  //import reducer function implemented in redux stores

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({ do: '' });       // create todo local state variable

  const todoChangeHandler = (event) => {              // handle keystroke changes in input field
    const doValue = event.target.value;               // get data from input field
    const newTodo = {                                 // create new todo object instance  
      do: doValue                                     // setting the todo's do property 
    };
    setTodo(newTodo);                                  // change local state todo variable
  }
  

  const dispatch = useDispatch();                   // get distacher to invoke reducer functions
  const deleteTodoClickHandler = (index) => {            // handle delete button click, accepts todo inde
    dispatch(deleteTodo(index))                         // dispatch event to deleteTodo reducer function
  }                                                // passing index of todo we want to delete
  const toggleTodoDone = (todo) => {   // handle checkbox click event, accept todo index
    dispatch(todoDoneToggle(todo))    // send todo to reducer function 
  }

  const createTodoClickHandler = () => {            // handle click event of button
    dispatch(addTodo(todo))                         // call reducer function passing new todo
  }                                                // as the payload in the action object

  return (
    <React.Fragment>
      <h3>Todos</h3>
      <ul className="list-group">
        {
          todos.map((todo, index) =>
            <li className="list-group-item w-75">                 
              <input type="checkbox" checked={todo.done} className="me-2"   // new checkbox which is checked if todo.done is true
                onChange={() =>                                             // if user changes checkbox, we'll pass the todo to reducer function to update todo's state
                  toggleTodoDone(todo)} />                                 
              {todo.do}
              <button className="btn btn-danger float-end ms-2 rounded-pill"             // new Delete button sends index of todo to
                onClick={() =>                                             // delete to handler. Note () => {} because we are passing index parameter otherwise gets into infinite loop
                  deleteTodoClickHandler(index)}>                          
                Delete
              </button>
            </li>
          )
        }
        <li className="list-group-item w-75">                               {/* new list item with input field and button */}
          <input
            onChange={todoChangeHandler}
            // value={todo.do}
            className="form-control w-75 float-start" />
          <button onClick={createTodoClickHandler}                         // new button to add new todo; calls function to handle click event
            className="btn btn-primary w-25 float-end rounded-pill">                    
            Create</button>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default Todos;

