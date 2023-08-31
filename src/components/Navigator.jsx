import React, { useContext } from 'react'
import { AppModeContext } from '../context/AppModeContext'
import { TabHandelContext } from '../context/TabHandelContext'
import { TodosContext } from '../context/TodosContext'

const Navigator = () => {

    const {isDarkMode} = useContext(AppModeContext)
    const {activeTap, setActiveTap, clearCompeleted, handelClick} = useContext(TabHandelContext)
    const {todoList} = useContext(TodosContext)
  return (
        todoList.length > 0 && (
            <div className='px-4 py-3 flex gap-4 flex-wrap justify-between items-center content-center'>
            <span className={`${isDarkMode? "text-[#777a92]" : "text-[#484b6a]"}  flex-shrink-0 flex-grow text-left  `}>{todoList.length} items</span>
            <div className='flex gap-2 flex-1 justify-center '>
                <button 
                    className={`capitalize ${isDarkMode? "hover:text-white" : "hover:text-black"} transition ${activeTap === "All" && "ActiveTab"}`}
                    onClick={(e) => handelClick(e.target.value)}
                    value={"All"}
                >
                        All
                    </button>
                <button 
                    className={`capitalize ${isDarkMode? "hover:text-white" : "hover:text-black"} transition ${activeTap === "Active" && "ActiveTab"}`}
                    onClick={(e) => handelClick(e.target.value)}
                    value={"Active"}
                >
                        Active
                    </button>
                <button 
                    className={`capitalize ${isDarkMode? "hover:text-white" : "hover:text-black"} transition ${activeTap === "Compeleted" && "ActiveTab"}`}
                    onClick={(e) => handelClick(e.target.value)}
                    value={"Compeleted"}
                >
                   Completed     
                    </button>
            </div>
            <button 
                className={` flex-shrink-0 flex-grow first-letter:capitalize hover:${isDarkMode? "text-white" : "text-black"} transition`}
                onClick={()=>clearCompeleted()}
            >clear combleted</button>
        </div>
        )
  )
}

export default Navigator