import React, { useState, useContext } from 'react'
import {TodosContext} from "../context/TodosContext"
import { AppModeContext } from '../context/AppModeContext'
const AddTask = () => {

  const {isDarkMode} = useContext(AppModeContext)
  const {setNewTodo, handelAdd} = useContext(TodosContext)

  const handelEnterEvent = (e)=>{
    if(e.key === "Enter"){
      console.log(e.key) 
      handelAdd()
    }
  }
  

  return (
    <div className={`flex items-center  gap-2 transition ${isDarkMode? "bg-second-dark" : "bg-white-2"} rounded-md py-2 px-4`}>
        <button
          className='border border-[#cacde8] flex-shrink-0 hover:border-[#e4e5f1] transition w-4 h-4 rounded-full '
          onClick={() => handelAdd()}
        >
        </button>
        <input 
            type="text" 
            className={`bg-transparent transition ${isDarkMode ? "text-white-2" : "text-[#484b6a]"} text-[18px] outline-none caret-main-blue flex-1 max-w-[90%]`}
            placeholder='Create a todo...'
            onChange={(e)=> setNewTodo(e.target.value)}
            onKeyDown={handelEnterEvent}
        />
    </div>
  )
}

export default AddTask