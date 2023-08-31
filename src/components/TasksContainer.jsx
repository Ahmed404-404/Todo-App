import React, { useContext, useState } from 'react'
import { todosArray } from '../sourceTodos'
import ChackedImage from "../assets/imgs/icon-check.svg"
import CrossImage from "../assets/imgs/icon-cross.svg"
import { TodosContext } from '../context/TodosContext'
import { AppModeContext } from '../context/AppModeContext'
import Navigator from './Navigator'
import { TabHandelContext } from '../context/TabHandelContext'


const TasksContainer = () => {
    const {isDarkMode} = useContext(AppModeContext)
    const {todoList, handelCheck, handelDelete} =useContext(TodosContext)
    const {newTodoList} = useContext(TabHandelContext)
    
    console.table(todoList)
  return (
    <div className={`${isDarkMode ? "bg-second-dark text-white-2":"bg-white-2 text-[#484b6a]"} transition rounded-md`}>
        <ul>
            {
                newTodoList.map((todo,index)=> (
                    <li 
                        key={index}
                        className={`px-4 py-3 flex items-center gap-4 group border-b ${isDarkMode ? "border-[#4d5066]" : "border-[#9394a5]"} text-[18px]`}
                        
                    >
                        <span 
                            className={`w-4 h-4 bg-pattern rounded-full grid place-content-center relative cursor-pointer`}
                            onClick={()=> handelCheck(todo.id)}
                        >
                            <span 
                                className={`w-full h-full ${isDarkMode? "bg-second-dark" : "bg-white-2"} absolute rounded-full border border-[#cacde8] group-hover:border-none group-hover:w-[14px] group-hover:h-[14px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transition ${todo.state && "scale-0"}`}
                            >
                            </span>
                            <img src={ChackedImage} className='w-[9px]'/>
                        </span>
                        <span className={`${todo.state && "line-through text-[#d2d3db] transition"} flex-auto flex items-center justify-between transition`}>
                            <span>{todo.content}</span>
                            <button
                                onClick={(e)=> {
                                    e.preventDefault() 
                                    handelDelete(todo.id)
                                }}
                            >
                                <img src={CrossImage} className='w-[12px] transition scale-0 group-hover:scale-100'/>
                            </button>
                        </span>
                    </li>
                ))
            }
        </ul>
        <Navigator/>
    </div>
  )
}

export default TasksContainer