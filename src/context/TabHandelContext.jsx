import { createContext, useContext, useEffect, useState } from "react";
import { TodosContext } from "./TodosContext";

export const TabHandelContext = createContext();

export const TabHandelProvider = ({ children }) => {

    const [activeTap, setActiveTap] = useState("All")
    const {setTodoList, todoList} = useContext(TodosContext)

    const [newTodoList, setNewTodoList] = useState(todoList)

    const clearCompeleted = () =>{
      setTodoList(todoList.filter(todo => {
        return todo.state === false
      }))
    }

    

    const handelClick = (value)=>{
      setActiveTap(value)
      setNewTodoList(todoList.filter(todo => {
        if(value === "All") return todo
        if(value === "Active") return todo.state === false
        if(value === "Compeleted") return todo.state === true

      }))
    }

    useEffect(()=>{
      setNewTodoList(todoList)
    },[todoList])

  return (
    <TabHandelContext.Provider
      value={{activeTap, setActiveTap, clearCompeleted, handelClick, newTodoList}}
    >
      {children}
    </TabHandelContext.Provider>
  );
};
