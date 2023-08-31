import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodosProvider } from './context/TodosContext.jsx'
import { AppModeProvider } from './context/AppModeContext.jsx'
import { TabHandelProvider } from './context/TabHandelContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosProvider>
      <TabHandelProvider>
        <AppModeProvider>
            <App />
        </AppModeProvider>
      </TabHandelProvider>
    </TodosProvider>
  </React.StrictMode>,
)
