import { createContext, useEffect, useState } from "react";
import { todosArray } from "../sourceTodos";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {

  const [newTodo, setNewTodo] = useState("");


  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  const handelCheck = (id) => {
    const newState = todoList.map((todo) => {
      console.log("check event");
      if (todo.id === id) return { ...todo, state: !todo.state };
      return todo;
    });
    setTodoList(newState);
  };

  const handelDelete = (id) => {
    setTodoList((oldTodos) => {
      return oldTodos.filter((todo) => todo.id !== id);
    });
  };

  const handelAdd = (e) => {
    if(newTodo !== "" ) {
      setTodoList([...todoList, { id: Date.now(), content: newTodo, state: false }])
      setNewTodo("")
    }
    
  };

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
    
  },[todoList])
  // useEffect(()=>{
  //   setTodoList(JSON.parse(localStorage.getItem("todos")))
  // },[])

  return (
    <TodosContext.Provider
      value={{ todoList, handelCheck, handelDelete, setNewTodo, handelAdd, setTodoList}}
    >
      {children}
    </TodosContext.Provider>
  );
};
