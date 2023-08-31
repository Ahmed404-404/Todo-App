import React, { useContext } from 'react'
import {MdLightMode, MdDarkMode} from "react-icons/md"
import AddTask from './AddTask'
import TasksContainer from './TasksContainer'
import { AppModeContext } from '../context/AppModeContext'

const TodosContainer = () => {

    const {isDarkMode, setIsDarkMode} = useContext(AppModeContext)

  return (
    <div className='z-10 flex flex-col gap-4 max-w-full'>
        <div className='flex gap-4 justify-between items-center mb-4'>
            <h1 className='font-semibold text-2xl uppercase text-white-2 tracking-[10px]'>todo</h1>
            <button
                className='modeButton text-white-2 text-lg hover:text-main-blue transition'
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label='mode changer'
            >
                {
                    isDarkMode ? (
                        <MdLightMode/>
                        ): (
                            
                        <MdDarkMode/>
                    )
                }
            </button>
        </div>
        <AddTask/>
        <TasksContainer/>
    </div>
  )
}

export default TodosContainer